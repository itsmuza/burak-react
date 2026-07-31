import { Member } from "./member";
import { OrderWithDetails } from "./order";
import { Product } from "./product";

// * react app state
export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageState;
  ordersPage: OrdersPageState;
}

//* HOMEPAGE
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

//* PRODUCT PAGE
export interface ProductsPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

//* ORDERS PAGE
export interface OrdersPageState {
  pausedOrders: OrderWithDetails[];
  processOrders: OrderWithDetails[];
  finishedOrders: OrderWithDetails[];
}
