import React, { Component } from 'react';

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn:false
      }
    }
    render() {
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             <div>Welcome Asadbek</div>
        //         </div>
        //     )
        // } else{
        //     return (
        //         <div>
        //             <div>Welcome Guest</div>
        //         </div>
        //     );
        // }
        // return (
        //     <div>
        //         <div>Welcome Asadbek</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // );

        // Qisqaroq code

        // let message;
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome Asadbek</div>
        // }
        // else{
        //     message= <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>

        // Eng qisqa code

       return (
           this.state.isLoggedIn?<div>Welcome Asadbek</div>:<div>Welcome Guest</div>
       )
    }
}

export default UserGreeting;