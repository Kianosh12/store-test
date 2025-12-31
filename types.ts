export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  tag?: string;
}

export interface AiMessage {
  role: 'user' | 'model';
  text: string;
}