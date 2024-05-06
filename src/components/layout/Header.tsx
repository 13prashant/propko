import Logo from "../common/Logo";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="pk-container !py-5 sticky top-0 z-50 bg-background/70 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <Logo />
        <Button variant={"ghost"}>Sign In</Button>
      </div>
    </header>
  );
}
