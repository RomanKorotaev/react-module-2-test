import React, { Component } from 'react';
import s from './MyForm.module.css';

class MyForm extends Component {

    state = {
        value: '123',
    };

    handleChange = e => {
        this.setState({ value: e.target.value });
        console.log ("e.target.value", e.target.value )
    };

    render() {
        const { value } = this.state;

        return (
            <div>
                <p className={s.MyFormTitle}> MyForm </p>
                <input type="text" value={value} onChange={this.handleChange} />
                 <p className=''>Велью:  { value } </p>
                <br></br>
            </div>

     )   
    }
 }

export default MyForm;