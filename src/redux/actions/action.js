import {login, incrementData, decrementData, addcarddata} from '../reducers/Reducer';
import {store} from '../store';

const dispatch = store.dispatch;
export const datasend = data => {
  dispatch(login(data));
};
export const increase = data => {
  dispatch(incrementData(data));
};
export const decrease = data => {
  dispatch(decrementData(data));
};
export const sendcarddata = data => {
  dispatch(addcarddata(data));
};
// export const updateProductData = async data => {
//   console.log(data, 'datadatadata++++');
//   await dispatch(UpdateData(data));
// };
