// import React from 'react'

// const Greet = props => {
//    const {name,lastName,children}=props;
//   return (
//       <div>
//         <h1>Welcome {name} {lastName}  </h1>
//         {children}
//       </div>
//   )
// }

// export default Greet
import React, { Component } from 'react';

class Greet extends Component {
    render(props) {
        const {name,children}=this.props;
        return (
            <div>
                <h1>welcome {name}</h1>
                {children}
            </div>
        );
    }
}

export default Greet;