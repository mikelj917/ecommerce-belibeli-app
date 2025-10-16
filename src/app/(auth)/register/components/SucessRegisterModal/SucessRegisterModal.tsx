import { CheckCircleIcon } from "@/assets/Icons";
import Link from "next/link";

export const SucessRegisterModal = () => {
  return (
    <div className="max-w-md rounded-xl border bg-white mb-60 p-6">
      <div className="mb-5 flex justify-center">
        <div className="rounded-full bg-green-100 p-3">
          <CheckCircleIcon className="size-14 stroke-green-500" />
        </div>
      </div>

      <div>
        <h1 className="mb-1 text-center text-2xl font-bold">
          Conta criada com sucesso!
        </h1>
        <p className="mb-3 text-center text-sm text-black/60">
          Sua conta foi registrada. Agora você pode fazer login para começar.
        </p>

        <Link href={"/login"}>
          <button className="w-full cursor-pointer rounded-lg bg-green-500 py-3 font-bold text-white hover:bg-green-600 active:bg-green-400">
            Fazer Login
          </button>
        </Link>
      </div>
    </div>
  );
};
