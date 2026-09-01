const watchTemplates = [
  {
    name: "ZVRON Luxury Day & Date Chronograph Leather Watch",
    imgs: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&auto=format&fit=crop&q=80"
    ],
    price: 299,
    mrp: "999",
    discount: "70% OFF",
    rating: "4.3 ★ (2,150)",
    desc: "✓ Heavy Stainless Steel Back\n✓ Working Calendar & Day Display\n✓ Premium Leather Strap\n✓ Scratch Resistant Sapphire Dial\n✓ 6 Months Replacement Warranty",
    colors: ["Brown Leather", "Black Leather", "Blue Strap"]
  },
  {
    name: "Ultra Bluetooth Calling Smart Watch Series 8",
    imgs: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=600&auto=format&fit=crop&q=80"
    ],
    price: 699,
    mrp: "1999",
    discount: "65% OFF",
    rating: "4.6 ★ (4,820)",
    desc: "✓ 2.0 HD Full Touch Display\n✓ Crystal Clear Bluetooth Calling\n✓ 24/7 Heart Rate & Sleep Monitor\n✓ 5 Days Long Battery Life\n✓ IP68 Waterproof Design",
    colors: ["Orange Ocean Strap", "Midnight Black", "Titanium Silver"]
  },
  {
    name: "Naviforce Royal Stainless Steel Chain Quartz Watch",
    imgs: [
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop&q=80"
    ],
    price: 349,
    mrp: "1299",
    discount: "73% OFF",
    rating: "4.4 ★ (1,390)",
    desc: "✓ Premium Metallic Chain Strap\n✓ Glowing Luminous Hands\n✓ High Precision Japanese Quartz\n✓ Shockproof & Water Resistant\n✓ Free Adjustment Tool Included",
    colors: ["Silver Chain", "Black Chain", "Dual Tone Gold"]
  },
  {
    name: "Curren Tactical Matte Black Sports Chronograph",
    imgs: [
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=600&auto=format&fit=crop&q=80"
    ],
    price: 319,
    mrp: "1199",
    discount: "73% OFF",
    rating: "4.2 ★ (980)",
    desc: "✓ Tactical Matte Black Body\n✓ Hardened Mineral Glass Dial\n✓ Heavy Duty Silicone Strap\n✓ 30M Splash Resistant\n✓ Stylish Sports Look",
    colors: ["All Black", "Black & Red", "Army Green"]
  },
  {
    name: "Amoled Round Dial Luxury Calling Smartwatch",
    imgs: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=600&auto=format&fit=crop&q=80"
    ],
    price: 849,
    mrp: "2499",
    discount: "66% OFF",
    rating: "4.7 ★ (3,110)",
    desc: "✓ Crisp Always-On AMOLED Screen\n✓ 100+ Custom Cloud Watch Faces\n✓ Wireless Quick Magnetic Charger\n✓ Voice Assistant & Notifications\n✓ Premium Metal Bezel",
    colors: ["Jet Black", "Steel Grey", "Matte Green"]
  }
];

// Generate 50 items
const productList = [];
for (let i = 1; i <= 50; i++) {
  const tpl = watchTemplates[(i - 1) % watchTemplates.length];
  productList.push({
    id: i,
    name: `${tpl.name} (Model #${i})`,
    mainImage: tpl.imgs[0],
    images: tpl.imgs,
    price: (tpl.price + ((i * 10) % 80)).toString(),
    mrp: tpl.mrp,
    discount: tpl.discount,
    rating: tpl.rating,
    description: tpl.desc,
    colors: tpl.colors
  });
}

const STORE_CONFIG = {
  storeName: "Elite Watch Store",
  currency: "₹",
  deliveryTime: "4-5 Days to Your Doorstep",
  telegramBotToken: "8764155075:AAHRsu43gCDL-_9MlpZ8G6fsZF6LC-hApng",
  telegramChatId: "7521753584",
  products: productList
};
