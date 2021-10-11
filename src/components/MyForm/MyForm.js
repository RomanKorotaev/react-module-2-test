import React, { Component } from 'react';
import s from './MyForm.module.css';
import shortid from 'shortid'
import initialTodos2 from '../../todos2.json'


class MyForm extends Component {

    state = {
        value: '',
        id: '',
        text: '',
        completed: false,
        tag: '',

        message : '',
    };

    idInputeId = shortid.generate();
    textInputeId = shortid.generate();
    tegInputeId = shortid.generate();

    handleChange = e => {
        this.setState({ value: e.target.value });
        console.log("e.target.value", e.target.value)
    };

    handleInputChange = e => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });

        console.log("e.currentTarget", e.target)
        console.log("e.currentTarget.name", e.currentTarget.name)
        console.log("e.currentTarget.value", e.currentTarget.value)
    }

    reset = () => {
        this.setState({
            value: '',
            id: '',
            text: '',
            completed: false,
            tag: '',
            formTmpObj: {}
        });
        console.log("Сработала функция  reset ")
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('Сработала handleSubmit ');

        console.log(this.state);
        //  this.props.onSubmit(this.state.message)
        
        this.props.onSubmit(this.state.message,  this.state.tag, this.state.text );


        // let tmpObj = {
        //     id: this.state.id, text: this.state.text, completed: this.state.completed, tag: this.state.tag
        // }

        // JSON.stringify(tmpObj);
        // console.log("tmpObj ", tmpObj)

        // console.log("initialTodos2 до пуша", initialTodos2)
        // initialTodos2.push(tmpObj);
        // console.log("initialTodos2 после пуша", initialTodos2);


         this.reset();
//  //-----------------------
        //         AppTest.setState(
        //             prevState => ({
        //                 todos2: tmpObj,
        //             }));

        //          console.log("Вызов обновления")


    }

    handleCheckBox = e => {
        console.log("e.currentTarget.checked", e.target.checked)

        this.setState({ completed: e.currentTarget.checked })
    }

    handleChange = e => {
          this.setState({  message: e.currentTarget.value })
     }

    render() {
        const { value } = this.state;

        return (
            <div>
                <p className={s.MyFormTitle}> MyForm </p>
                <input type="text" value={value} onChange={this.handleChange} />
                <p className=''>Велью:  {value} </p>
                <br></br>

                <form className={s.MyForm} onSubmit={this.handleSubmit}>
                    <h3> Введите данные в форму: </h3>

                    <label htmlFor={this.idInputeId}>
                        ID:
                        <input type="text"
                            name="id"
                            onChange={this.handleInputChange}
                            value={this.state.id}
                            id={this.idInputeId}
                        />
                    </label>

                    <label htmlFor={this.textInputeId}>
                        Название технологии (text):
                        <input type="text"
                            name="text"
                            onChange={this.handleInputChange}
                            value={this.state.text}
                            id={this.textInputeId}
                        />
                    </label>

                    <label htmlFor={this.tagInputeId}>
                        Тег:
                        <input type="text"
                            name="tag"
                            onChange={this.handleInputChange}
                            value={this.state.tag}
                            id={this.tagInputeId}
                        />
                    </label>

                    
                    <input type="checkbox" name="completed" checked={this.state.completed} onChange={this.handleCheckBox} /> Изучили технологию или нет?
                    {/* <button type="submit"> Отправить форму </button> */}

                    <textarea
                        value={this.state.message}
                        onChange={ this.handleChange}>
                    </textarea>
                    <button type="submite"> Сохраниь </button>
                    
                </form>

                <br></br>
            </div>
        )
    }
}


export default MyForm;