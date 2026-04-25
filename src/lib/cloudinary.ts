import { v2 as cloudinary } from 'cloudinary';

if (!process.env.CLOUDINARY_URL) {
  throw new Error('CLOUDINARY_URL is not defined in environment variables');
}

// Split the URL into parts to configure properly
const url = new URL(process.env.CLOUDINARY_URL);

cloudinary.config({
  secure: true,
});
// Cloudinary SDK automatically picks up CLOUDINARY_URL from process.env

export default cloudinary;