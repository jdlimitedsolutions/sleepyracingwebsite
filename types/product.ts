export type ProductSize = "S" | "M" | "L" | "XL";

export type ColorCode = "R" | "B" | "DG" | "LG" | "W" | "P" | "NG" | "NB" | "NO";

export interface Color {
  code: ColorCode;
  name: string;
  hex: string;
}

export type LogoCode = "SHL" | "STL" | "STLW" | "SHLW" | "FSL";

export interface Logo {
  code: LogoCode;
  name: string;
  description: string;
}

export type ProductType = "hoodie" | "crewneck" | "tshirt" | "bandana" | "sticker" | "patch" | "towel" | "freshener" | "plate" | "decal" | "frame" | "keychain" | "hat" | "beanie" | "socks";

export interface Product {
  id: string;
  type: ProductType;
  name: string;
  basePrice: number;
  sizes?: ProductSize[];
  description: string;
  availableLogos: LogoCode[];
}

export interface ProductCustomization {
  productId: string;
  size?: ProductSize;
  primaryColor: ColorCode;
  secondaryColor: ColorCode;
  logo: LogoCode;
}

export interface CartItem extends ProductCustomization {
  product: Product;
  quantity: number;
  price: number;
}
