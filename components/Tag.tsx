import { tagBuilder } from "@/helper/tagBuilder";
import Link from "next/link";

type Props = {
  tagName: string;
};

function Tag({ tagName }: Props) {
  return (
    <Link
      href={`/?filter=${tagName}`}
      className="group outline outline-1 outline-rm_detail rounded-2xl px-2 py-1 hover:bg-rm_background hover:outline-2 transition-colors duration-100"
    >
      <span className="flex items-center gap-1 md:gap-2 text-rm_detail group-hover:text-rm_footer transition-colors duration-200">
        {tagBuilder[tagName]}
      </span>
    </Link>
  );
}

export default Tag;
