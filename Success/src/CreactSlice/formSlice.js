import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  form: JSON.parse(localStorage.getItem('cartitems')) || []
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addForm: (state, action) => {
      state.form.push(action.payload);
      localStorage.setItem('cartitems', JSON.stringify(state.form))
    },
    removeForm: (state, action) => {
      state.form.splice(action.payload, 1);
      localStorage.setItem('cartitems', JSON.stringify(state.form))
    }
  }
});

export const { addForm, removeForm } = formSlice.actions;

export default formSlice.reducer;
