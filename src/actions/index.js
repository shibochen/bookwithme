import axios from "axios";
import {
  FETCH_RENTALS_SUCCESS,
  FETCH_RENTAL_BY_ID_INIT,
  FETCH_RENTAL_BY_ID_SUCCESS,
} from "./types";

const fetchRentalByIdInit = () => {
  return {
    type: FETCH_RENTAL_BY_ID_INIT,
  };
};

const fetchRentalByIdSuccess = (rental) => {
  return {
    type: FETCH_RENTAL_BY_ID_SUCCESS,
    rental,
  };
};

const fetchRentalsSuccess = (rentals) => {
  return {
    type: FETCH_RENTALS_SUCCESS,
    rentals,
  };
};

export const fetchRentals = () => {
  return (dispatch) => {
    // http://localhost:3000 下面axios可以省略填写这个地址
    axios
      .get("/api/v1/rentals")
      .then((res) => res.data)
      .then((rentals) => dispatch(fetchRentalsSuccess(rentals)));
  };
};

export const fetchRentalById = (rentalId) => {
  
  return (dispatch) => {
    dispatch(fetchRentalByIdInit());
    axios
      .get(`/api/v1/rentals/${rentalId}`)
      .then((res) => res.data)
      .then((rental) => dispatch(fetchRentalByIdSuccess(rental)));
  };
};
