// Todo: Aussehen und Funktionalität implementieren + Sanity anbinden, um Placeholder und Auswahlmöglichkeiten zu bestimmen

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import SwapVertIcon from "@mui/icons-material/SwapVert";

function Sort() {
  return (
    <Select>
      <SelectTrigger className="w-full rounded-xl border-rm_detail h-[34px] pl-1">
        <span>
          <SwapVertIcon className="text-rm_detail" />
          <SelectValue placeholder="Sortierung" />
        </span>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sortierung</SelectLabel>
          <SelectItem value="rating">Bewertung</SelectItem>
          <SelectItem value="time">Dauer</SelectItem>
          <SelectItem value="newest">Neueste</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default Sort;
