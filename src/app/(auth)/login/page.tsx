import { LeftLoginSide } from "./components/LeftSide/LeftLoginSide";
import { RightLoginSide } from "./components/RightSide/RightLoginSide";

export default function LoginPage() {
  return (
    <div className="flex min-h-full min-w-full">
      <LeftLoginSide />
      <RightLoginSide />
    </div>
  );
}
