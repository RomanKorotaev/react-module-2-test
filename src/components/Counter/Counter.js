
import s  from './Counter.module.css';
import PropTypes from 'prop-types';
import React from 'react';

class Counter extends React.Component {

    handlIncrement = (event) => { // в этой строке привязываем контекст (this) функции  handlIncrement к данному классу (его экземпляру)
                             // другой вариант через bind           
        console.log('Кликнули на кнопке уваеличить +1');
        console.log(this);

        const target = event.target;
        //или:
        //  const {target} = event;  //и через деструктуризацию тоже срабатывает :)

         console.log('target = event.target : ', target);
    }
    

   

 handlDecrement = () => { // в этой строке привязываем контекст (this) функции  handlDecrement  к данному классу (его экземпляру)
                             // другой вариант через bind           
        console.log('Кликнули на кнопке уменьшить - 1');
        console.log(this);
    }

    render() {
        return (
            <div className={s.Counter}>
                <span  className={s.Counter__value }>0</span>

                <div className={s.Counter__controls}>
                    <button type="button" onClick={this.handlIncrement}>Увеличить на 1</button>
                    <button type="button" onClick={this.handlDecrement }>Уменьшить на 1</button>

                </div>
            </div>
        ) }
}


export default Counter; 