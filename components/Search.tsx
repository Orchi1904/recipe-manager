"use client";

import { searchPlaceholderFallback } from "@/helper/fallbacks";
import SearchIcon from "@mui/icons-material/Search";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

// Todo: für größere Screens stylen

type Props = {
  placeholder?: string;
};

function Search({ placeholder }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  //Mit Debouncing wird die Suche erst nach einer bestimmten Anzahl an ms durchgeführt
  const handleSearchTerm = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    term ? params.set("search", term) : params.delete("search");
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  return (
    <div className="relative flex items-center">
      <label htmlFor="search" className="sr-only">
        Search
      </label>

      <SearchIcon
        className="absolute left-1 text-rm_detail"
        aria-hidden="true"
      />

      <input
        type="text"
        id="search"
        name="search"
        className="w-full border border-rm_detail focus:border-rm_footer focus:outline-none rounded-xl pl-7 py-1"
        placeholder={placeholder ?? searchPlaceholderFallback}
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => handleSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;
