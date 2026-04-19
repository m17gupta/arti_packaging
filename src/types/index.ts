export interface NavLink {
  label: string
  href: string
}

export interface ProductCategory {
  id: string
  name: string
  description: string
  icon: string
  imageUrl: string
  itemCount: number
}

export interface FeaturedProduct {
  id: string
  name: string
  description: string
  price: string
  imageUrl: string
  badge?: string
  category: string
  features: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  quote: string
  rating: number
  avatarUrl: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
  icon: string
}

export interface WhyChooseUsItem {
  title: string
  description: string
  icon: string
}

export interface FAQItem {
  question: string
  answer: string
}
