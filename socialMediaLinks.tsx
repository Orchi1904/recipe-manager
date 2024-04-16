import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

const style = "text-3xl hover:text-black transition-colors duration-300";

export const socialMediaLinks: SocialMediaLinks = {
  facebook: (href, key) => (
    <Link href={href} target="_blank" key={key}>
      <FacebookIcon className={style} />
    </Link>
  ),
  github: (href, key) => (
    <Link href={href} target="_blank" key={key}>
      <GitHubIcon className={style} />
    </Link>
  ),
  instagram: (href, key) => (
    <Link href={href} target="_blank" key={key}>
      <InstagramIcon className={style} />
    </Link>
  ),
  linkedIn: (href, key) => (
    <Link href={href} target="_blank" key={key}>
      <LinkedInIcon className={style} />
    </Link>
  ),
  pinterest: (href, key) => (
    <Link href={href} target="_blank" key={key}>
      <PinterestIcon className={style} />
    </Link>
  ),
  twitter: (href, key) => (
    <Link href={href} target="_blank" key={key}>
      <XIcon className={style} />
    </Link>
  ),
  youTube: (href, key) => (
    <Link href={href} target="_blank" key={key}>
      <YouTubeIcon className={style} />
    </Link>
  ),
};
