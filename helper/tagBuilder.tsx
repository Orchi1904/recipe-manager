import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot, faUtensils, faMoon } from "@fortawesome/free-solid-svg-icons";

const tagClassName = "flex items-center gap-1";

export const tagBuilder: TagBuilder = {
  breakfast: (
    <div className={tagClassName}>
      <FontAwesomeIcon className="text-rm_detail" icon={faMugHot} />
      Frühstück
    </div>
  ),
  lunch: (
    <div className={tagClassName}>
      <FontAwesomeIcon className="text-rm_detail" icon={faUtensils} />
      Mittagessen
    </div>
  ),
  dinner: (
    <div className={tagClassName}>
      <FontAwesomeIcon className="text-rm_detail" icon={faMoon} />
      Abendessen
    </div>
  ),
  /* desserts: "Desserts",
  drinks: "Getränke",
  gluten_free: "Glutenfrei",
  pescetarian: "Pescetarisch",
  vegan: "Vegan",
  vegetarian: "Vegetarisch", */
};
