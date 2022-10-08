import * as yup from "yup";

export const signUpAsCoachStepOne = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  surname: yup.string().required("Surname is required"),
  dob: yup.string().required("Date of birth is required"),
  videoLink: yup.string(),
  nationality: yup.string().required("Nationality is required"),
  languages: yup.string().required("Language is required"),
});

export const signUpAsCoachStepTwo = yup.object().shape({
  formerTeams: yup.string().required("Former team is required"),
  currentTeam: yup.string().required("Current team is required"),
});

export const signUpAsCoachStepThree = yup.object().shape({
  currentCity: yup.string().required("Former city is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  email: yup.string().required("Email is required"),
  password: yup.string().required("Pin is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Pins must match")
    .required("Confirm pin is required"),
  otherCertification: yup.string(),
});
