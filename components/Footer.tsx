import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

// Todo: Footer für große Bildschirme anpassen + Kontaktmöglichkeiten mit Sanity anpassbar machen

function Footer() {
  return (
    <footer className=" bg-lime-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 font-bold space-y-1">
        <p className="flex justify-center items-center gap-1 text-2xl mb-4">
          Made with
          <FavoriteBorderIcon className="text-3xl" />
          by Alexej
        </p>
        <p className="text-center text-xl">Contact me</p>
        <div className="flex justify-center gap-4">
          <Link href="https://www.linkedin.com/in/alexej-kunz/">
            <LinkedInIcon className="text-3xl" />
          </Link>
          <Link href="https://github.com/Orchi1904">
            <GitHubIcon className="text-3xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
