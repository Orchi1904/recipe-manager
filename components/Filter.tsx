"use client";

import TuneIcon from "@mui/icons-material/Tune";
import { ChevronDown } from "lucide-react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

/* Todo: Focus hinzufügen bei Tab + Code nochmal durchgehen + Code in Komponenten aufteilen 
         + Sanity anbinden */

function Filter() {
  const dropdownTriggerRef = useRef<HTMLDivElement>(null);
  const [dropdownTriggerWidth, setDropdownTriggerWidth] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState(new Set<string>());

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const updateWidth = () => {
    if (dropdownTriggerRef.current) {
      setDropdownTriggerWidth(dropdownTriggerRef.current.offsetWidth);
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
        <div
          ref={dropdownTriggerRef}
          className="border rounded-xl border-rm_detail h-[34px] pl-2 pr-3 flex justify-between items-center hover:cursor-pointer"
        >
          <div className="flex">
            <TuneIcon className="text-rm_detail" />
            <span className="ml-1 text-sm flex items-center">Filter</span>
          </div>
          <ChevronDown className="h-4 w-4 text-rm_detail" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-1" style={{ width: dropdownTriggerWidth }}>
        <label
          htmlFor="test"
          className="flex items-center gap-2 rounded-sm py-1.5 accent-rm_detail hover:bg-rm_background text-sm"
        >
          <input
            type="checkbox"
            id="test"
            name="test"
            value="test"
            checked={selectedFilters.has("test")}
            onChange={handleFilterSelect}
            className="ml-1"
          />
          Test
        </label>
        <label
          htmlFor="test2"
          className="flex items-center gap-2 rounded-sm py-1.5 accent-rm_detail hover:bg-rm_background text-sm"
        >
          <input
            type="checkbox"
            id="test2"
            name="test2"
            value="test2"
            checked={selectedFilters.has("test2")}
            onChange={handleFilterSelect}
            className="ml-1"
          />
          Test2
        </label>
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
