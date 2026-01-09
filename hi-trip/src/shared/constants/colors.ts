export const COLORS = {
  // New Blue Scale based on provided design
  BLUE: {
    900: "#062360",
    800: "#0C46C0",
    700: "#3371F2",
    600: "#547FF3",
    500: "#6B8EF5",
    400: "#7F9DF6",
    300: "#90ACF7",
    200: "#A0BCF8",
    100: "#ECF2FE",
  },
  
  // Semantic Aliases
  MAIN: {
    DEFAULT: "#0C46C0", // Blue 800
    EMPHASIS: "#062360", // Blue 900
    LIGHT: "#A0BCF8",    // Blue 200
    BG_SOFT: "#ECF2FE",  // Blue 100
  },

  GREY: {
    1: "#FFFFFF",
    3: "#E8ECF1",
    5: "#808996",
    8: "#0F0F10",
  },

  SUCCESS: { 1: "#FAFDFB", 2: "#3FB876" },
  ERROR: { 1: "#FFFBFB", 2: "#F04443" },
  BG: {
    WHITE: "#FFFFFF",   // Card, Modal, Input
    SOFT: "#EFF1F9",    // Hover, Selected, Tag background
    CANVAS: "#F6F7F9",  // Page Body Background
  },
} as const;

export const DESIGN_TOKEN = {
  LAYOUT: {
    SIDEBAR: COLORS.BLUE[900],
    HEADER: COLORS.BG.WHITE,
    BODY: COLORS.BG.CANVAS,
  },
  COMPONENT: {
    CARD: COLORS.BG.WHITE,
    ITEM_HOVER: COLORS.BG.SOFT,
    BORDER: "#E8ECF1", // GREY 3
  },
  TEXT: {
    MAIN: "#0F0F10",    // GREY 8
    SUB: "#808996",     // GREY 5
    INVERT: "#FFFFFF",
  }
} as const;

export const METRIC_COLORS = {
  // 신규 블루 스케일을 활용한 그라데이션
  PRIMARY: "from-[#0C46C0] to-[#3371F2]", // Blue 800 -> 700
  SUCCESS: "from-[#3FB876] to-[#FAFDFB]",
  INFO: "from-[#3371F2] to-[#A0BCF8]",    // Blue 700 -> 200
  NEUTRAL: "from-[#808996] to-[#E8ECF1]",
} as const;

export const RANKING_COLORS = {
  1: "from-[#062360] to-[#0C46C0]", // 가장 짙은 블루
  2: "from-[#0C46C0] to-[#3371F2]", 
  3: "from-[#3371F2] to-[#6B8EF5]",
  4: "from-[#6B8EF5] to-[#A0BCF8]",
  5: "from-[#A0BCF8] to-[#ECF2FE]", // 가장 연한 블루
} as const;