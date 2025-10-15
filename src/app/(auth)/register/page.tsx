import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import { HeaderRegister } from "./components/Header/HeaderRegister";

export default function RegisterPage() {
  return (
    <div className="w-full p-6">
      <HeaderRegister />
      <RegisterForm />
    </div>
  );
}
