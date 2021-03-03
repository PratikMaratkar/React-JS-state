import { Component} from "react";
class Alert extends Component{
    
    state =
    {
        my_info:"Pratik",
        my_city:"Pune"

    }
myFunction = () =>
{
   this.setState(
       {
    my_info:"Anuj",
    my_city:"mumbai"
   }
   )
}

render(){
    return(
        <div>
        
        <h1 align='Center'>Change of Names is done by set state</h1>
            <h2>My Name is {this.state.my_info}</h2>
            <h2>My City is {this.state.my_city}</h2>

        <button onClick={this.myFunction}>
            Click Here
        </button>

        </div>
        );
}
}
export default Alert;