import React from 'react';

class ButtonClick extends React.Component {

    constructor() {
        super();
        this.state = {
            num: 0,
            add: 1,
            color: 'red'
        };

    }
    onButtonClick1 = () => {
        this.setState({ num: this.state.num + this.state.add });
    }
    onButtonClick2 = () =>{
        this.setState({ add: this.state.add + 1 });
    }
    onButtonClick3 = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        this.setState({ color: color });
    }
         

    render() {
      
    return (
        <div className="well">
            <h4 style={{ color: this.state.color }}>{this.state.num} </h4>
            <button onClick={this.onButtonClick1} className="btn btn-warning ">Add</button>
            <button onClick={this.onButtonClick2} className="btn btn-warning ">{this.state.add}</button>
            <button onClick={this.onButtonClick3} className="btn btn-warning ">Color</button>

        </div>
    );
}

}
export default ButtonClick;



