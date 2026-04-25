import { ICollection } from "@/lib/slice/collection/CollectionType"
import { FAQItem, FeaturedProduct, NavLink, ProcessStep, Testimonial, WhyChooseUsItem } from "@/types"


export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Collections', href: '#collections' },
  { label: 'Products', href: '#products' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const productCategories: ICollection[] = [
  {
    _id: 'corporate-hampers',
    name: 'Corporate Hampers',
    description: 'Tailored gifting solutions for businesses, client appreciation, and team recognition programs.',
    icon: '🏢',
    primaryImage: { url: 'https://images.pexels.com/photos/17878238/pexels-photo-17878238.jpeg?auto=compress&cs=tinysrgb&w=800' },
    itemCount: 24,
    slug: 'corporate-hampers',
    isActive: true
  },
  {
    _id: 'festive-collections',
    name: 'Festive Collections',
    description: 'Seasonal gift packages curated for every celebration — from Diwali to Christmas and beyond.',
    icon: '🎄',
    primaryImage: { url: 'https://images.pexels.com/photos/28769884/pexels-photo-28769884.jpeg?auto=compress&cs=tinysrgb&w=800' },
    itemCount: 18,
    slug: 'festive-collections',
    isActive: true
  },
  {
    _id: 'luxury-gift-boxes',
    name: 'Luxury Gift Boxes',
    description: 'Handcrafted bespoke boxes with premium curation — the pinnacle of personal gifting.',
    icon: '🎁',
    primaryImage: { url: 'https://images.pexels.com/photos/32498681/pexels-photo-32498681.jpeg?auto=compress&cs=tinysrgb&w=800' },
    itemCount: 32,
    slug: 'luxury-gift-boxes',
    isActive: true
  },
  {
    _id: 'specialty-hammers',
    name: 'Wedding Hampers',
    description: 'Exquisite gifting for the most special day — thoughtfully curated for couples and guests alike.',
    icon: '💍',
    primaryImage: { url: 'https://images.unsplash.com/photo-1656821991475-86b1b2ba3c32?auto=compress&cs=tinysrgb&w=800' },
    itemCount: 12,
    slug: 'wedding-hampers',
    isActive: true
  },
  {
    _id: 'wellness-packages',
    name: 'Chocolate Collections',
    description: 'Premium handcrafted chocolates and confectionery for every sweet tooth.',
    icon: '🍫',
    primaryImage: { url: 'https://images.pexels.com/photos/16762643/pexels-photo-16762643.jpeg?auto=compress&cs=tinysrgb&w=800' },
    itemCount: 15,
    slug: 'chocolate-collections',
    isActive: true
  },
  {
    _id: 'custom-packages',
    name: 'Custom Packages',
    description: 'Fully personalized gifting packages designed from scratch to match your exact vision.',
    icon: '✨',
    primaryImage: { url: 'https://images.pexels.com/photos/34198898/pexels-photo-34198898.jpeg?auto=compress&cs=tinysrgb&w=800' },
    itemCount: 0,
    slug: 'custom-packages',
    isActive: true
  },
]

export const featuredProducts: FeaturedProduct[] = [
  {
    id: 'gold-prestige-hamper',
    name: 'Gold Prestige Hamper',
    description: 'An opulent collection of hand-selected artisan goods presented in our signature black lacquer box with gold foil detailing.',
    price: '₹8,500',
    imageUrl: 'https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Bestseller',
    category: 'Corporate Hampers',
    features: ['24K Gold Ribbon', 'Premium Curation', 'Custom Engraving', 'Same-day Dispatch'],
  },
  {
    id: 'artisan-wellness-box',
    name: 'Artisan Wellness Box',
    description: 'A serene collection of botanical skincare, aromatic candles, and herbal infusions for the discerning recipient.',
    price: '₹5,200',
    imageUrl: 'https://images.pexels.com/photos/3735624/pexels-photo-3735624.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'New',
    category: 'Wellness Packages',
    features: ['Organic Products', 'Handmade Candles', 'Silk Wrapping', 'Personalized Note'],
  },
  {
    id: 'festive-diwali-edition',
    name: 'Diwali Heritage Edition',
    description: 'A celebration of tradition and luxury — featuring premium mithai, dry fruits, and festive keepsakes in an heirloom wooden box.',
    price: '₹6,800',
    imageUrl: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Limited',
    category: 'Festive Collections',
    features: ['Wooden Heirloom Box', 'Premium Dry Fruits', 'Hand-painted Diya', 'Free Giftwrapping'],
  },
  {
    id: 'signature-hammer-set',
    name: 'Signature Hammer Set',
    description: 'Our most coveted product — a handcrafted artisan hammer with rosewood handle, presented as a symbol of strength and achievement.',
    price: '₹12,000',
    imageUrl: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Exclusive',
    category: 'Specialty Hammers',
    features: ['Rosewood Handle', 'Brass Head Finish', 'Laser Engraved', 'Velvet Presentation Case'],
  },
  {
    id: 'executive-curated-box',
    name: 'Executive Curated Box',
    description: 'Designed for the modern executive — premium stationery, aged whisky miniatures, and leather accessories in a monogrammed box.',
    price: '₹9,500',
    imageUrl: 'https://images.pexels.com/photos/6373302/pexels-photo-6373302.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Premium',
    category: 'Luxury Gift Boxes',
    features: ['Monogrammed Box', 'Premium Spirits', 'Leather Accessories', 'Concierge Delivery'],
  },
  {
    id: 'blossom-thank-you',
    name: 'Blossom Thank You Set',
    description: 'Express gratitude in the most elegant way — a curated set of floral teas, luxury chocolates, and hand-bound journals.',
    price: '₹3,800',
    imageUrl: 'https://images.pexels.com/photos/6373307/pexels-photo-6373307.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Custom Packages',
    features: ['Floral Teas', 'Belgian Chocolates', 'Hand-bound Journal', 'Botanical Wrapping'],
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Arjun Mehta',
    role: 'Chief People Officer',
    company: 'Nexus Technologies',
    quote: 'Hammer & Hampers transformed our entire corporate gifting strategy. The quality and attention to detail left every recipient genuinely speechless. Our clients noticed the difference immediately.',
    rating: 5,
    avatarUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: '2',
    name: 'Priya Nair',
    role: 'Director of Operations',
    company: 'Meridian Hospitality',
    quote: 'We ordered 300 Diwali hampers for our partners and the execution was flawless. Every box was identical in quality, perfectly presented, and delivered on time. Exceptional.',
    rating: 5,
    avatarUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: '3',
    name: 'Rohit Sharma',
    role: 'Founder',
    company: 'The Artisan Club',
    quote: "The Signature Hammer Set I received as a gift is a genuine work of art. The craftsmanship is extraordinary. I've never seen anything quite like it — it now sits proudly on my desk.",
    rating: 5,
    avatarUrl: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: '4',
    name: 'Kavita Reddy',
    role: 'Head of Marketing',
    company: 'Luminary Brands',
    quote: 'From concept to delivery, their team was collaborative, creative, and professional. The custom boxes for our product launch were absolutely stunning — better than we imagined.',
    rating: 5,
    avatarUrl: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Consultation',
    description: 'Share your vision, budget, and recipient profile with our gifting consultants. We listen carefully to understand your needs.',
    icon: '💬',
  },
  {
    step: 2,
    title: 'Curation',
    description: 'Our expert curators hand-select each item from our premium supplier network, ensuring perfect harmony and quality.',
    icon: '✦',
  },
  {
    step: 3,
    title: 'Crafting',
    description: 'Every box is assembled by skilled artisans in our studio, with meticulous attention to presentation and packaging.',
    icon: '🎁',
  },
  {
    step: 4,
    title: 'Delivery',
    description: 'White-glove delivery to your door or directly to recipients. Tracked, insured, and impeccably timed.',
    icon: '🚀',
  },
]

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: 'Artisan Craftsmanship',
    description: 'Every item is handpicked and assembled by skilled craftspeople who care about every detail.',
    icon: '✦',
  },
  {
    title: 'Fully Customizable',
    description: 'From the box design to the contents and branding — every element can be tailored to your vision.',
    icon: '◈',
  },
  {
    title: 'Bulk Order Excellence',
    description: 'Whether 10 or 10,000 packages, we maintain consistent quality across every single unit.',
    icon: '◉',
  },
  {
    title: 'Premium Sourcing',
    description: 'We partner with India\'s finest artisans and international luxury brands to curate only the best.',
    icon: '◎',
  },
  {
    title: 'On-Time Guarantee',
    description: 'We understand the importance of timing. Our logistics team ensures every delivery is punctual.',
    icon: '◷',
  },
  {
    title: 'Sustainable Packaging',
    description: 'All packaging is responsibly sourced and designed to be repurposed — luxury with a conscience.',
    icon: '◌',
  },
]

export const faqItems: FAQItem[] = [
  {
    question: 'What is the minimum order quantity for corporate hampers?',
    answer: 'We accommodate both individual and bulk orders. For corporate orders, we recommend a minimum of 10 units to benefit from our customization and pricing tiers. However, we do accept smaller orders for personalized gifting.',
  },
  {
    question: 'How far in advance should I place an order?',
    answer: 'For standard orders, we recommend 5–7 business days. For fully custom packages or bulk corporate orders (100+), we suggest 2–3 weeks to ensure perfect execution. During festive seasons, earlier is always better.',
  },
  {
    question: 'Can I include my company\'s branding on the packaging?',
    answer: 'Absolutely. We offer full white-label and co-branding solutions — from custom printed boxes and ribbons to branded inserts, tissue paper, and personalized cards. Our design team will work closely with you.',
  },
  {
    question: 'Do you offer pan-India delivery?',
    answer: 'Yes, we deliver across India. For major metros, we offer same-day and next-day delivery options. For international shipments, please contact us directly for availability and pricing.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major payment methods including bank transfers, UPI, credit/debit cards, and corporate purchase orders. For bulk orders, we offer flexible payment terms.',
  },
  {
    question: 'Can I request a sample before placing a bulk order?',
    answer: 'Yes, we encourage sample requests for bulk corporate orders. Sample packages can be arranged with a nominal fee, which is credited back against your bulk order confirmation.',
  },
]
