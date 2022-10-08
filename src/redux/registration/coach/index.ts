import { createSlice } from "@reduxjs/toolkit";
import { CoachRegDataProps } from "../../../utils/constants/constant";

const coachRegData: CoachRegDataProps = {
  coach: {
    firstname: "",
    surname: "",
    dob: "",
    videoLink: "",
    nationality: "",
    language: "",
    formerTeam: "",
    currentTeam: "",
    currentCity: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
};

export const coachRegSlice = createSlice({
  name: "Coach registration",
  initialState: coachRegData,
  reducers: {
    handleFillCoachData(state, action) {
      state = action.payload;
    },
  },
});

export const { handleFillCoachData } = coachRegSlice.actions;
export default coachRegSlice.reducer;
