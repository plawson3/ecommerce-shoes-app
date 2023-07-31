import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartPayload {
  id: string;
  name: string;
  quantity: number;
  price: number;
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
        state.totalAmount += action.payload.quantity * action.payload.price;
      } else {
        state.items.push(action.payload);
        state.totalQuantity += action.payload.quantity
        state.totalAmount += action.payload.quantity * action.payload.price;
      }
    },
    RemoveFromCart: (state, action: PayloadAction<CartPayload>) => {
      state.items.push(action.payload);
      state.totalQuantity += action.payload.quantity;
      state.totalAmount += action.payload.price;
    },
  },
})

export const cartActions = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.cart.value

export default cartSlice.reducer
