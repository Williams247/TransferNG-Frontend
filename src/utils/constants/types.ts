export interface ModalProp {
  isModalOpen: {
    value: boolean;
    value2: boolean;
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
    confirmPassword: string;
  };
}

export interface PlayerFirstPhase {
  firstname: string;
  surname: string;
  dob: string;
  videoLink: string;
  nationality: string;
  language: string;
  height: string;
  weight: string;
  bestPosition: string;
  foot: string;
}

export interface PlayerSecondPhase {
  currentCity: string;
  phoneNumber: string;
  email: string;
  linkedinProfileLink: string;
  instagramProfileLink: string;
  twitterProfileLink: string;
}

export interface PlayerThirdPhase {
  currentCity: string;
  previousCurrentClub: string;
  clubJoined: string;
  contractExpires: string;
  password: string;
  confirmPassword: string;
}
