import * as yup from "yup";

export const signUpAsPlayerStepOne = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  surname: yup.string().required("Surname is required"),
  dob: yup.string().required("Date of birth is required"),
  videoLink: yup.string().required("Video field is required"),
  nationality: yup.string().required("Nationality is required"),
  languages: yup.string().required("Language is required"),
  height: yup.string().required("Height field is required"),
  weight: yup.string().required("Weight field is required"),
  bestPosition: yup.string().required("Best position field is required"),
  foot: yup.string().required("Foot field is required"),
});

export const signUpAsPlayerStepTwo = yup.object().shape({
  currentCity: yup.string().required("Current city field is required"),
  phoneNumber: yup.string().required("Phone number field is required"),
  email: yup.string().required("Email is required"),
  linkedinProfileLink: yup
    .string()
    .required("Linkedin profile link is required"),
  instagramProfileLink: yup
    .string()
    .required("Instagram profile link is required"),
  twitterProfileLink: yup.string().required("Twitter profile link is required"),
});

export const signUpAsPlayerStepThree = yup.object().shape({
  previousCurrentClub: yup
    .string()
    .required("Previous/Current Club field is required"),
  clubJoined: yup
    .string()
    .required("Club joined is required field is required"),
  contractExpires: yup.string().required("Contract expires field is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Confirm password is required"),
});
