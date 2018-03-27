import React from 'react'
import {connect} from 'react-redux'
import Cardlistitem from './cardlistitem'
import {getperformance} from '../../action/paction'


class Cardlist extends React.Component{
    componentDidMount = () => {
        return this.props.getperformance();
    }

    render(){
        const message = (<p>No Data Found</p>)
        return(
            <div>
            <table class="table table-striped">
            <thead>
            <tr>
            <th scope="col">Data center</th>
            <th scope="col">Vendor</th>
            <th scope="col">Serial No.</th>
            <th scope="col">Last Anamoly</th>
            <th scope="col">Previous Issues</th>
            </tr>
            </thead>
            <tbody>
            {this.props.performance.length === 0 ? message :this.props.performance.map((perform) => {
                return <Cardlistitem {...perform}/>
            })}
            </tbody>
            </table>
            </div>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        performance:state.performance
    }
}


export default connect(mapStateToProps,{getperformance})(Cardlist)