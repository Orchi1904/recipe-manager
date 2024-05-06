import { tagBuilder } from "@/helper/tagBuilder";

type Props = {
  tagName: string;
};

function Tag({ tagName }: Props) {
  return (
    <div className="border border-rm_detail rounded-2xl px-2 py-1">
      {tagBuilder[tagName]}
    </div>
  );
}

export default Tag;
