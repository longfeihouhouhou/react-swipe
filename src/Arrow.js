import React,{Component} from 'react';
import './Arrow.css'
export default class Arrow extends Component{
    constructor(props){
        super(props);
        this.state={index:this.props.index}
    }
    render(){
        return(
                <ul className="ooul">
                    {this.props.num.map((item,index)=>(
                        <li key={index} id="ooli" >
                        </li>
                    ))}
                </ul>
        )
    }
}