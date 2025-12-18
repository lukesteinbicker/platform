import type { Generated, Insertable, Selectable, Updateable } from "kysely";

export interface Database {
  user: UserTable;
  session: SessionTable;
  account: AccountTable;
  verification: VerificationTable;
}

export interface UserTable {
  id: Generated<string>;
  name: string;
  username: string | null;
  email: string;
  email_verified: boolean;
  image: string | null;
  role: "admin" | "user" | null;
  company_id: string | null;
  communications: boolean | null;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface SessionTable {
  id: Generated<string>;
  user_id: string;
  token: string;
  expires_at: Date;
  ip_address: string | null;
  user_agent: string | null;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface AccountTable {
  id: Generated<string>;
  user_id: string;
  account_id: string;
  provider_id: string;
  access_token: string | null;
  refresh_token: string | null;
  access_token_expires_at: Date | null;
  refresh_token_expires_at: Date | null;
  scope: string | null;
  id_token: string | null;
  password: string | null;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface VerificationTable {
  id: Generated<string>;
  identifier: string;
  value: string;
  expires_at: Date;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export type User = Selectable<UserTable>;
export type NewUser = Insertable<UserTable>;
export type UserUpdate = Updateable<UserTable>;

export type Session = Selectable<SessionTable>;
export type NewSession = Insertable<SessionTable>;
export type SessionUpdate = Updateable<SessionTable>;

export type Account = Selectable<AccountTable>;
export type NewAccount = Insertable<AccountTable>;
export type AccountUpdate = Updateable<AccountTable>;

export type Verification = Selectable<VerificationTable>;
export type NewVerification = Insertable<VerificationTable>;
export type VerificationUpdate = Updateable<VerificationTable>;
