import flash_mob from "@/public/images/eventImages/flash-mob1.jpg";
import elementary from "@/public/images/eventImages/elementary1.jpg";
import short_film from "@/public/images/eventImages/short-film.jpeg";
import memesis from "@/public/images/eventImages/memesis1.jpg";
import selfie_contest from "@/public/images/eventImages/selfie-contest1.jpeg";
import photography_contest from "@/public/images/eventImages/photography-contest.png";
import wall_painting from "@/public/images/eventImages/wall-painting.png";
import roadies from "@/public/images/eventImages/roadies1.jpeg";
import tshirt_painting from "@/public/images/eventImages/t-shirt.png";
import antakshari from "@/public/images/eventImages/antakshari.jpg";
import open_mic from "@/public/images/eventImages/open-mic1.jpg";
import j_factor from "@/public/images/eventImages/j-factor1.jpeg";
import prom_night from "@/public/images/eventImages/prom_night1.png";
import debate_competition from "@/public/images/eventImages/debate1.jpg";
import fashion_show from "@/public/images/eventImages/fashion_show1.png";
import malle from "@/public/images/eventImages/male2.jpg";
import quiz from "@/public/images/eventImages/quiz.jpg";
import pen_your_love from "@/public/images/eventImages/pen-your-love1.jpeg";
import treasure_hunt from "@/public/images/eventImages/treasure-hunt1.jpeg";
import mock_auction from "@/public/images/eventImages/mock-auction.jpg";
import band_blast from "@/public/images/eventImages/band-blast.png";
import depicta from "@/public/images/eventImages/Depicta.png";
import wavez_night from "@/public/images/eventImages/wavezz1.jpg";
import reunion from "@/public/images/eventImages/reunion.jpg";
import calliphony_night from "@/public/images/eventImages/caliphony_night1.png";
import grand_social_night from "@/public/images/eventImages/social_night.png";
import made_for_each_other from "@/public/images/eventImages/made-for1.jpg";
import init from "@/public/images/eventImages/init.png";
import cultural from "@/public/images/eventImages/cultural.jpg";
import jyoti from "@/public/images/eventImages/jyoti.jpg";
import cs_go from "@/public/images/eventImages/cs-go.png";


export const eventData = [
  // --- PRE EVENTS ---
  {
    id: "flash-mob",
    type: "pre-event",
    image: flash_mob,
    maxMembers: 1,
    registrationOpen: false,
    eventInfo: {
      title: "Flash Mob",
      description: "A thrilling pre-event spectacle of spontaneous choreographed dance and music.",
      category: "Pre Events",
      venue: "Not Decided",
      date: "8th March, 2026"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [{ name: "CORE COMMITTEE", contact: "" }],
      },
    ],
  },
  {
    id: "selfie-contest",
    type: "pre-event",
    image: selfie_contest,
    maxMembers: 1,
    registrationOpen: false,
    eventInfo: {
      title: "Selfie Contest",
      description: "Online selfie competition",
      category: "Pre Events",
      venue: "Online",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [{ name: "CORE COMMITTEE", contact: "" }],
      },
    ],
  },
  {
    id: "memesis",
    type: "pre-event",
    image: memesis,
    maxMembers: 1,
    registrationOpen: false,
    eventInfo: {
      title: "Memesis",
      description: "Meme creation competition",
      category: "Pre Events",
      venue: "Online",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [{ name: "CORE COMMITTEE", contact: "" }],
      },
    ],
  },

  // --- DAY 1 ---
  {
    id: "inauguration",
    type: "non-competitive-event",
    image: init, // Placeholder
    maxMembers: 0,
    registrationOpen: false,
    eventInfo: {
      title: "Inauguration",
      description: "Opening ceremony of JECLAT 2025",
      category: "Day 1",
      venue: "Old Auditorium",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [{ name: "CORE COMMITTEE", contact: "" }],
      },
    ],
  },
  {
    id: "cultural-performance",
    type: "non-competitive-event",
    image: cultural, // Placeholder
    maxMembers: 0,
    registrationOpen: false,
    eventInfo: {
      title: "Cultural Performance",
      description: "Cultural performances and celebrations",
      category: "Day 1",
      venue: "Old Auditorium",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [{ name: "CORE COMMITTEE", contact: "" }],
      },
    ],
  },
  {
    id: "jyoti-performance",
    type: "non-competitive-event",
    image: jyoti, // Placeholder
    maxMembers: 0,
    registrationOpen: false,
    eventInfo: {
      title: "Jyoti's Performance",
      description: "Special performance by Jyoti",
      category: "Day 1",
      venue: "Old Auditorium",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "Priya Mahato", contact: "7029391071" },
          // { name: "Rajat Nandi", contact: "8900352943" },
        ],
      },
    ],
  },
  {
    id: "roadies-interview",
    type: "competitive-event",
    image: roadies,
    maxMembers: 1,
    registrationOpen: false,
    eventInfo: {
      title: "Roadies Interview",
      description: "Interview session for Roadies",
      category: "Day 1",
      venue: "Old Auditorium",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "Anup Sharma", contact: "9475740532" },
          // { name: "Mahek Parvez", contact: "8597530118" },
        ],
      },
    ],
  },

  // --- DAY 2 ---
  {
    id: "t-shirt-painting",
    type: "competitive-event",
    image: tshirt_painting,
    maxMembers: 2,
    registrationOpen: false,
    eventInfo: {
      title: "T-Shirt Painting",
      description: "Creative t-shirt painting competition",
      category: "Day 2",
      venue: "Old Auditorium",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "Priya Mahato", contact: "7029391071" },
          // { name: "Dip Roy", contact: "9749021886" },
        ],
      },
    ],
  },
  {
    id: "mock-auction-prelims",
    type: "competitive-event",
    image: mock_auction,
    maxMembers: 4,
    registrationOpen: false,
    eventInfo: {
      title: "Mock Auction Prelims",
      description: "Preliminary rounds of Mock Auction",
      category: "Day 2",
      venue: "Old Auditorium",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "Sourav Ganguly", contact: "8918708847" },
          // { name: "Malay Poulik", contact: "7679185576" },
        ],
      },
    ],
  },
  {
    id: "malle-prelims",
    type: "competitive-event",
    image: malle,
    maxMembers: 2,
    registrationOpen: false,
    eventInfo: {
      title: "Malle Prelims",
      description: "Preliminary rounds of Malle",
      category: "Day 2",
      venue: "Old Auditorium",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "Ankit Sengupta", contact: "9679409501" },
          // { name: "Paramita Saha", contact: "9614234324" },
        ],
      },
    ],
  },
  {
    id: "treasure-hunt-prelims",
    type: "competitive-event",
    image: treasure_hunt,
    maxMembers: 4,
    registrationOpen: false,
    eventInfo: {
      title: "Treasure Hunt Prelims",
      description: "Preliminary rounds of Treasure Hunt",
      category: "Day 2",
      venue: "Old Auditorium",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "Atri Sukul", contact: "8900519836" },
          // { name: "Spandan Bhattacharya", contact: "9330184706" },
          // { name: "Om Kumar Sha", contact: "6290889507" },
        ],
      },
    ],
  },
  {
    id: "made-for-each-other",
    type: "non-competitive-event",
    image: made_for_each_other,
    maxMembers: 2,
    registrationOpen: false,
    eventInfo: {
      title: "Made For Each Other",
      description: "Student competition tests compatibility & skills.",
      category: "Day 2",
      venue: "Old Auditorium",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "Souvik Mondal", contact: "9883164350" },
          // { name: "Liza Goswami", contact: "9832675856" },
        ],
      },
    ],
  },
  {
    id: "cs-go",
    type: "competitive-event",
    image: cs_go, // Using Quiz placeholder if CSGO image is missing
    maxMembers: 5,
    registrationOpen: false,
    eventInfo: {
      title: "CS-GO",
      description: "Counter-Strike: Global Offensive tournament",
      category: "Day 2",
      venue: "Old Auditorium",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "Nilesh Kumar Hansda", contact: "9547944653" },
          // { name: "Choyan Biswas", contact: "8436381621" },
        ],
      },
    ],
  },
  {
    id: "mock-auction-final",
    type: "competitive-event",
    image: mock_auction,
    maxMembers: 0,
    registrationOpen: false,
    eventInfo: {
      title: "Mock Auction Final",
      description: "Final round of Mock Auction",
      category: "Day 2",
      venue: "Old Auditorium",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "Sourav Ganguly", contact: "8918708847" },
          // { name: "Malay Poulik", contact: "7679185576" },
        ],
      },
    ],
  },

  // --- DAY 3 ---
  {
    id: "wall-painting",
    type: "competitive-event",
    image: wall_painting,
    maxMembers: 4,
    registrationOpen: false,
    eventInfo: {
      title: "Wall Painting",
      description: "Creative wall painting competition",
      category: "Day 3",
      venue: "Campus",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "Pankaj Barman", contact: "8101480752" },
          // { name: "Priya Mahato", contact: "7029391071" },
        ],
      },
    ],
  },
  {
    id: "antakshari-prelims",
    type: "competitive-event",
    image: antakshari,
    maxMembers: 2,
    registrationOpen: false,
    eventInfo: {
      title: "Antakshari Prelims",
      description: "Preliminary rounds of Antakshari",
      category: "Day 3",
      venue: "Old Auditorium",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "Rohit Mondal", contact: "9735245251" },
          // { name: "Abhirup Banerjee", contact: "9883915504" },
        ],
      },
    ],
  },
  {
    id: "pen-your-love",
    type: "competitive-event",
    image: pen_your_love,
    maxMembers: 1,
    registrationOpen: false,
    eventInfo: {
      title: "Pen Your Love",
      description: "Creative writing competition",
      category: "Day 3",
      venue: "Old Auditorium",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "Arijit Saha", contact: "8617673489" },
          // { name: "Aditi Pal", contact: "8902797178" },
        ],
      },
    ],
  },
  {
    id: "precognition",
    type: "competitive-event",
    image: quiz,
    maxMembers: 2,
    registrationOpen: false,
    eventInfo: {
      title: "Precognition",
      description: "General knowledge quiz competition",
      category: "Day 3",
      venue: "Old Auditorium",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "Uttaran Kundu", contact: "9064894622" },
          // { name: "Subham Kar", contact: "8670338017" },
        ],
      },
    ],
  },
  {
    id: "band-blast",
    type: "competitive-event",
    image: band_blast,
    maxMembers: 8,
    registrationOpen: false,
    eventInfo: {
      title: "Band Blast",
      description: "Live band performance competition",
      category: "Day 3",
      venue: "Old Auditorium",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "Souvik Mondal", contact: "9883164350" }
        ],
      },
    ],
  },
  {
    id: "fashion-show",
    type: "competitive-event",
    image: fashion_show,
    maxMembers: 6,
    registrationOpen: false,
    eventInfo: {
      title: "Fashion Show",
      description: "Glamorous fashion show event",
      category: "Day 3",
      venue: "Old Auditorium",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "Bhumika Roy", contact: "7864008846" },
          // { name: "Sagnik Banerjee", contact: "7044709722" },
          // { name: "Pankaj Barman", contact: "8101480752" },
        ],
      },
    ],
  },

  // --- DAY 4 ---
  {
    id: "roadies",
    type: "competitive-event",
    image: roadies,
    maxMembers: 0,
    registrationOpen: false,
    eventInfo: {
      title: "Roadies",
      description: "Adventure and challenge based competition",
      category: "Day 4",
      venue: "Campus",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "Anup Sharma", contact: "9475740532" },
          // { name: "Mahek Parvez", contact: "8597530118" },
        ],
      },
    ],
  },
  {
    id: "clairvoyance",
    type: "competitive-event",
    image: quiz,
    maxMembers: 0,
    registrationOpen: false,
    eventInfo: {
      title: "Clairvoyance",
      description: "General knowledge quiz competition",
      category: "Day 4",
      venue: "Campus",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "Spandan Bhattacharya", contact: "9330184706" },
          // { name: "Ankit Sengupta", contact: "9679409501" },
        ],
      },
    ],
  },
  {
    id: "malle-final",
    type: "competitive-event",
    image: malle,
    maxMembers: 0,
    registrationOpen: false,
    eventInfo: {
      title: "Malle Final",
      description: "Final round of Malle competition",
      category: "Day 4",
      venue: "Old Auditorium",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "Ankit Sengupta", contact: "9679409501" },
          // { name: "Paramita Saha", contact: "9614234324" },
        ],
      },
    ],
  },
  {
    id: "antakshari-final",
    type: "competitive-event",
    image: antakshari,
    maxMembers: 2,
    registrationOpen: false,
    eventInfo: {
      title: "Antakshari Final",
      description: "Final round of Antakshari",
      category: "Day 4",
      venue: "Old Auditorium",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "Rohit Mondal", contact: "9735245251" },
          // { name: "Abhirup Banerjee", contact: "9883915504" },
        ],
      },
    ],
  },
  {
    id: "j-factor",
    type: "competitive-event",
    image: j_factor,
    maxMembers: 1,
    registrationOpen: false,
    eventInfo: {
      title: "J-Factor",
      description: "Talent showcase competition",
      category: "Day 4",
      venue: "Old Auditorium",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "Spandan Bhattacharya", contact: "9330184706" },
          // { name: "Ananya Mondal", contact: "7866954016" },
        ],
      },
    ],
  },
  {
    id: "prom-night",
    type: "non-competitive-event",
    image: prom_night,
    maxMembers: 2,
    registrationOpen: false,
    eventInfo: {
      title: "Prom Night",
      description: "Formal dance and social gathering",
      category: "Day 4",
      venue: "Old Auditorium",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "CORE COMMITTEE", contact: "" }

        ],
      },
    ],
  },

  // --- DAY 5 ---
  {
    id: "treasure-hunt-final",
    type: "competitive-event",
    image: treasure_hunt,
    maxMembers: 4,
    registrationOpen: false,
    eventInfo: {
      title: "Treasure Hunt",
      description: "Final day of treasure hunt",
      category: "Day 5",
      venue: "Campus",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "Atri Sukul", contact: "8900519836" },
          // { name: "Spandan Bhattacharya", contact: "9330184706" },
          // { name: "Om Kumar Sha", contact: "6290889507" },
        ],
      },
    ],
  },
  {
    id: "roadies-final",
    type: "competitive-event",
    image: roadies,
    maxMembers: 0,
    registrationOpen: false,
    eventInfo: {
      title: "Roadies Final Event",
      description: "Final round of Roadies competition",
      category: "Day 5",
      venue: "Old Auditorium",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "Anup Sharma", contact: "9475740532" },
          // { name: "Mahek Parvez", contact: "8597530118" },
        ],
      },
    ],
  },
  {
    id: "drama",
    type: "competitive-event",
    image: depicta,
    maxMembers: 0,
    registrationOpen: false,
    eventInfo: {
      title: "Drama",
      description: "Theatrical performance competition",
      category: "Day 5",
      venue: "Old Auditorium",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          // { name: "Sumit Majumder", contact: "7739164949" },
          // { name: "Mahek Parvez", contact: "8597530118" },
        ],
      },
    ],
  },
  {
    id: "wavezz-night",
    type: "non-competitive-event",
    image: wavez_night,
    maxMembers: 0,
    registrationOpen: false,
    eventInfo: {
      title: "Wavezz Night",
      description: "The grand dance night featuring electrifying performances.",
      category: "Day 5",
      venue: "Old Auditorium",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [{ name: "CORE COMMITTEE", contact: "" }],
      },
    ],
  },

  // --- DAY 6 ---
  {
    id: "reunion",
    type: "non-competitive-event",
    image: reunion,
    maxMembers: 0,
    registrationOpen: false,
    eventInfo: {
      title: "Reunion",
      description: "Alumni reunion event",
      category: "Day 6",
      venue: "Kanchenjunga Building",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [{ name: "CORE COMMITTEE", contact: "" }],
      },
    ],
  },
  {
    id: "calliphony-night",
    type: "non-competitive-event",
    image: calliphony_night,
    maxMembers: 0,
    registrationOpen: false,
    eventInfo: {
      title: "Calliphony Night",
      description: "Musical performance night",
      category: "Day 6",
      venue: "Oval",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [{ name: "CORE COMMITTEE", contact: "" }],
      },
    ],
  },

  // --- DAY 7 ---
  {
    id: "social-night",
    type: "non-competitive-event",
    image: grand_social_night,
    maxMembers: 0,
    registrationOpen: false,
    eventInfo: {
      title: "Social Night",
      description: "Final night of celebrations",
      category: "Day 7",
      venue: "Oval",
      date: "Not decided"
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [{ name: "CORE COMMITTEE", contact: "" }],
      },
    ],
  },
];