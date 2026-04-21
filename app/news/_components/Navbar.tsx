import React, { Dispatch, SetStateAction } from 'react'
interface NavbarProps{
  search:string,
  setSearch:Dispatch<SetStateAction<string>>
}
const Navbar = (props: NavbarProps) => {
  return (
    <div className="flex justify-between px-2 py-1 items-center">
      <input
        placeholder="search..."
        className="bg-gray-200 rounded-lg p-2 w-80 outline-none"
        defaultValue={props.search}
        onChange={(e) => {
          props.setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default Navbar