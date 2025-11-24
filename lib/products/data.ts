import { Color, Logo, Product } from "@/types/product";

export const COLORS: Color[] = [
  { code: "R", name: "Red", hex: "#FF0000" },
  { code: "B", name: "Black", hex: "#000000" },
  { code: "DG", name: "Dark Grey", hex: "#2A2A2A" },
  { code: "LG", name: "Light Grey", hex: "#D3D3D3" },
  { code: "W", name: "White", hex: "#FFFFFF" },
  { code: "P", name: "Purple", hex: "#800080" },
  { code: "NG", name: "Neon Green", hex: "#39FF14" },
  { code: "NB", name: "Neon Blue", hex: "#0FF0FC" },
  { code: "NO", name: "Neon Orange", hex: "#FF6600" },
];

export const LOGOS: Logo[] = [
  { code: "SHL", name: "Sleepy Head Logo", description: "Classic head logo" },
  { code: "STL", name: "Sleepy Text Logo", description: "Text-based logo" },
  { code: "STLW", name: "Sleepy Text Logo with Clouds", description: "Text logo with cloud elements" },
  { code: "SHLW", name: "Sleepy Head Logo with Clouds/Text", description: "Head logo with extras" },
  { code: "FSL", name: "Full Sleepy Logo", description: "Complete SLEEPY branding" },
];

export const PRODUCTS: Product[] = [
  {
    id: "1001",
    type: "hoodie",
    name: "SLEEPY Hoodie",
    basePrice: 65.00,
    sizes: ["S", "M", "L", "XL"],
    description: "Heavyweight hoodie built for late-night wrenching and cold morning drives. 100% cotton with reinforced seams, spacious kangaroo pocket, and lined hood. Fully customizable.",
    availableLogos: ["SHL", "STL", "STLW", "SHLW", "FSL"],
  },
  {
    id: "1002",
    type: "crewneck",
    name: "SLEEPY Crewneck",
    basePrice: 55.00,
    sizes: ["S", "M", "L", "XL"],
    description: "Classic heavyweight crewneck for the understated enthusiast. Fleece-lined comfort with ribbed cuffs and waistband. Ideal for meets where your build does the talking.",
    availableLogos: ["SHL", "STL", "STLW", "SHLW", "FSL"],
  },
  {
    id: "1003",
    type: "tshirt",
    name: "SLEEPY T-Shirt",
    basePrice: 35.00,
    sizes: ["S", "M", "L", "XL"],
    description: "Your new daily driver. Premium cotton tee with relaxed fit and reinforced stitching. Perfect for track days, shop work, or casual cruising.",
    availableLogos: ["SHL", "STL", "STLW", "SHLW", "FSL"],
  },
  {
    id: "1004",
    type: "bandana",
    name: "SLEEPY Bandana",
    basePrice: 15.00,
    description: "22x22 inch premium cotton bandana. Hide your intercooler intake, keep one in your glovebox, or whatever. Durable for shop use, clean for the streets.",
    availableLogos: ["SHL", "STL", "FSL"],
  },
  {
    id: "1005",
    type: "sticker",
    name: "SLEEPY Sticker Pack",
    basePrice: 10.00,
    description: "Weatherproof vinyl sticker pack with 5 die-cut stickers. UV and water-resistant. Perfect for toolboxes, laptops, bumpers, or anywhere you rep. Each sticker 3-6 inches.",
    availableLogos: ["SHL", "STL", "FSL"],
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getColorByCode(code: string): Color | undefined {
  return COLORS.find((c) => c.code === code);
}

export function getLogoByCode(code: string): Logo | undefined {
  return LOGOS.find((l) => l.code === code);
}
