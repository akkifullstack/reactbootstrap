import React from 'react'
import Cardlist from './cardlist'


export default class Card extends React.Component{
    render(){
        return(
            <div>
            <h1>Last Performances</h1>
            <Cardlist/>
            </div>
        )
    }
}