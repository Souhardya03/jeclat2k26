// --- DATA TYPE DEFINITION ---
type Memory = {
  title: string;
  year: string;
  type: "youtube" | "video"; // Changed 'instagram' to generic 'video' for Cloudinary
  url: string;
  thumbnail?: string;
};

// --- UPDATED DATA ---
export const memoriesData: Memory[] = [
  {
    title: "A Glimpse Of Jeclat 2k25",
    year: "2025",
    type: "video", 
    url: "https://res.cloudinary.com/dzq2fx6ej/video/upload/v1770577834/0209_hhgha8.mp4", 
    thumbnail: "/AmitMishra.JPG", // You still need a thumbnail image
  },
  {
    title: "A Glimpse Of Jeclat 2k24",
    year: "2024",
    type: "youtube",
    url: "https://www.youtube.com/embed/e-LnWZhW3Ck?rel=0",
  },
  {
    title: "A Glimpse Of Jeclat 2k23",
    year: "2023",
    type: "youtube",
    url: "https://www.youtube-nocookie.com/embed/LIVV85YfwTQ?si=AewcEauEJ4FtwQ9Q",
  },
  {
    title: "A Glimpse Of Jeclat 2k22",
    year: "2022",
    type: "youtube",
    url: "https://www.youtube.com/embed/cQc-4M6KWHc?si=FF69DuO1caKWnogm",
  },
  {
    title: "A Glimpse Of Jeclat 2k20",
    year: "2020",
    type: "youtube",
    url: "https://www.youtube.com/embed/4h9POxBsqS4?si=gLRJDJU8aZtzUH5J",
  },
  {
    title: "A Glimpse Of Jeclat 2k18",
    year: "2018",
    type: "youtube",
    url: "https://www.youtube.com/embed/5HtPuIoEsFU?si=jlU_szYjn-WQNF6p",
  },
];