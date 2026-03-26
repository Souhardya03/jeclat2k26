import { google } from "googleapis";

// ── Column headers written on the first row of each new sheet tab ─────────────
const HEADERS = [
  "Ticket ID",
  "Registered At",
  "Name",
  "Email",
  "Year",
  "Branch",
  "Gender",
  "Roll Number",
  "College",
  "Team Name",
  "Team Members",        // semicolon-separated "Name <email> (Branch, Year, Roll)" strings
  "Event ID",
  "Event Category",
  "Event Date",
  "Event Venue",
];

// ── Sanitise a sheet tab name (Sheets has a 100-char limit, no special chars) ─
function toSheetTitle(eventTitle: string): string {
  return eventTitle
    .replace(/[\\/*?:\[\]]/g, "")   // remove chars forbidden in sheet names
    .slice(0, 100)
    .trim();
}

// ── Build the Sheets API client via Service Account ───────────────────────────
function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      // Next.js reads \n as a literal backslash-n from .env; restore real newlines.
      private_key: (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

// ── Ensure a tab named `title` exists; return its sheetId ─────────────────────
async function ensureSheet(
  sheets: ReturnType<typeof getSheetsClient>,
  spreadsheetId: string,
  title: string,
): Promise<void> {
  const meta = await sheets.spreadsheets.get({ spreadsheetId });
  const existing = meta.data.sheets?.find(
    (s) => s.properties?.title === title,
  );

  if (!existing) {
    // Create the tab and write the header row in one batch request.
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          { addSheet: { properties: { title } } },
        ],
      },
    });

    // Write header row immediately after creating the tab.
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `'${title}'!A1`,
      valueInputOption: "RAW",
      requestBody: { values: [HEADERS] },
    });
  }
}

// ── Public function called from route.ts ──────────────────────────────────────
export interface RegistrationSheetRow {
  eventTitle:    string;
  eventId:       string;
  eventCategory: string;
  eventDate:     string;
  eventVenue:    string;
  name:          string;
  email:         string;
  year:          string;
  branch:        string;
  gender:        string;
  rollNumber:    string;
  college:       string;
  teamName:      string;
  // email is now included per-member (added in Registration model update)
  teamMembers:   { name: string; email: string; year: string; branch: string; rollNumber: string }[];
  ticketId:      string;
  registeredAt:  string; // ISO string
}

export async function appendToSheet(data: RegistrationSheetRow): Promise<void> {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  if (!spreadsheetId) {
    console.warn("[Sheets] GOOGLE_SHEET_ID not set — skipping sheet append.");
    return;
  }

  const sheets    = getSheetsClient();
  const sheetName = toSheetTitle(data.eventTitle);

  // Create the tab + header if it doesn't exist yet.
  await ensureSheet(sheets, spreadsheetId, sheetName);

  // Format team members as a readable string including email:
  // "Alice <alice@college.edu> (CSE, 2nd Year, Roll: 12345); Bob ..."
  const membersStr = data.teamMembers
    .map((m) => `${m.name} <${m.email}> (${m.branch}, ${m.year}, Roll: ${m.rollNumber})`)
    .join("; ");

  const row = [
    data.ticketId,
    new Date(data.registeredAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    data.name,
    data.email,
    data.year,
    data.branch,
    data.gender,
    data.rollNumber,
    data.college,
    data.teamName  || "—",
    membersStr     || "—",
    data.eventId,
    data.eventCategory,
    data.eventDate,
    data.eventVenue,
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `'${sheetName}'!A1`,   // Sheets will find the next empty row automatically.
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row] },
  });
}