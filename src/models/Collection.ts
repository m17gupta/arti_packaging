import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IImage {
  url: string;
  alt?: string;
  id?: string;
}

export interface ICollectionDocument extends Document {
  name: string;
  description?: string;
  icon?: string;
  primaryImage?: IImage;
  secondaryImage?: IImage[];
  itemCount?: number;
  slug?: string;
  isActive?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ImageSchema = new Schema<IImage>({
  url: { type: String, required: true },
  alt: { type: String },
  id: { type: String },
}, { _id: false });

const CollectionSchema = new Schema<ICollectionDocument>({
  name: { type: String, required: true },
  description: { type: String },
  icon: { type: String },
  primaryImage: ImageSchema,
  secondaryImage: [ImageSchema],
  itemCount: { type: Number, default: 0 },
  slug: { type: String, unique: true },
  isActive: { type: Boolean, default: true },
}, {
  timestamps: true,
  collection: 'collection' // Specifically naming the collection "collection" as requested
});

// Avoid re-compiling the model in development
const Collection: Model<ICollectionDocument> = mongoose.models.Collection || mongoose.model<ICollectionDocument>('Collection', CollectionSchema);

export default Collection;
