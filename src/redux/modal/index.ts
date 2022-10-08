import { createSlice } from "@reduxjs/toolkit";

const bodyElement = document.querySelector("body")! as HTMLElement;

interface ModalProp {
  value: boolean;
}

export const modalSlice = createSlice({
  name: "modal",
  initialState: { value: false },
  reducers: {
    handleOpenModal: (state: ModalProp): void => {
      bodyElement.className = "scrolled-hidden";
      state.value = true;
    },
    handleCloseModal: (state: ModalProp): void => {
      bodyElement.className = "";
      state.value = false;
    },
  },
});

export const { handleOpenModal, handleCloseModal } = modalSlice.actions;
export default modalSlice.reducer;
