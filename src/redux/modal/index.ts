import { createSlice } from "@reduxjs/toolkit";

const bodyElement = document.querySelector("body")! as HTMLElement;

interface ModalProp {
  value: boolean;
  value2: boolean;
}

export const modalSlice = createSlice({
  name: "modal",
  initialState: { value: false, value2: false },
  reducers: {
    handleOpenModal: (state: ModalProp): void => {
      bodyElement.className = "scrolled-hidden";
      state.value = true;
    },
    handleCloseModal: (state: ModalProp): void => {
      bodyElement.className = "";
      state.value = false;
    },
    handleOpenModal2: (state: ModalProp) => {
      bodyElement.className = "scrolled-hidden";
      state.value2 = true;
    },
    handleCloseModal2: (state: ModalProp) => {
      bodyElement.className = "";
      state.value2 = false;
    },
  },
});

export const {
  handleOpenModal,
  handleCloseModal,
  handleOpenModal2,
  handleCloseModal2,
} = modalSlice.actions;
export default modalSlice.reducer;
