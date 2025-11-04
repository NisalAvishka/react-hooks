import { createContext, useContext } from "react";
import type { User } from "../App";

export const DashboardContext = createContext<User | undefined>(undefined);

export const useUserContext = () => {
    const user = useContext(DashboardContext);
    if (!user) {
        throw new Error("useUserContext must be used within a DashboardContext.Provider");
    }
    return user;
}