import { ArrowRight, Menu } from "lucide-react";
import Logo from "../assets/logosaas.png";
import Button from "../components/Button";

function Header() {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-10">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex  items-center justify-between">
            <img src={Logo} alt="Saas Logo" height={40} width={40} />
            <Menu className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <Button variant="primary">Get for free</Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
