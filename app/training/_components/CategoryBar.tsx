import React, { Dispatch, SetStateAction } from 'react'

const CategoryBar = (props: {
  element: string;
  setselectedCategory: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div
      onClick={() => {
        props.setselectedCategory(props.element);
      }}
      className="flex justify-center items-center bg-amber-200 rounded-md text-nowrap p-2 cursor-pointer hover:bg-amber-300"
    >
      {props.element}
    </div>
  );
};

export default CategoryBar