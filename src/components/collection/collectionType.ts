export interface Image {
  url: string;
  alt?: string;
  id?: string;
}

export interface Collection {
  id?: string;
  name?: string;
  description?: string;
  icon?: string;
  primaryImage?: Image;
  secondaryImage?: Image[];
  itemCount?: number;
  slug?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
