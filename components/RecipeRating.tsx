import TimerIcon from "@mui/icons-material/Timer";

type Props = {
  rating: number;
  prepTime: number;
  ratingStyle?: string;
  dividerStyle?: string;
  timerIconStyle?: string;
  prepTimeStyle?: string;
};

function RecipeRating({
  rating,
  prepTime,
  ratingStyle,
  dividerStyle,
  timerIconStyle,
  prepTimeStyle,
}: Props) {
  return (
    <div className="flex items-center">
      <div
        className={`flex items-center justify-center border font-semibold rounded-full w-7 h-7 text-rm_detail border-rm_detail ${ratingStyle}`}
      >
        <p>{rating}</p>
      </div>
      <span className={`h-6 border border-gray-500 mx-1 ${dividerStyle}`} />
      <div className="flex items-center">
        <TimerIcon
          className={`text-lg text-rm_detail mr-1 ${timerIconStyle}`}
        />
        <p className={`text-sm text-gray-500 ${prepTimeStyle}`}>
          {prepTime} Min.
        </p>
      </div>
    </div>
  );
}

export default RecipeRating;
