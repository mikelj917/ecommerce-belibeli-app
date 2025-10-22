import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const categories = ["men's clothing", "jewelery", "electronics", "women's clothing"];

const products: Prisma.ProductCreateInput[] = [
  {
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    promotionPrice: 89.95,
    promotionEnd: new Date("2030-10-25"),
    description: "Your perfect pack for everyday use and walks in the forest...",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    ratingRate: 3.9,
    ratingCount: 120,
    stock: 45,
    totalSold: 320,
    category: { connect: { name: "men's clothing" } },
  },
  {
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve...",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    ratingRate: 4.1,
    ratingCount: 259,
    stock: 120,
    totalSold: 800,
    category: { connect: { name: "men's clothing" } },
  },
  {
    title: "Mens Cotton Jacket",
    price: 55.99,
    promotionPrice: 45.99,
    promotionEnd: new Date("2030-10-24"),
    description: "Great outerwear jackets for Spring/Autumn/Winter...",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    ratingRate: 4.7,
    ratingCount: 500,
    stock: 30,
    totalSold: 950,
    category: { connect: { name: "men's clothing" } },
  },
  {
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description: "The color could be slightly different between on the screen and in practice...",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    ratingRate: 2.1,
    ratingCount: 430,
    stock: 200,
    totalSold: 150,
    category: { connect: { name: "men's clothing" } },
  },
  {
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    promotionPrice: 549,
    promotionEnd: new Date("2030-10-30"),
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon...",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    ratingRate: 4.6,
    ratingCount: 400,
    stock: 10,
    totalSold: 240,
    category: { connect: { name: "jewelery" } },
  },
  {
    title: "Solid Gold Petite Micropave",
    price: 168,
    description: "Satisfaction Guaranteed. Return or exchange any order within 30 days...",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    ratingRate: 3.9,
    ratingCount: 70,
    stock: 25,
    totalSold: 120,
    category: { connect: { name: "jewelery" } },
  },
  {
    title: "White Gold Plated Princess",
    price: 9.99,
    promotionPrice: 7.99,
    promotionEnd: new Date("2030-10-23"),
    description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her...",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
    ratingRate: 3.0,
    ratingCount: 400,
    stock: 150,
    totalSold: 500,
    category: { connect: { name: "jewelery" } },
  },
  {
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings...",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    ratingRate: 1.9,
    ratingCount: 100,
    stock: 300,
    totalSold: 60,
    category: { connect: { name: "jewelery" } },
  },
  {
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    price: 64,
    promotionPrice: 54.9,
    promotionEnd: new Date("2030-11-10"),
    description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers...",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    ratingRate: 3.3,
    ratingCount: 203,
    stock: 80,
    totalSold: 430,
    category: { connect: { name: "electronics" } },
  },
  {
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description: "Easy upgrade for faster boot up, shutdown, application load and response...",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
    ratingRate: 2.9,
    ratingCount: 470,
    stock: 50,
    totalSold: 270,
    category: { connect: { name: "electronics" } },
  },
  {
    title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    promotionPrice: 89,
    promotionEnd: new Date("2030-10-22"),
    description: "3D NAND flash are applied to deliver high transfer speeds...",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
    ratingRate: 4.8,
    ratingCount: 319,
    stock: 60,
    totalSold: 980,
    category: { connect: { name: "electronics" } },
  },
  {
    title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description: "Expand your PS4 gaming experience, Play anywhere Fast and easy...",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
    ratingRate: 4.8,
    ratingCount: 400,
    stock: 40,
    totalSold: 850,
    category: { connect: { name: "electronics" } },
  },
  {
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    promotionPrice: 499,
    promotionEnd: new Date("2030-11-01"),
    description: "21.5 inches Full HD widescreen IPS display...",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
    ratingRate: 2.9,
    ratingCount: 250,
    stock: 15,
    totalSold: 210,
    category: { connect: { name: "electronics" } },
  },
  {
    title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor – Super Ultrawide Screen QLED",
    price: 999.99,
    description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR...",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
    ratingRate: 2.2,
    ratingCount: 140,
    stock: 10,
    totalSold: 90,
    category: { connect: { name: "electronics" } },
  },
  {
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description: "Note:The Jackets is US standard size...",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
    ratingRate: 2.6,
    ratingCount: 235,
    stock: 60,
    totalSold: 140,
    category: { connect: { name: "women's clothing" } },
  },
  {
    title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    promotionPrice: 24.95,
    promotionEnd: new Date("2030-10-26"),
    description: "100% POLYURETHANE(shell) 100% POLYESTER(lining)...",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
    ratingRate: 2.9,
    ratingCount: 340,
    stock: 80,
    totalSold: 250,
    category: { connect: { name: "women's clothing" } },
  },
  {
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description: "Lightweight perfect for trip or casual wear...",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
    ratingRate: 3.8,
    ratingCount: 679,
    stock: 40,
    totalSold: 900,
    category: { connect: { name: "women's clothing" } },
  },
  {
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    promotionPrice: 8.5,
    promotionEnd: new Date("2030-10-22"),
    description: "95% RAYON 5% SPANDEX, Made in USA or Imported...",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
    ratingRate: 4.7,
    ratingCount: 130,
    stock: 25,
    totalSold: 620,
    category: { connect: { name: "women's clothing" } },
  },
  {
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description: "100% Polyester, Machine wash...",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
    ratingRate: 4.5,
    ratingCount: 146,
    stock: 70,
    totalSold: 380,
    category: { connect: { name: "women's clothing" } },
  },
  {
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    promotionPrice: 9.99,
    promotionEnd: new Date("2030-10-27"),
    description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve...",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
    ratingRate: 3.6,
    ratingCount: 145,
    stock: 90,
    totalSold: 310,
    category: { connect: { name: "women's clothing" } },
  },
];


async function main() {
  console.log("🚀 Iniciando o processo de seed...");

  console.log("🧹 Limpando tabelas...");
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  console.log("🌱 Inserindo categorias...");
  await prisma.category.createMany({
    data: categories.map((name) => ({ name })),
  });
  console.log("✨ Categorias inseridas com sucesso!");

  console.log("🌱 Inserindo produtos...");
  for (const productData of products) {
    await prisma.product.create({
      data: productData,
    });
  }
  console.log("🛍️ Produtos inseridos com sucesso!");

  console.log("✅ Seed concluído!");
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
