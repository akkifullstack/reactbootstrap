import React from 'react'



export default class Card extends React.Component{
    render(){
        return(
            <div>
            <h1>Card</h1>
            <div className="card">
                <div className="card-header"><img src="http://schoolleavers.co.za/example/DEVELOPER.jpg" width="516" height="360"/></div>
                <div className="card-body">Akshay</div>
                <div className="card-footer">Full Stack Developer</div>
            </div>
            </div>
        )
    }
}