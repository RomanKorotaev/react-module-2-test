
import s  from './Counter.module.css';
import PropTypes from 'prop-types';
import React from 'react';

class Counter extends React.Component {


    //благоданя Babel дефолтные пропсы можем прописывать через static:
    static defaultProps = {
        initialValue: 0,
    }

    static propTypes = {
        //
    }

        // //олдскульный вариант объявления состояния state:
    // constructor() {
    //     super();
    //     this.state = {
    //         value: 5,
    //     };
    //  }
    // // Поскольку под капотом стоит Babel, который транспилирует код, то запись может быть проще:
    
    state = {
        //   value: 7,
        value: this.props.initialValue,
    }
 

    handlIncrement = (event) => { // в этой строке привязываем контекст (this) функции  handlIncrement к данному классу (его экземпляру)
        // другой вариант через bind           
        console.log('Кликнули на кнопке уваеличить +1');
        console.log(this);

        const target = event.target;
        //или:
        //  const {target} = event;  //и через деструктуризацию тоже срабатывает :)
        console.log('target = event.target : ', target);

        //     // обновляем состояние (если нужно поверх записать новое значение):
        //     this.setState ({
        //         value: 10,
        //     })
        // }

        //но, если нужно перезаписать старое состояние, то нужно передавать не объект а функцию:
        this.setState((currentState) => { //сюда  React передаст актуальное состояние currentState на момент вызова
            return {
                value: currentState.value + 1
            }
        })


    }

 handlDecrement = () => { // в этой строке привязываем контекст (this) функции  handlDecrement  к данному классу (его экземпляру)
                             // другой вариант через bind           
        console.log('Кликнули на кнопке уменьшить - 1');
     console.log(this);
     
     //сюда  React передаст актуальное состояние currentState на момент вызова
     this.setState(currentState => ( { value: currentState.value - 1 } ) )
    }

    render() {
        return (
            <div className={s.Counter}>
                <span className={s.Counter__value}>{ this.state.value}</span>

                <div className={s.Counter__controls}>
                    <button type="button" onClick={this.handlIncrement}>Увеличить на 1</button>
                    <button type="button" onClick={this.handlDecrement }>Уменьшить на 1</button>

                </div>
            </div>
        ) }
}


export default Counter; 