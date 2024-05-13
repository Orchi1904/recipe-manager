import Link from "next/link";
import Logo from "../public/assets/Logo4.svg";
import Image from "next/image";

function Header() {
  return (
    <header className="bg-[#fafafa]">
      <nav className="max-w-7xl mx-auto py-2 px-4 md:py-4">
        <div className="flex justify-center font-bold md:justify-start">
          <Link href="/" className="text-2xl w-fit font-tilt md:text-4xl">
            <Image src={Logo} alt="Logo" width={80}/>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
