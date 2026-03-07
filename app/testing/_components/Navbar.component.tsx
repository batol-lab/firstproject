import React from 'react'

 export const NavbarComponent = (props: {
   search: string;
   setSearch: React.Dispatch<React.SetStateAction<string>>;
 }) => {
   return (
     <div>
       <img src="" alt="" />
       <input
         placeholder="search..."
         defaultValue={props.search}
         onChange={(e) => {
           props.setSearch(e.target.value);
         }}
       />
     </div>
   );
 };

export default NavbarComponent

