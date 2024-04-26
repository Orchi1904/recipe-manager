"use client";

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
import { sortPlaceholderFallback } from "@/helper/fallbacks";

type Props = {
  placeholder?: string;
  sortValues: SortRecipeValues[];
};

function Sort({ placeholder, sortValues }: Props) {
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
          <SelectValue placeholder={placeholder ?? sortPlaceholderFallback} />
        </span>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {sortValues.map((item) => (
            <SelectItem key={item._key} value={item.sort_value}>
              {item.sort_title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default Sort;
