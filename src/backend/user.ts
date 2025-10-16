import { getUsers } from "@/app/(auth)/services/user";
import type { User } from "@/shared/types/User";
import type { ErrorBackend } from "./types/Error";

export const validateUser = async (
  userData: Pick<User, "email" | "password">,
): Promise<string | ErrorBackend> => {
  const usersData: User[] = await getUsers();

  const foundUser = usersData.find(
    (user: User) => user.email === userData.email && user.password === userData.password,
  );
  if (!foundUser) {
    const error: ErrorBackend = {
      statusCode: 404,
      message: "Credenciais Inválidas",
    };
    return error;
  }

  return foundUser.token;
};
