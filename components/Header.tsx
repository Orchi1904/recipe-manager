import Link from "next/link";

function Header() {
  return (
    <header className="bg-[#fafafa]">
      <nav className="max-w-7xl mx-auto py-2 px-4 md:py-4">
        <div className="flex justify-center font-bold md:justify-start">
          <Link href="/" className="text-2xl w-fit font-tilt md:text-4xl">
            Rezept<span className="text-rm_detail">Manager</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
