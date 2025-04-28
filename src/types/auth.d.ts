export interface LoginFormValues {
  email: string;
  password: string;
}

export interface SignupFormValues {
  email: string;
  password: string;
}

export interface AuthResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  token: string;
  userId: string;
}

export interface User {
  _id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}
