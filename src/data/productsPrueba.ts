import { IProduct } from "../interfaces/product";

 export const arregloProducto:IProduct[]=[
    {
      id:1,
        name: "iPhone 11",
        price: 699,
        description:
          "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
        image:
          "https://dcdn.mitiendanube.com/stores/001/806/456/products/iphone_11_verde-92c4a4be9576480dda16284497336315-1024-1024.jpg",
        categoryId: 1,
        stock: 10,
      },
      {
        id:2,
        name: "MacBook Air",
        price: 999,
        description:
          "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
        image:
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbookair-og-202402?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1707414684423",
        categoryId: 2,
        stock: 10,
      },
      {
        id:3,
        name: "iPad Pro",
        price: 799,
        description:
          "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
        image:
          "https://upgreat.ee/ugvam/resource/images/IPAD_PRO_12_6--WiFi--Space_Gray--1.jpg",
        categoryId: 3,
        stock: 10,
      }
]
