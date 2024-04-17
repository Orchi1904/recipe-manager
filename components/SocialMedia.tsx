import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { socialMediaLinks } from "@/helper/socialMediaLinks";

function SocialMedia({ data }: { data: FooterData }) {
  return (
    <div>
      <p className="text-center text-xl mb-1 md:mb-2">{data.contact_options_title}</p>
      <div className="flex justify-center gap-4 flex-wrap">
        {data.contact_options.map((item) => (
            socialMediaLinks[item.contact_option](item.contact_href, item._key)
        ))}

        {/*<Link href="https://www.linkedin.com/in/alexej-kunz/">
          <LinkedInIcon className="text-3xl hover:text-[#0077B5] transition-colors duration-300" />
        </Link>
        <Link href="https://github.com/Orchi1904">
          <GitHubIcon className="text-3xl hover:text-black transition-colors duration-300" />
  </Link>*/}
      </div>
    </div>
  );
}

export default SocialMedia;
