export interface CartItem {
  image: string | undefined;
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalPrice: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  available: boolean;
}

export interface MenuState {
  items: MenuItem[];
  loading: boolean;
  error: string | null;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  joinedDate: string;
}

export interface UserState {
  profile: UserProfile | null;
  isLoggedIn: boolean;
}