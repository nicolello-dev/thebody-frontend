"use client";

import React, { createContext, useContext, useMemo } from "react";
import type { User } from "@/lib/auth";

type Ctx = { user: User | null };
const UserContext = createContext<Ctx>({ user: null });

export function UserProvider({
  user,
  children,
}: {
  user: User | null;
  children: React.ReactNode;
}) {
  const value = useMemo(() => ({ user }), [user]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext).user as User;
}
