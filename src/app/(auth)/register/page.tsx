import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import { RegisterHeader } from "./components/RegisterHeader/RegisterHeader";

export default function RegisterPage() {
  return (
    <div className="w-full">
      <RegisterHeader />
      <RegisterForm />
    </div>
  );
}
