import { Dispatch, SetStateAction, createContext } from "react";

export type CurrentUserContextType = {
  currentUser: string | null;
  setCurrentUser: Dispatch<SetStateAction<string | null>>;
};
const currentUserContextDefaultValue: CurrentUserContextType = {
  currentUser: null,
  setCurrentUser: () => {},
};
export const CurrentUserContext = createContext<CurrentUserContextType>(
  currentUserContextDefaultValue
);
