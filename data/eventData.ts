// @/data/eventData.ts

// Keep your image imports exactly as they are in your project
import flash_mob from "@/public/images/eventImages/flash-mob1.jpg";
import elementary from "@/public/images/eventImages/elementary1.jpg";
import short_film from "@/public/images/eventImages/short-film.jpeg";
import memesis from "@/public/images/eventImages/memesis1.jpg";
import selfie_contest from "@/public/images/eventImages/selfie-contest1.jpeg";
import photography_contest from "@/public/images/eventImages/photography-contest.png";
import wall_painting from "@/public/images/eventImages/wall-painting1.jpg";
import roadies from "@/public/images/eventImages/roadies1.jpeg";
import tshirt_painting from "@/public/images/eventImages/tshirt-painting2.jpg";
import antakshari from "@/public/images/eventImages/antakshari.jpg";
import open_mic from "@/public/images/eventImages/open-mic1.jpg";
import j_factor from "@/public/images/eventImages/j-factor1.jpeg";
import prom_night from "@/public/images/eventImages/prom.jpg";
import debate_competition from "@/public/images/eventImages/debate1.jpg";
import fashion_show from "@/public/images/eventImages/fashion-show2.jpg";
import malle from "@/public/images/eventImages/male2.jpg";
import quiz from "@/public/images/eventImages/quiz.jpg";
import pen_your_love from "@/public/images/eventImages/pen-your-love1.jpeg";
import treasure_hunt from "@/public/images/eventImages/treasure-hunt1.jpeg";
import mock_auction from "@/public/images/eventImages/mock-auction.jpg";
import band_blast from "@/public/images/eventImages/band-blast2.jpg";
import depicta from "@/public/images/eventImages/depicta.jpg";
import wavez_night from "@/public/images/eventImages/wavezz1.jpg";
import reunion from "@/public/images/eventImages/reunion.jpg";
import calliphony_night from "@/public/images/eventImages/calliphony1.jpg";
import grand_social_night from "@/public/images/eventImages/grand-social-night1.jpg";
import made_for_each_other from "@/public/images/eventImages/made-for1.jpg";

export const eventData = [
  {
    id: "flash-mob",
    type: "pre-event",
    image: flash_mob,
    maxMembers: 15,
    eventInfo: {
      title: "Flash Mob",
      description: "Flashmob, the thrilling pre-event spectacle, surprises and delights audiences with spontaneous bursts of choreographed dance and music...",
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          { name: "Hia Biswas", contact: "+91 7980016505", gender: "female" },
          { name: "Nisha Yadav", contact: "+91 9800165284", gender: "female" },
          { name: "Aniket Sen", contact: "+91 7365026622", gender: "male" },
          { name: "Akash Roy", contact: "+91 6290108885", gender: "male" },
        ],
      },
    ],
  },
  {
    id: "elementary",
    type: "pre-event",
    image: elementary,
    maxMembers: 2,
    eventInfo: {
      title: "Elementary",
      description: "Put on your thinking caps and grab your notebooks...",
    },
    coordinators: [
      {
        type: "Heads & Coordinators",
        members: [
          { name: "Bhaskar Acharjee", contact: "+91 6290594650", gender: "male" },
          { name: "Samrat Sadhu", contact: "+91 7074158262", gender: "male" },
        ],
      },
    ],
  },
  {
    id: "memesis",
    type: "pre-event",
    image: memesis,
    maxMembers: 1,
    eventInfo: {
      title: "Memesis",
      description: "Memesis is an event where participants are invited to create and submit original memes...",
    },
    coordinators: [],
  },
  {
    id: "selfie-contest",
    type: "pre-event",
    image: selfie_contest,
    maxMembers: 1,
    eventInfo: {
      title: "Selfie Contest",
      description: "A selfie contest competition is an event where participants are invited to take and submit their best selfies...",
    },
    coordinators: [],
  },
  {
    id: "chal-chitra",
    type: "pre-event",
    image: short_film,
    maxMembers: 10,
    eventInfo: {
      title: "Chal Chitra",
      description: "Chal-Chitra, the Short Film Making competition at JECLAT...",
    },
    coordinators: [
      {
        type: "Heads & Coordinators",
        members: [
          { name: "Rudra Karmakar", contact: "+91 8343878056", gender: "male" },
          { name: "Anupam Singha", contact: "+91 9064647336", gender: "male" },
        ],
      },
    ],
  },
  {
    id: "photography-contest",
    type: "pre-event",
    image: photography_contest,
    maxMembers: 1,
    eventInfo: {
      title: "Photography Contest",
      description: "The Photography Contest at JECLAT invites shutterbugs to showcase their creativity...",
    },
    coordinators: [],
  },
  {
    id: "wall-painting",
    type: "competitive-event",
    image: wall_painting,
    maxMembers: 3,
    eventInfo: {
      title: "Wall Painting",
      description: "Wall painting involves creating art directly on a wall surface...",
    },
    coordinators: [
      {
        type: "Heads & Coordinators",
        members: [
          { name: "Priyaangshu Dey", contact: "+91 9594194508", gender: "male" },
          { name: "Supriyo Kundu", contact: "+91 8420568871", gender: "male" },
          { name: "Kartik Mahato", contact: "+91 9832942689", gender: "male" },
        ],
      },
    ],
  },
  {
    id: "tshirt-painting",
    type: "competitive-event",
    image: tshirt_painting,
    maxMembers: 2,
    eventInfo: {
      title: "T Shirt Painting",
      description: "T-shirt painting is the art of designing and painting directly onto a T-shirt...",
    },
    coordinators: [
      {
        type: "Heads & Coordinators",
        members: [
          { name: "Rima Ghosh", contact: "+91 9901044381", gender: "female" },
          { name: "Debasmita Nandi", contact: "+91 9641539722", gender: "female" },
        ],
      },
    ],
  },
  {
    id: "roadies",
    type: "competitive-event",
    image: roadies,
    maxMembers: 1,
    eventInfo: {
      title: "Roadies",
      description: "Roadies at JECLAT is an exhilarating journey where participants undergo a rigorous selection process...",
    },
    coordinators: [
      {
        type: "Heads & Coordinators",
        members: [
          { name: "Rajdip Mondal", contact: "+91 6294179752", gender: "male" },
          { name: "Hia Biswas", contact: "+91 7980016505", gender: "female" },
        ],
      },
    ],
  },
  {
    id: "antakshari",
    type: "competitive-event",
    image: antakshari,
    maxMembers: 3,
    eventInfo: {
      title: "Antakshari",
      description: "Antakshari is a traditional Indian musical game...",
    },
    coordinators: [
      {
        type: "Heads & Coordinators",
        members: [
          { name: "Aniket Agarwal", contact: "+91 7362912109", gender: "male" },
          { name: "Suvam Biswas", contact: "+91 9382237284", gender: "male" },
        ],
      },
    ],
  },
  {
    id: "open-mic",
    type: "non-competitive-event",
    image: open_mic,
    maxMembers: 1,
    eventInfo: {
      title: "Open Mic",
      description: "Open Mic at JECLAT is a platform for individuals to showcase their talent...",
    },
    coordinators: [
      {
        type: "Heads & Coordinators",
        members: [
          { name: "Uttaran Nath Sarkar", contact: "+91 9382652358", gender: "male" },
          { name: "V Nikhita", contact: "+91 7680012804", gender: "female" },
        ],
      },
    ],
  },
  {
    id: "j-factor",
    type: "non-competitive-event",
    image: j_factor,
    maxMembers: 6,
    eventInfo: {
      title: "J Factor",
      description: "J Factor at JECLAT is the ultimate showcase of talent...",
    },
    coordinators: [
      {
        type: "Heads & Coordinators",
        members: [
          { name: "Indira Goswami", contact: "+91 9832964192", gender: "female" },
          { name: "Arka Biswas", contact: "+91 8910138703", gender: "male" },
        ],
      },
    ],
  },
  {
    id: "made-for-each-other",
    type: "non-competitive-event",
    image: made_for_each_other,
    maxMembers: 2,
    eventInfo: {
      title: "Made For Each Other",
      description: "Made for each other competition is an event that celebrates the unique bond...",
    },
    coordinators: [
      {
        type: "Coordinators",
        members: [
          { name: "Priyanka Mandi", contact: "+91 8016336018", gender: "female" },
          { name: "Shourjendra Banerjee", contact: "+91 7318915917", gender: "male" },
        ],
      },
    ],
  },
  {
    id: "debate",
    type: "competitive-event",
    image: debate_competition,
    maxMembers: 2,
    eventInfo: {
      title: "Debate Competition",
      description: "The Debate Competition at JECLAT pits participants against each other in a battle of words...",
    },
    coordinators: [
      {
        type: "Heads & Coordinators",
        members: [
          { name: "Tunnisha Dasgupta", contact: "+91 9828916270", gender: "female" },
          { name: "Aeswarya Agarwal", contact: "+91 98511 98023", gender: "female" },
        ],
      },
    ],
  },
  {
    id: "fashion-show",
    type: "competitive-event",
    image: fashion_show,
    maxMembers: 12,
    eventInfo: {
      title: "Fashion Show",
      description: "The fashion show at JECLAT is a dazzling display of style...",
    },
    coordinators: [
      {
        type: "Heads & Coordinators",
        members: [
          { name: "Hia Biswas", contact: "+91 7980016505", gender: "female" },
          { name: "Anupam Singha", contact: "+91 9064647336", gender: "male" },
          { name: "Agnivo Dey", contact: "+91 7074110196", gender: "male" },
        ],
      },
    ],
  },
  {
    id: "malle",
    type: "competitive-event",
    image: malle,
    maxMembers: 3,
    eventInfo: {
      title: "Malle",
      description: "Malle is a popular party game (Charades)...",
    },
    coordinators: [
      {
        type: "Heads & Coordinators",
        members: [
          { name: "Sananda Dey", contact: "+91 7407388246", gender: "female" },
          { name: "Priyanka Mandi", contact: "+91 8016336018", gender: "female" },
        ],
      },
    ],
  },
  {
    id: "quiz",
    type: "competitive-event",
    image: quiz,
    maxMembers: 3,
    eventInfo: {
      title: "Quiz",
      description: "A quiz competition is an event in which teams compete against each other...",
    },
    coordinators: [
      {
        type: "Heads & Coordinators",
        members: [
          { name: "Soham Chowdhury", contact: "+91 6294750719", gender: "male" },
          { name: "Swarnarka Das", contact: "+91 8101158630", gender: "male" },
          { name: "Debjit Nandan", contact: "+91 6289966003", gender: "male" },
          { name: "Sayan Jasu", contact: "+91 6290693659", gender: "male" },
        ],
      },
    ],
  },
  {
    id: "pen-your-love",
    type: "competitive-event",
    image: pen_your_love,
    maxMembers: 1,
    eventInfo: {
      title: "Pen Your Love",
      description: "Pen Your Love competition is an event that encourages people to express their love...",
    },
    coordinators: [
      {
        type: "Heads & Coordinators",
        members: [
          { name: "Bisal Kumar", contact: "+91 7797318409", gender: "male" },
          { name: "Sastipada Dan", contact: "+91 8768862676", gender: "male" },
        ],
      },
    ],
  },
  {
    id: "treasure-hunt",
    type: "competitive-event",
    image: treasure_hunt,
    maxMembers: 4,
    eventInfo: {
      title: "Treasure Hunt",
      description: "A treasure hunt competition is an event that involves participants working in teams...",
    },
    coordinators: [
      {
        type: "Heads & Coordinators",
        members: [
          { name: "Sanket Ghosh", contact: "+91 82506 04409", gender: "male" },
          { name: "V Nikhita", contact: "+91 7680012804", gender: "female" },
          { name: "Ayan Paul", contact: "+91 8617014227", gender: "male" },
          { name: "Achisman Banerjee", contact: "+91 9064882497", gender: "male" },
          { name: "Rakesh Kumar Baskey", contact: "+91 9749541216", gender: "male" },
        ],
      },
    ],
  },
  {
    id: "mock-auction",
    type: "competitive-event",
    image: mock_auction,
    maxMembers: 4,
    eventInfo: {
      title: "Mock Auction",
      description: "Mock Auction is an event where participants take part in a mock auction...",
    },
    coordinators: [
      {
        type: "Heads & Coordinators",
        members: [
          { name: "Snehasish Dhali", contact: "+91 9007842340", gender: "male" },
          { name: "Mritunjoy Ghosh", contact: "+91 8972157373", gender: "male" },
          { name: "Sk Tanvir Ikbal", contact: "+91 6290341350", gender: "male" },
        ],
      },
    ],
  },
  {
    id: "prom-night",
    type: "non-competitive-event",
    image: prom_night,
    maxMembers: 2,
    eventInfo: {
      title: "Prom Night",
      description: "Prom night is a special event where students dress up in formal attire...",
    },
    coordinators: [],
  },
  {
    id: "wavezz-night",
    type: "non-competitive-event",
    image: wavez_night,
    maxMembers: 10,
    eventInfo: {
      title: "Wavezz Night",
      description: "Wavezz Night is an electrifying dance performance event...",
    },
    coordinators: [
      {
        type: "Heads & Coordinators",
        members: [
          { name: "Hia Biswas", contact: "+91 7980016505", gender: "female" },
          { name: "Aniket Sen", contact: "+91 7365026622", gender: "male" },
        ],
      },
    ],
  },
  {
    id: "depicta",
    type: "non-competitive-event",
    image: depicta,
    maxMembers: 10,
    eventInfo: {
      title: "Depicta",
      description: "The drama club performance in a college festival...",
    },
    coordinators: [
      {
        type: "Heads & Coordinators",
        members: [
          { name: "Mritunjoy Ghosh", contact: "+91 8972157373", gender: "male" },
          { name: "Achhia Khatun", contact: "+91 9735873558", gender: "female" },
        ],
      },
    ],
  },
  {
    id: "reunion",
    type: "non-competitive-event",
    image: reunion,
    maxMembers: 1,
    eventInfo: {
      title: "Reunion",
      description: "The Alumnus of our college, right from the 1960s reunite...",
    },
    coordinators: [
      {
        type: "Organizing Team",
        members: [{ name: "All Core Team Members", gender: "male" }],
      },
    ],
  },
  {
    id: "band-blast",
    type: "non-competitive-event",
    image: band_blast,
    maxMembers: 8,
    eventInfo: {
      title: "Band Blast",
      description: "Band Blast is an electrifying event where numerous bands ignite the stage...",
    },
    coordinators: [],
  },
  {
    id: "calliphony-night",
    type: "non-competitive-event",
    image: calliphony_night,
    maxMembers: 8,
    eventInfo: {
      title: "Calliphony Night",
      description: "Calliphony Night performance is a showcase event...",
    },
    coordinators: [
      {
        type: "Heads & Coordinators",
        members: [
          { name: "Shibam Naskar", contact: "+91 9064176535", gender: "male" },
          { name: "Arogya Subba", contact: "+91 8918845628", gender: "male" },
        ],
      },
    ],
  },
  {
    id: "grand-social-night",
    type: "non-competitive-event",
    image: grand_social_night,
    maxMembers: 1,
    eventInfo: {
      title: "Grand Social Night",
      description: "The fest will end with the social night exhibiting the live performance...",
    },
    coordinators: [
      {
        type: "Organizing Team",
        members: [{ name: "All Core Team Members", gender: "male" }],
      },
    ],
  },
];