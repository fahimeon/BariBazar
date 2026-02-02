export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: 'Flat' | 'Land' | 'Commercial';
  beds?: number;
  baths?: number;
  sqft: number;
  imageUrl: string;
  isTrending?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}

export enum BuyingMode {
  BUY = 'Buy',
  RENT = 'Rent',
  SELL = 'Sell'
}