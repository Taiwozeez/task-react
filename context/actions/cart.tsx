import client from "../../api/client";

export const getCart = async (dispatch: any) => {
  dispatch({
    type: "LOADING",
  });
  try {
    const p = (await client.get(`/carts`)).data;
    dispatch({
      type: "FETCHED_DATA",
      payload: p,
    });

    console.log(p.data);
  } catch (error: any) {
    dispatch({
      type: "ERROR",
      payload: error.response?.data?.message || "Couldn't get cart",
    });
    console.log("Error Getting Cart", error.response);
  }
};
