import React from 'react'


export default class Form extends React.Component{
    render(){
        return(
            <div>
            <h1>Form</h1>
            <form action="">
            <div className="form-group">
            <label for="name">Name : </label>
            <input type="text" class="form-control" id="name" />
            </div>
            <div className="form-group">
            <label for="email">Email : </label>
            <input type="email" class="form-control" id="email" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
        )
    }
}

