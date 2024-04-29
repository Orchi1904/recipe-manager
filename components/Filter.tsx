"use client";

import TuneIcon from "@mui/icons-material/Tune";
import { ChevronDown } from "lucide-react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { filterPlaceholderFallback } from "@/helper/fallbacks";

type Props = {
  placeholder: string;
  filterValues: FilterRecipeValues[];
};

function Filter({ placeholder, filterValues }: Props) {
  const dropdownTriggerRef = useRef<HTMLButtonElement>(null);
  const [popoverTriggerWidth, setPopoverTriggerWidth] = useState(0);

  const searchParams = useSearchParams();
  const [selectedFilters, setSelectedFilters] = useState(
    new Set<string>(searchParams.get("filter")?.toString().split(","))
  );
  const pathname = usePathname();
  const { replace } = useRouter();

  const updateWidth = () => {
    if (dropdownTriggerRef.current) {
      setPopoverTriggerWidth(dropdownTriggerRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const handleFilterSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const alreadySelected = selectedFilters.has(e.target.value);
    const filters = new Set(selectedFilters);

    alreadySelected
      ? filters.delete(e.target.value)
      : filters.add(e.target.value);
    setSelectedFilters(filters);

    updateParams(filters);
  };

  const deleteAllFilters = () => {
    const emptySet = new Set<string>();
    setSelectedFilters(emptySet);
    updateParams(emptySet);
  };

  const updateParams = (filters: Set<string>) => {
    const params = new URLSearchParams(searchParams);
    filters.size
      ? params.set("filter", Array.from(filters).join(","))
      : params.delete("filter");
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          ref={dropdownTriggerRef}
          variant="outline"
          className="border rounded-xl border-rm_detail h-[34px] pl-2 pr-3 flex justify-between items-center hover:cursor-pointer"
        >
          <div className="flex">
            <TuneIcon className="text-rm_detail" />
            <span className="ml-1 text-sm flex items-center font-normal">
              {placeholder ?? filterPlaceholderFallback}
            </span>
          </div>
          <ChevronDown className="h-4 w-4 text-rm_detail" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-1" style={{ width: popoverTriggerWidth }}>
        {filterValues.map((item) => (
          <label
            key={item._key}
            htmlFor={item.filter_value}
            className="flex items-center gap-2 rounded-sm py-1.5 accent-rm_detail hover:bg-rm_background text-sm"
          >
            <input
              type="checkbox"
              id={item.filter_value}
              name={item.filter_value}
              value={item.filter_value}
              checked={selectedFilters.has(item.filter_value)}
              onChange={handleFilterSelect}
              className="ml-1"
            />
            {item.filter_title}
          </label>
        ))}
        {selectedFilters.size > 0 && (
          <div>
            <hr className="my-2" />
            <button
              onClick={deleteAllFilters}
              className="w-full p-1 rounded-sm hover:bg-rm_background"
            >
              Filter zurücksetzen
            </button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}

export default Filter;
