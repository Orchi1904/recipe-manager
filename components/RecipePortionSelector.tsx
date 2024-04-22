import { Dispatch, SetStateAction } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  portionCount: number;
  setPortionCount: Dispatch<SetStateAction<number>>;
};

function RecipePortionSelector({ portionCount, setPortionCount }: Props) {
  const portionString = portionCount === 1 ? "Portion" : "Portionen";

  const incrementPortionCount = () => {
    setPortionCount(portionCount + 1);
  };

  const decrementPortionCount = () => {
    if (portionCount > 1) {
      setPortionCount(portionCount - 1);
    }
  };

  return (
    <div className="flex justify-center mb-4 md:mb-6">
      <button
        className="flex items-center"
        onClick={decrementPortionCount}
        disabled={portionCount <= 1}
      >
        <RemoveIcon className="text-rm_detail text-xl md:text-2xl" />
      </button>
      <span className="text-center px-2 font-semibold text-sm md:text-base">
        {portionCount} {portionString}
      </span>
      <button
        className="flex items-center"
        onClick={incrementPortionCount}
      >
        <AddIcon className="text-rm_detail text-xl md:text-2xl" />
      </button>
    </div>
  );
}

export default RecipePortionSelector;
