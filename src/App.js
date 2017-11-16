import React, { Component } from 'react';
import './app.css';
import Arrow from './Arrow'
class App extends Component {
    constructor(){
        super();
        this.state={index:0}
    }
    componentDidMount(){
        this.go();
    }
    go=()=>{
    this.timer= setInterval(()=>{
          this.turn(1);
      },1000)
    };
    turn=(step)=>{
      let index=this.state.index+step;
      if(index>=this.props.Image.length){
          index=0
      }
      if(index<0){
          index=this.props.Image.length-1
      }
      this.setState({index:index})
    };
    render() {
        let style={
          width:this.props.Image.length*300+'px',
          left:this.state.index*-300,
          transitionDuration:'1s'
        };
        return (
            <div className="wrapper">
                <ul className="oul" style={style}>
                    {this.props.Image.map((item,index)=>(
                        <li key={index} className="oli"
                            onMouseOver={()=>{window.clearInterval(this.timer)}}
                            onMouseOut={()=>{this.go()}}>
                            <img src={item} />
                        </li>
                    ))}
                </ul>
                <div className="arrow">
                    <Arrow num={this.props.Image} nIndex={this.index}> </Arrow>
                </div>
            </div>
        );
    }
}

export default App;
