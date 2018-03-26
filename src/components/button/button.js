import React from 'react'



export default class Button extends React.Component{
    render(){
        return(
            <div className="buttonclass">
            <h1>Button</h1>
            <button className="btn btn-info new" data-toggle="modal" data-target="#myModal">Click Me</button>
    <div className="modal fade" id="myModal">
            
       <div className="modal-dialog">
         <div className="modal-content">

                <div classname="modal-header">
                <h4 className="modal-title">Demo Modal</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                <p>It just for demo</p>
                </div>

                <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
             </div>
        </div>
    </div>
    </div>
        )
    }
}