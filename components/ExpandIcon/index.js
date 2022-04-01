
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function ExpandIcon({
  isExpanded,
  handleClick,
}) {
  return isExpanded ? (
    <IoIosArrowUp onClick={handleClick} />
  ) : (
    <IoIosArrowDown onClick={handleClick} />
  );
}