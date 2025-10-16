import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../../services/user";

export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
};
