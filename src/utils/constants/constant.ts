export interface ModalProp {
  isModalOpen: {
    value: boolean;
  };
}

export interface CoachRegDataProps {
  coach: {
    firstname: string;
    surname: string;
    dob: string;
    videoLink: string;
    nationality: string;
    language: string;
    formerTeam: string;
    currentTeam: string;
    currentCity: string;
    phoneNumber: string;
    email: string;
    password: string;
    confirmPassword: "";
  };
}
