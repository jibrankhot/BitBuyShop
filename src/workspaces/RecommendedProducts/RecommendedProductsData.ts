import { IProduct } from "../../app/shared/types/product-type";

const recommendedProducts: IProduct[] = [
  {
    id: "1",
    sku: "BEIGE-STRIPE-LINEN-SHIRT",
    img: "assets/image/recommended/Beige Stripe Linen Shirt1.webp",
    title: "Beige Stripe Linen Shirt",
    slug: "beige-stripe-linen-shirt",
    unit: "10pcs",
    imageURLs: [
      {
        color: { name: "Front View", clrCode: "#D8CAB8" },
        img: "assets/image/recommended/Beige Stripe Linen Shirt1.webp"
      },
      {
        color: { name: "Back View", clrCode: "#D8CAB8" },
        img: "assets/image/recommended/Beige Stripe Linen Shirt2.webp"
      }
    ],
    parent: "Clothing",
    children: "Women's",
    price: 80,
    discount: 5,
    quantity: 10,
    brand: { name: "Legendary Whitetails" },
    category: { name: "Clothing" },
    status: "in-stock",
    reviews: [],
    productType: "recommendedProducts",
    description:
      "Stay cool and stylish with our Beige Stripe Linen Shirt – crafted from breathable, lightweight linen, perfect for warm days or layering year-round. Designed for everyday elegance with a relaxed fit, button-down front, and subtle beige stripes for a timeless look. Whether tucked in or worn loose, this shirt pairs effortlessly with jeans, trousers, or skirts.",
    additionalInformation: [
      { key: "Material", value: "100% Linen" },
      { key: "Fit", value: "Relaxed fit for comfort and breathability" },
      { key: "Colors", value: "Beige with subtle white stripes" },
      { key: "Care Instructions", value: "Machine wash cold, hang to dry" },
      { key: "Design Features", value: "Classic collar, button-front, cuffed sleeves" }
    ],
    featured: false,
    sellCount: 1,
    tags: ["linen", "shirt", "women's clothing", "lightweight"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "2",
    sku: "MINT-MIST-LINEN-SHIRT",
    img: "assets/image/recommended/Mint Mist Linen Shirt1.webp",
    title: "Mint Mist Linen Shirt",
    slug: "mint-mist-linen-shirt",
    unit: "10pcs",
    imageURLs: [
      {
        color: { name: "Front View", clrCode: "#D4E8D3" },
        img: "assets/image/recommended/Mint Mist Linen Shirt1.webp"
      },
      {
        color: { name: "Back View", clrCode: "#D4E8D3" },
        img: "assets/image/recommended/Mint Mist Linen Shirt2.webp"
      }
    ],
    parent: "Clothing",
    children: "Women's",
    price: 80,
    discount: 5,
    quantity: 10,
    brand: { name: "Legendary Whitetails" },
    category: { name: "Clothing" },
    status: "in-stock",
    reviews: [],
    productType: "recommendedProducts",
    description:
      "Experience airy comfort with the Mint Mist Linen Shirt – crafted from soft, breathable linen and dyed in a refreshing mint hue. Ideal for spring and summer days, it features a relaxed fit, classic collar, and natural drape for effortless elegance.",
    additionalInformation: [
      { key: "Material", value: "100% Linen" },
      { key: "Fit", value: "Relaxed fit for breathable wear" },
      { key: "Colors", value: "Mint Mist Green" },
      { key: "Care Instructions", value: "Machine wash cold, line dry" },
      { key: "Design Features", value: "Button-down front, cuffed long sleeves" }
    ],
    featured: false,
    sellCount: 0,
    tags: ["linen", "shirt", "women's clothing", "mint", "green"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "3",
    sku: "MANTIS-GREEN-LINEN-SHIRT",
    img: "assets/image/recommended/Mantis Green Linen Shirt1.webp",
    title: "Mantis Green Linen Shirt",
    slug: "mantis-green-linen-shirt",
    unit: "10pcs",
    imageURLs: [
      {
        color: { name: "Front View", clrCode: "#7DA87B" },
        img: "assets/image/recommended/Mantis Green Linen Shirt1.webp"
      },
      {
        color: { name: "Back View", clrCode: "#7DA87B" },
        img: "assets/image/recommended/Mantis Green Linen Shirt2.webp"
      }
    ],
    parent: "Clothing",
    children: "Women's",
    price: 80,
    discount: 5,
    quantity: 10,
    brand: { name: "Legendary Whitetails" },
    category: { name: "Clothing" },
    status: "in-stock",
    reviews: [],
    productType: "recommendedProducts",
    description:
      "The Mantis Green Linen Shirt brings a subtle earthy tone to your wardrobe, blending natural style with breathable fabric. Whether you’re dressing up or down, this shirt provides a timeless, sustainable fashion statement with all-day comfort.",
    additionalInformation: [
      { key: "Material", value: "100% Linen" },
      { key: "Fit", value: "Easy relaxed fit" },
      { key: "Colors", value: "Mantis Green" },
      { key: "Care Instructions", value: "Cold wash, do not tumble dry" },
      { key: "Design Features", value: "Pointed collar, natural shell buttons" }
    ],
    featured: false,
    sellCount: 0,
    tags: ["linen", "shirt", "women's fashion", "green", "mantis"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "4",
    sku: "CHINOISE-STRIPE-LINEN-SHIRT",
    img: "assets/image/recommended/Chinoise Stripe Linen Shirt1.webp",
    title: "Chinoise Stripe Linen Shirt",
    slug: "chinoise-stripe-linen-shirt",
    unit: "10pcs",
    imageURLs: [
      {
        color: { name: "Front View", clrCode: "#EBDAD1" },
        img: "assets/image/recommended/Chinoise Stripe Linen Shirt1.webp"
      },
      {
        color: { name: "Back View", clrCode: "#EBDAD1" },
        img: "assets/image/recommended/Chinoise Stripe Linen Shirt2.webp"
      }
    ],
    parent: "Clothing",
    children: "Women's",
    price: 80,
    discount: 5,
    quantity: 10,
    brand: { name: "Legendary Whitetails" },
    category: { name: "Clothing" },
    status: "in-stock",
    reviews: [],
    productType: "recommendedProducts",
    description:
      "Effortlessly elegant, the Chinoise Stripe Linen Shirt features a soft neutral palette with delicate vertical stripes. Crafted in 100% linen, it's breathable, refined, and ready for both office days and weekend getaways.",
    additionalInformation: [
      { key: "Material", value: "100% Linen" },
      { key: "Fit", value: "Straight cut, relaxed fit" },
      { key: "Colors", value: "Cream with light chinoise stripes" },
      { key: "Care Instructions", value: "Hand wash recommended" },
      { key: "Design Features", value: "Vertical pinstripe design, button cuffs" }
    ],
    featured: false,
    sellCount: 0,
    tags: ["linen", "striped", "shirt", "neutral", "women"],
    sizes: ["XS", "S", "M", "L", "XL"]
  }, {
    id: "5",
    sku: "CELADON-GREEN-LINEN-SHIRT",
    img: "assets/image/recommended/Celadon Green Linen Shirt1.webp",
    title: "Celadon Green Linen Shirt",
    slug: "celadon-green-linen-shirt",
    unit: "10pcs",
    imageURLs: [
      {
        color: { name: "Front View", clrCode: "#B8D9C5" },
        img: "assets/image/recommended/Celadon Green Linen Shirt1.webp"
      },
      {
        color: { name: "Back View", clrCode: "#B8D9C5" },
        img: "assets/image/recommended/Celadon Green Linen Shirt2.webp"
      }
    ],
    parent: "Clothing",
    children: "Women's",
    price: 80,
    discount: 5,
    quantity: 10,
    brand: { name: "Legendary Whitetails" },
    category: { name: "Clothing" },
    status: "in-stock",
    reviews: [],
    productType: "recommendedProducts",
    description:
      "The Celadon Green Linen Shirt delivers a serene vibe with its cool, pastel tone. Ideal for warmer weather, it’s made from high-quality linen and tailored for relaxed elegance, making it a go-to for casual and semi-formal occasions alike.",
    additionalInformation: [
      { key: "Material", value: "100% Linen" },
      { key: "Fit", value: "Loose fit with drop shoulder" },
      { key: "Colors", value: "Celadon Green" },
      { key: "Care Instructions", value: "Gentle cycle, hang dry" },
      { key: "Design Features", value: "Minimalist design, breathable weave" }
    ],
    featured: false,
    sellCount: 0,
    tags: ["linen", "green", "celadon", "women's fashion", "summer"],
    sizes: ["XS", "S", "M", "L", "XL"]
  }




];

export default recommendedProducts;
