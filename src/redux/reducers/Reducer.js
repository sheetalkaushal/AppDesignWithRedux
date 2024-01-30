import {createSlice} from '@reduxjs/toolkit';
const Reducer = createSlice({
  name: 'Status',
  initialState: {
    checkStatus: false,
    value: 0,
  },
  reducers: {
    login: (state, action) => {
      state.checkStatus = action.payload;
    },
   
  },
});
export const {
  login,
} = Reducer.actions;
export default Reducer.reducer;
