import React from 'react'

const Greet = ({name,lastName,children}) => {
    console.log(name,lastName);
  return (
      <div>
        <h1>Welcome {name} {lastName}  </h1>
        {children}
      </div>
  )
}

export default Greet
// import React, { Component } from 'react';

// class Greet extends Component {
//     render(props) {
//         return (
//             <div>
//                 <h1>welcome {this.props.name}</h1>
//                 {this.props.children}
//             </div>
//         );
//     }
// }

// export default Greet;