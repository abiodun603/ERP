import MenuItem from "../MenuItem";

export default function MenuItemsList({ options }) {
  return (
    <>
      {options.map((option) => (
        <MenuItem menuItem={option} key={option.id} />
      ))}
    </>
  );
}