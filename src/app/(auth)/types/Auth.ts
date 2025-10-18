export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export type RegisterResponse = {
  id: number;
  name: string;
  email: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  user: {
    email: string;
    name: string;
    id: number;
  };
  accessToken: string;
};
