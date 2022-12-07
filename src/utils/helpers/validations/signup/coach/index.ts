import * as yup from "yup";

export const signUpAsCoachStepOne = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  surname: yup.string().required("Surname is required"),
  dob: yup.string().required("Date of birth is required"),
  videoLink: yup.string(),
  nationality: yup.string().required("Nationality is required"),
  language: yup.string().required("Language is required"),
});

export const signUpAsCoachStepTwo = yup.object().shape({
  formerTeam: yup.string().required("Former team is required"),
  currentTeam: yup.string().required("Current team is required"),
});

export const signUpAsCoachStepThree = yup.object().shape({
  currentCity: yup.string().required("Former city is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  otherCertification: yup.string(),
});

export const signUpAsCoachStepFour = yup.object().shape({
  licenses: yup.string().required("Licenses certificate upload is required"),
  diploma: yup.string().required("Diploma certificate upload is required"),
  otherTraining: yup
    .string()
    .required("Other trainings certificate upload is required"),
});
