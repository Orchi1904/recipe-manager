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
      <span style={{ color: "black" }}>Frühstück</span>
    </>
  ),
  lunch: (
    <>
      <FontAwesomeIcon icon={faUtensils} />
      <span style={{ color: "black" }}>Mittagessen</span>
    </>
  ),
  dinner: (
    <>
      <FontAwesomeIcon icon={faMoon} />
      <span style={{ color: "black" }}>Abendessen</span>
    </>
  ),
  desserts: (
    <>
      <FontAwesomeIcon icon={faIceCream} />
      <span style={{ color: "black" }}>Desserts</span>
    </>
  ),
  drinks: (
    <>
      <FontAwesomeIcon icon={faMartiniGlass} />
      <span style={{ color: "black" }}>Getränke</span>
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
      <span style={{ color: "black" }}>Glutenfrei</span>
    </>
  ),
  pescetarian: (
    <>
      <FontAwesomeIcon icon={faFish} />
      <span style={{ color: "black" }}>Pescetarisch</span>
    </>
  ),
  vegan: (
    <>
      <FontAwesomeIcon icon={faSeedling} />
      <span style={{ color: "black" }}>Vegan</span>
    </>
  ),
  vegetarian: (
    <>
      <FontAwesomeIcon icon={faLeaf} />
      <span style={{ color: "black" }}>Vegetarisch</span>
    </>
  ),
};
