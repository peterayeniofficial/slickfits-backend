import { list } from "@keystone-next/keystone/schema";
import { text, relationship } from "@keystone-next/fields";
import { cloudinaryImage } from "@keystone-next/cloudinary";
import "dotenv/config";

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: "slickfits",
};
export const ProductImage = list({
  // access
  // ui
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: "source",
    }),
    altText: text(),
    product: relationship({ ref: "Product.photo" }),
    // add roles and orders
  },
});
