import React from "react";
import type { UserType } from "../types/TiendaSugus.types";

export const UserCtx = React.createContext<{
  user: UserType | null,
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>
} | null>(null)