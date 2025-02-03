interface CartState {
  error: string | null;
  data: Record<string, any>;
  loading: boolean;
}

interface Action {
  type: string;
  payload?: any;
}

export default function cartReducer(
  state: CartState,
  { payload, type }: Action
): CartState {
  switch (type) {
    case "LOADING":
      return { ...state, error: null, loading: true };
    case "FETCHED_DATA":
      return {
        error: null,
        loading: false,
        data: payload,
      };
    case "ERROR":
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}

export const defaultCart: CartState = {
  error: null,
  data: {},
  loading: false,
};
