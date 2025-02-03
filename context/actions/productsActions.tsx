import client from "../../api/client";

// Define types for dispatch actions
type Dispatch = (action: { type: string; payload?: any }) => void;

type ErrorResponse = {
  response?: {
    data?: {
      message?: string;
    };
  };
};

export const getAllUserProducts = async (dispatch: Dispatch): Promise<void> => {
  dispatch({
    type: "LOADING",
  });
  try {
    const p = (await client.get(`/products`)).data;
    dispatch({
      type: "FETCHED_DATA",
      payload: p,
    });
    // console.log("products", p.data);
  } catch (error: unknown) {
    const err = error as ErrorResponse;
    dispatch({
      type: "ERROR",
      payload: err.response?.data?.message || "Couldn't get cart",
    });
    console.log("Error all products", err.response);
  }
};

export const getAllAdminProducts = async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch({
    type: "LOADING",
  });
  try {
    const p = (await client.get(`/products`)).data;
    console.log(p);
    dispatch({
      type: "FETCHED_DATA",
      payload: p.data,
    });
    // console.log("products", p.data);
  } catch (error: unknown) {
    const err = error as ErrorResponse;
    dispatch({
      type: "ERROR",
      payload: err.response?.data?.message || "Couldn't get cart",
    });
    console.log("Error all admin products", err.response);
  }
};

type ProductData = {
  // Define the shape of data that needs to be sent for creating products
  name: string;
  price: number;
  description: string;
  // Add any other necessary fields here
};

export const createAdminProducts = async (
  dispatch: Dispatch,
  data: ProductData
): Promise<boolean> => {
  dispatch({
    type: "LOADING",
  });
  try {
    const p = (await client.post(`/products`, data)).data;
    getAllAdminProducts(dispatch);
    // console.log("products", p);
    alert("Product Created Successfully");
    return true;
  } catch (error: unknown) {
    const err = error as ErrorResponse;
    dispatch({
      type: "ERROR",
      payload: err.response?.data?.message || "Couldn't get cart",
    });
    console.log("Error creating products", err.response || err);
    return false;
  }
};

export const deleteAdminProducts = async (
  dispatch: Dispatch,
  data: string
): Promise<boolean> => {
  dispatch({
    type: "LOADING",
  });
  try {
    const p = (await client.delete(`/api/v1/Product/deleteProduct/${data}`))
      .data;
    // console.log("category", p);
    getAllUserProducts(dispatch);
    alert("Products deleted successfully");
    return true;
  } catch (error: unknown) {
    const err = error as ErrorResponse;
    dispatch({
      type: "ERROR",
      payload: err.response?.data?.message,
    });
    console.log("Error deleting collection", err.response);
    return false;
  }
};
