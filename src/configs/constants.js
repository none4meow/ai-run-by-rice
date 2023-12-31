export const colors = {
  Mint: {
    hexCode: "#ABDDBA",
    name: "2551 - Mint",
  },
  "Light Sage": {
    hexCode: "#D4E5CA",
    name: "B17 - Light Sage",
  },
  "Lemon Green": {
    hexCode: "#DFDF8E",
    name: "B22 - Lemon Green",
  },
  "Olive Green": {
    hexCode: "#959F66",
    name: "B38 - Olive Green",
  },
  White: {
    hexCode: "#FFFFFF",
    name: "Trắng - White",
  },
  "Baby Blue": {
    hexCode: "#A4EAE4",
    name: "B07 - Baby Blue",
  },
  Teal: {
    hexCode: "#2CB1AE",
    name: "B14 - Teal",
  },
  Blue: {
    hexCode: "#126489",
    name: "B66 - Blue",
  },
  "Pastel Pink": {
    hexCode: "#EDD2CE",
    name: "B47 - Pastel Pink",
  },
  "Blush Pink": {
    hexCode: "#F4A5AC",
    name: "B62 - Blush Pink",
  },
  Lilac: {
    hexCode: "#C992D3",
    name: "B86 - Lilac",
  },
  "Retro Purple": {
    hexCode: "#8085AF",
    name: "2552 - Retro Purple",
  },
  Yellow: {
    hexCode: "#FEE36E",
    name: "B03 - Yellow",
  },
  Gold: {
    hexCode: "#EEB453",
    name: "Nhũ vàng - Gold",
  },
  Orange: {
    hexCode: "#FF8A3D",
    name: "B55 - Orange",
  },
  Red: {
    hexCode: "#F2340F",
    name: "Đỏ tươi - Red",
  },
  Silver: {
    hexCode: "#E2DED9",
    name: "Nhũ bạc - Silver",
  },
  Grey: {
    hexCode: "#C6C0BD",
    name: "B11 - Grey",
  },
  Black: {
    hexCode: "#000000",
    name: "Đen - Black",
  },
  Brown: {
    hexCode: "#5A4029",
    name: "10 - Brown",
  },
  "Do man": {
    hexCode: "#A0180A",
    name: "Đỏ mận - B61",
  },
  "Classic Gray": {
    hexCode: "#BDBABC",
    name: "37 - Classic Gray",
  },
  Ebony: {
    hexCode: "#535458",
    name: "Ebony",
  },
  "Early America": {
    hexCode: "#9B6E4F",
    name: "23 - Early America",
  },
  Jacobean: {
    hexCode: "#876E56",
    name: "19 - Jacobean",
  },
  Koson: {
    hexCode: "#E2D6C7",
    name: "Ko sơn",
  },
  Vecny: {
    hexCode: "#EACCA7",
    name: "Vecny - Honey Maple",
  },
  "Golden Oak": {
    hexCode: "#CE925C",
    name: "15 - Golden Oak",
  },
  Candlelite: {
    hexCode: "#B1592C",
    name: "07 - Candlelite",
  },
};

export const fonts = {
  1: { name: "Kiss Me or Not" },
  2: { name: "#9Slide05 Agile Script Calligraphy Regular" },
  3: { name: "#9Slide03 Nanami Rounded Light" },
  4: { name: "#9Slide06 SVNJonitha Script" },
  5: { name: "#9Slide05 Brannboll Ny" },
  6: { name: "#9Slide06 SVNSharpen" },
  7: { name: "Autumn in November" },
  8: { name: "Pacifico Regular" },
  9: { name: "Meila Line Bold" },
  10: { name: "Smoothie Shoppe" },
  11: { name: "SVN-Weekdays Santtuy Regular" },
  12: { name: "SVN-The Wild Things Script" },
  13: { name: "SVN-Beachwood Script" },
  14: { name: "Shark Blindate" },
  15: { name: "Bali SVN-Bali Script" },
  16: { name: "SVN-Bistro Script" },
  17: { name: "Funky Baby" },
  18: { name: "dearheart" },
  19: { name: "Lobster Regular" },
  20: { name: "Amatic SC", fontWeight: "bold" },
  21: { name: "Bangers Regular" },
  22: { name: "Sacramento" },
  23: { name: "Nerko One Regular" },
  24: { name: "Yellowtail Regular" },
  25: { name: "Roller Skates Regular" },
  26: { name: "Mocha Frappuccino", fontWeight: "bold" },
  27: { name: "Andala Script Regular" },
  28: { name: "Autumn Moon" },
  29: { name: "Try Happiness Demo" },
  30: { name: "HelloConnor-Regular" },
  31: { name: "Carat Regular" },
  32: { name: "Lora" },
  33: { name: "Hello Minimalist" },
  34: { name: "" },
  35: { name: "Riverdale Regular" },
  36: { name: "BreakSticker-Regular" },
  37: { name: "#9Slide05 SVNVery Berry Regular" },
  38: { name: "GhostBuster-Regular" },
  39: { name: "HauntedBloodRegular" },
  40: { name: "GhostCastle-Regular" },
  41: { name: "WitchAdventure" },
  42: { name: "Sweet Bones Regular" },
  43: { name: "SpookyVampire" },
  44: { name: "CreepyNight-Regular" },
  45: { name: "Dancing Script" },
  46: { name: "#9Slide03 IcielNovecento sans Med" },
  47: { name: "Canterbury Regular" },
  48: { name: "Wild Sage" },
  49: { name: "BestieForever-Regular" },
  50: { name: "Sweet Kisses" },
};

export const Regex = {
  SpecialChars: /[`~!@#$%^&*()_|+\-=?;:'",.<>{}[]\\\/]/gi,
  Username: /^(?![_.])(?![\d])(?!.*\.\.)(?!.*\.$)(?=.*[a-z])[a-z0-9._]{3,}$/,
  Email: /^[A-Za-z0-9._+-]+@[A-Za-z0-9]+\.[A-Z|a-z]{2,}$/,
  Password:
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z`~!@#$%^&*()-_+={}[\]|\\'";:/?>.<,]{8,}$/,
  hasSpecialChars: /[^a-zA-Z\d\s:,.-]/g,
};

export const isSpecialChars = (str) => {
  const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~ •]/;
  return specialChars.test(str);
};
