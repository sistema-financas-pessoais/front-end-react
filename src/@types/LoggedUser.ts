export type LoggedUser = {
  sub: string;
  email: string;
  name: string;
  isAdmin: boolean;
  iat?: number;
  exp?: number;
};
