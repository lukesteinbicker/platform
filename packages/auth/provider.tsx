import type { ReactNode } from "react";

type AuthProviderProperties = {
  readonly children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProperties) => children;
