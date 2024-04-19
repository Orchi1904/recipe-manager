import { socialMediaLinks } from "@/helper/socialMediaLinks";

function SocialMedia({ data }: { data: FooterData }) {
  return (
    <div>
      <p className="text-center text-xl mb-1 md:mb-2">
        {data.contact_options_title}
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        {data.contact_options.map((item) =>
          socialMediaLinks[item.contact_option](item.contact_href, item._key)
        )}
      </div>
    </div>
  );
}

export default SocialMedia;
