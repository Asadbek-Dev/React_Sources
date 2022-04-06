// import React from 'react'

// const Greet = (props) => {
//     console.log(props);
//   return (
//       <div>
//         <h1>Welcome {props.name} {props.lastName}  </h1>
//         {props.children}
//       </div>
//   )
// }

// export default Greet
import React, { Component } from 'react';

class Greet extends Component {
    render(props) {
        return (
            <div>
                <h1>welcome {this.props.name}</h1>
                {this.props.children}
            </div>
        );
    }
}

export default Greet;