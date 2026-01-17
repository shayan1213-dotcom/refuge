export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'starter' | 'main' | 'cocktail';
  isSignature?: boolean;
}

export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
}