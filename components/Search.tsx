import { searchPlaceholderFallback } from "@/helper/fallbacks";
import SearchIcon from "@mui/icons-material/Search";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

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

  //Wurde implementiert um das Keyboard auf Mobilgeräten zu verstecken, wenn Enter gedrückt wird
  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.currentTarget.blur();
    }
  };

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
        className="w-full border border-rm_detail focus:border-rm_footer focus:outline-none rounded-xl pl-7 py-1 md:w-1/2 md:my-2 lg:w-1/3"
        placeholder={placeholder ?? searchPlaceholderFallback}
        defaultValue={searchParams.get("search")?.toString()}
        onChange={(e) => handleSearchTerm(e.target.value)}
        onKeyUp={onEnter}
      />
    </div>
  );
}

export default Search;
