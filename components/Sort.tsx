// Todo: Aussehen für große Screens implementieren + Sanity anbinden, um Placeholder und Auswahlmöglichkeiten zu bestimmen

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import SwapVertIcon from "@mui/icons-material/SwapVert";

function Sort() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSelect = (selectedValue: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", selectedValue);
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <Select
      onValueChange={handleSelect}
      defaultValue={searchParams.get("sort")?.toString()}
    >
      <SelectTrigger className="w-full rounded-xl border-rm_detail h-[34px] pl-1">
        <span>
          <SwapVertIcon className="text-rm_detail" />
          <SelectValue placeholder="Sortierung" />
        </span>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="rating">Bewertung</SelectItem>
          <SelectItem value="time">Dauer</SelectItem>
          <SelectItem value="newest">Neueste</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default Sort;
