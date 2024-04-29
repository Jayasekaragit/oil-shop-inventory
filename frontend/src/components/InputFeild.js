import React from 'react'
// import UserStore from '../../stores/UserStore';

class InputFeild extends React.Component {
    render() {
        return (
            <div className="inputFeild">Input feild
            <input 
            className='input'
            type={this.props.type}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={(e) => this.props.onChange(e.target.value)}  

            
            />
            </div>
        );
    }
}

export default InputFeild