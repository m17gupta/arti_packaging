
export interface IImage {
  url: string;
  alt?: string;
  id?: string;
}
export interface ICollection {
  _id?: string;
  name?: string;
  description?: string;
  icon?: string;
  primaryImage?: IImage;
  secondaryImage?: IImage[];
  itemCount?: number;
  slug?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
