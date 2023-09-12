/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShown: false,
  type: null,
  id: null,
};

const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    showModal: (state, { payload }) => {
      const { type, id } = payload;
      state.isShown = true;
      state.type = type;
      state.id = id;
    },
    closeModal: (state) => {
      state.isShown = false;
      state.type = null;
      state.id = null;
    },
  },
});

export const { actions } = modalSlice;
export default modalSlice.reducer;
