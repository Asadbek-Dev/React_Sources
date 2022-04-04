import React from "react";

export const Hello = () => {
  // return (
  //   <div className='dummyClass'>
  //       <h1>Sobirov Asadbek</h1>
  //   </div>
  // )

  return React.createElement(
    "div",
    {id:'hello',className:'dummyClass'},
    React.createElement("h1", null, "Sobirov Asadbek")
  );
};
