export type User = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  id: number;
};

export type LoginProps = {
  users: User[] | null;
  logIn: (user: User) => void;
  setModal: (value: string) => void;
};

export type UserLoginItemProps = {
  user: User;
  logIn: (user: User) => void;
};

export type MainProps = {
  currentUser: User | null;
  logOut: () => void;
  users: User[] | null;
  setModal: (value: string) => void;
  modal: string;
};

export type ConversationType = {
  userId: number;
  participantId: number;
  id: number;
};
