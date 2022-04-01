import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import MenuItemsList from "../MenuItemsList";
import ExpandIcon from "../ExpandIcon";
import { MenuItemContainer } from "./styles";

 const MenuItem = ({menuItem: { name, icon: Icon, url, depth, subItems },}) => {
  const [isExpanded, toggleExpanded] = useState(false);

  const router = useRouter();
  const selected = router.asPath === url;
  const isNested = subItems && subItems?.length > 0;

  const onClick = () => {
    toggleExpanded((prev) => !prev);
  };

  return (
    <div className="">
      <MenuItemContainer className={selected ? "selected" : ""} depth={depth} >
        <Link href={url} passHref className="block">
          <div className="menu-item">
            {Icon ? <Icon className="text-xl"/> : ""}
            <span className="">{name}</span>
          </div>
        </Link>
        {isNested ? (
          <ExpandIcon isExpanded={isExpanded} handleClick={onClick} />
        ) : null}
      </MenuItemContainer>
      {isExpanded && isNested ? <MenuItemsList options={subItems} /> : null}
    </div>
  );
}

export default MenuItem
