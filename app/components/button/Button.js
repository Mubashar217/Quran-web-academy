import React from "react";

function Button(props) {
  return (
    <div className="button text-red-500 w-40 h-10 bg-blue-200 hover:bg-white py-2 text-center font-bold p-1 rounded-md hover:text-orange-500 cursor-pointer">
      <button className="cursor-pointer">{props.item}</button>
    </div>
  );
}
export default Button;
