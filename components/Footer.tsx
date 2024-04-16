import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

// Todo: Kontaktmöglichkeiten mit Sanity anpassbar machen

function Footer() {
  return (
    <footer className=" bg-lime-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 font-bold space-y-4 md:space-y-0 md:flex md:justify-between md:py-8">
        <p className="flex justify-center items-center gap-1 text-2xl">
          Made with
          <FavoriteBorderIcon className="text-3xl" />
          by Alexej
        </p>

        <div>
          <p className="text-center text-xl">Contact me</p>
          <div className="flex justify-center gap-4">
            <Link href="https://www.linkedin.com/in/alexej-kunz/">
              <LinkedInIcon className="text-3xl hover:text-[#0077B5] transition-colors duration-300" />
            </Link>
            <Link href="https://github.com/Orchi1904">
              <GitHubIcon className="text-3xl hover:text-black transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
