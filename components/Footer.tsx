import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { getFooter } from "@/lib/fetchData";
import SocialMedia from "./SocialMedia";
import Link from "next/link";

async function Footer() {
  const footerData: FooterData = await getFooter();
  console.log(footerData);

  return (
    <footer className=" bg-lime-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 font-bold space-y-4 md:space-y-0 md:flex md:justify-between md:py-8">
        <p className="flex justify-center items-center gap-1 text-2xl">
          Made with
          <Link
            href="https://en.wikipedia.org/wiki/Love"
            target="_blank"
            className="flex"
          >
            <FavoriteBorderIcon className="text-3xl hover:text-red-500 transition-colors duration-300" />
          </Link>
          by Alexej
        </p>

        {footerData && <SocialMedia data={footerData} />}
      </div>
    </footer>
  );
}

export default Footer;
