"use client";
import React, { useEffect, useReducer } from "react";
import { getCart } from "./actions/cart";
import { getAllCategory } from "./actions/categoryAction";
import { getAllUserProducts } from "./actions/productsActions";
import cartReducer from "./reducers/cartReducer";

interface AuthState {
  user: any;
  loading: boolean;
  error: string | null;
}

interface CartState {
  error: string | null;
  loading: boolean;
  data: any[];
}

interface GenericState {
  error: string | null;
  loading: boolean;
  data: any[];
}

const defaultAuth: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const defaultCart: CartState = {
  error: null,
  loading: false,
  data: [],
};

const defaultData: GenericState = {
  error: null,
  loading: false,
  data: [],
};

interface Action {
  type: string;
  payload?: any;
}

const authReducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload, loading: false };
    case "LOGIN_FAILURE":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

const genericReducer = (state: GenericState, action: Action): GenericState => {
  switch (action.type) {
    case "FETCHED_DATA":
      return { ...state, data: action.payload, loading: false, error: null };
    case "LOADING":
      return { ...state, loading: true };
    case "ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

interface GlobalContextType {
  authState: AuthState;
  authDispatch: React.Dispatch<Action>;
  productState: GenericState;
  productDispatch: React.Dispatch<Action>;
  cartegoryState: GenericState;
  cartegoryDispatch: React.Dispatch<Action>;
  collectionsState: GenericState;
  collectionsDispatch: React.Dispatch<Action>;
  cartState: CartState;
  cartDispatch: React.Dispatch<Action>;
  orderDispatch: React.Dispatch<Action>;
  orderState: GenericState;
  customerState: GenericState;
  customerDispatch: React.Dispatch<Action>;
  adminProductsState: GenericState;
  adminProductsDispatch: React.Dispatch<Action>;
  paymentState: GenericState;
  paymentDispatch: React.Dispatch<Action>;
}

export const GlobalContext = React.createContext<GlobalContextType>({
  authState: defaultAuth,
  authDispatch: () => {},
  productState: defaultData,
  productDispatch: () => {},
  cartegoryState: defaultData,
  cartegoryDispatch: () => {},
  collectionsState: defaultData,
  collectionsDispatch: () => {},
  cartState: defaultCart,
  cartDispatch: () => {},
  orderDispatch: () => {},
  orderState: defaultData,
  customerState: defaultData,
  customerDispatch: () => {},
  adminProductsState: defaultData,
  adminProductsDispatch: () => {},
  paymentState: defaultData,
  paymentDispatch: () => {},
});

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authState, authDispatch] = useReducer(authReducer, defaultAuth);
  const [productState, productDispatch] = useReducer(
    genericReducer,
    defaultData
  );
  const [cartState, cartDispatch] = useReducer(cartReducer, defaultCart);
  const [cartegoryState, cartegoryDispatch] = useReducer(
    genericReducer,
    defaultData
  );
  const [adminProductsState, adminProductsDispatch] = useReducer(
    genericReducer,
    defaultData
  );
  const [customerState, customerDispatch] = useReducer(
    genericReducer,
    defaultData
  );
  const [orderState, orderDispatch] = useReducer(genericReducer, defaultData);
  const [collectionsState, collectionsDispatch] = useReducer(
    genericReducer,
    defaultData
  );
  const [paymentState, paymentDispatch] = useReducer(
    genericReducer,
    defaultData
  );

  useEffect(() => {
    getAllUserProducts(productDispatch);
    getCart(cartDispatch);
    getAllCategory(cartegoryDispatch);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
        productState,
        productDispatch,
        cartState,
        cartDispatch,
        cartegoryState,
        cartegoryDispatch,
        collectionsState,
        collectionsDispatch,
        adminProductsState,
        adminProductsDispatch,
        customerState,
        customerDispatch,
        orderState,
        orderDispatch,
        paymentState,
        paymentDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
