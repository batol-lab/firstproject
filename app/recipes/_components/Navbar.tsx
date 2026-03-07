import React from 'react'
import { NavbarProps } from '../_types/navbar.type';

const Navbar = (props:NavbarProps) => {
  return (
    <div className="flex justify-between items-center mx-2 my-1 p-2">
      <img src="/logorecipes.png" alt="logo" className="h-[120px] w-[120px]" />
      <input
        placeholder="search..."
        className="outline-none px-3  bg-gray-300 rounded-lg h-10 ml-1  w-[300px]"
        defaultValue={props.search}
        onChange={(e) => {
          props.setSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default Navbar