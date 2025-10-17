import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerUser } from "../../actions/auth";

export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
};
