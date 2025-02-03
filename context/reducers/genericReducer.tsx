interface GenericState<T> {
  error: string | null;
  data: T;
  loading: boolean;
}

interface Action<T> {
  type: string;
  payload?: T;
}

export default function genericReducer<T>(
  state: GenericState<T>,
  { payload, type }: Action<T>
): GenericState<T> {
  switch (type) {
    case "LOADING":
      return { ...state, error: null, loading: true };
    case "FETCHED_DATA":
      return {
        error: null,
        loading: false,
        data: payload as T,
      };
    case "ERROR":
      return { ...state, loading: false, error: payload as string };
    default:
      return state;
  }
}

export const defaultData: GenericState<any[]> = {
  error: null,
  data: [],
  loading: false,
};
