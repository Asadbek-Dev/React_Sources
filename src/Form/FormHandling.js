import React, { Component } from 'react';

class FormHandling extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comment:'',
         select:''
      }
    }
    handleUsernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleComment=(event)=>{
        this.setState({
            comment:event.target.value
        })
    }
    handleSelect=(event)=>{
        this.setState({
            select:event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault()
      alert(`${this.state.username} ${this.state.comment} ${this.state.select}`)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange}  />
                    <br />
                    <br />
                    <label htmlFor="comments">Comments</label>
                    <textarea value={this.state.comment} onChange={this.handleComment} cols="30" rows="5"></textarea>
                    <br />
                    <label htmlFor="topic">Topic</label>
                    <select value={this.state.select} onChange={this.handleSelect} name="" id="">
                        <option value="vue">vue</option>
                        <option value="react">react</option>
                        <option value="angular">angular</option>
                    </select>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default FormHandling;