import {createSlice} from '@reduxjs/toolkit';
import imagePath from '../../constants/imagePath';
const Reducer = createSlice({
  name: 'Status',
  initialState: {
    Status: false,
    value: 0,
    Data: [
      {
        id: 1,
        img: imagePath.icPARTYREDAYCOMBO,
        name: 'Party ready combo',
        price: '$8.00',
        qty: 0,
      },
      {
        id: 2,
        img: imagePath.icPARTYREDAYCOMBO,
        name: 'Party ready combo',
        price: '$8.00',
        qty: 0,
      },
      {
        id: 3,
        img: imagePath.icPARTYREDAYCOMBO,
        name: 'Party ready combo',
        price: '$8.00',
        qty: 0,
      },
      {
        id: 4,
        img: imagePath.icPARTYREDAYCOMBO,
        name: 'Party ready combo',
        price: '$8.00',
        qty: 0,
      },
      {
        id: 5,
        img: imagePath.icSUMMERCOMBO,
        name: 'Summer ready combo',
        price: '$8.00',
        qty: 0,
      },

    ],
  },
  reducers: {
    login: (state, action) => {
      state.Status = action.payload;
    },

    incrementData: (state, action) => {
      console.log(action.payload, 'action>>');
      state.Data[action.payload].qty = state.Data[action.payload].qty + 1;
    },
    decrementData: (state, action) => {
      state.Data[action.payload].qty = state.Data[action.payload].qty - 1;
    },
    addcarddata: (state, action) => {
      console.log(action?.payload, 'actionactionactionaction>>>>');
      const found = state.carddata.some(el => el.id === action.payload?.id);
      if (!found) {
        state.carddata.push(action.payload);
      }
    },
  },
});
export const {login, UpdateData, incrementData, decrementData} =
  Reducer.actions;
export default Reducer.reducer;
