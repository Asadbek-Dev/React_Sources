import React from "react";

export const Hello = () => {
  // return (
  //   <div>
  //       <h1>Sobirov Asadbek</h1>
  //   </div>
  // )

  return React.createElement("div", null,React.createElement('h1',null,'Sobirov Asadbek'));
};
