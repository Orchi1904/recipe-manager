import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMugHot,
  faUtensils,
  faMoon,
  faIceCream,
  faMartiniGlass,
  faWheatAwn,
  faSlash,
  faFish,
  faLeaf,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";

export const tagBuilder: TagBuilder = {
  breakfast: (
    <>
      <FontAwesomeIcon icon={faMugHot} />
      <span className="text-black">Frühstück</span>
    </>
  ),
  lunch: (
    <>
      <FontAwesomeIcon icon={faUtensils} />
      <span className="text-black">Mittagessen</span>
    </>
  ),
  dinner: (
    <>
      <FontAwesomeIcon icon={faMoon} />
      <span className="text-black">Abendessen</span>
    </>
  ),
  desserts: (
    <>
      <FontAwesomeIcon icon={faIceCream} />
      <span className="text-black">Desserts</span>
    </>
  ),
  drinks: (
    <>
      <FontAwesomeIcon icon={faMartiniGlass} />
      <span className="text-black">Getränke</span>
    </>
  ),
  gluten_free: (
    <>
      <span className="relative flex items-center justify-center">
        <FontAwesomeIcon
          className="absolute"
          style={{ color: "#6E563F" }}
          icon={faSlash}
        />
        <FontAwesomeIcon transform={{ rotate: -45 }} icon={faWheatAwn} />
      </span>
      <span className="text-black">Glutenfrei</span>
    </>
  ),
  pescetarian: (
    <>
      <FontAwesomeIcon icon={faFish} />
      <span className="text-black">Pescetarisch</span>
    </>
  ),
  vegan: (
    <>
      <FontAwesomeIcon icon={faSeedling} />
      <span className="text-black">Vegan</span>
    </>
  ),
  vegetarian: (
    <>
      <FontAwesomeIcon icon={faLeaf} />
      <span className="text-black">Vegetarisch</span>
    </>
  ),
};
