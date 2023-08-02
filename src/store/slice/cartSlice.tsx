import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Image } from 'sanity';

export interface CartPayload {
  id: string;
  name: string;
  quantity: number;
  price: number;
  category: string;
  productImage: Image;
  discountedPrice:number;
}

// Define a type for the slice state
interface CartState {
  items: CartPayload[]
  totalQuantity: number;
  totalAmount: number;
}

// Define the initial state using that type
const initialState: CartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    AddToCart: (state, action: PayloadAction<CartPayload>) => {
      const isProductExists: CartPayload = state.items.find(x => x.id === action.payload.id)!;
      if (Boolean(isProductExists)) {
        isProductExists.quantity += action.payload.quantity;
        state.totalQuantity += action.payload.quantity;
        state.totalAmount += action.payload.quantity * action.payload.discountedPrice;
      } else {
        state.items.push(action.payload);
        state.totalQuantity += action.payload.quantity
        state.totalAmount += action.payload.quantity * action.payload.discountedPrice;
      }
    },
    RemoveFromCart: (state, action: PayloadAction<CartPayload>) => {
      const isProductExists: CartPayload = state.items.find(x => x.id === action.payload.id)!;
      if (Boolean(isProductExists) && isProductExists.quantity > 0) {
        isProductExists.quantity -= 1
        state.totalQuantity -= 1;
        state.totalAmount -= isProductExists.discountedPrice;
      }
    },
    DeleteProductFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const productToBeRemoved = state.items.find(item => (item.id === action.payload.id));
      if (productToBeRemoved !== undefined) {
        const filteredProducts = state.items.filter(item => (item.id !== action.payload.id));
        state.items = filteredProducts;
        state.totalAmount -= productToBeRemoved?.quantity * productToBeRemoved?.discountedPrice;
        state.totalQuantity -= productToBeRemoved?.quantity;
      }
    }
  },
})

export const cartActions = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.cart.value

export default cartSlice.reducer
