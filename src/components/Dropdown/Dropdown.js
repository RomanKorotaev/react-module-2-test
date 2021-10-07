import React, { Component } from 'react';
import s  from  './Dropdown.module.css';

class Dropdown extends Component {

    state = {
        visible: false,
    };


    
    show = () => { // привязываем контекст данного метода к классу
        this.setState({ visible: true });// в данном примере передаём функции setState объект,
        // а не функциональную форму, т.к. мы не обновляем статус, а пишем переменную просто поверх старой без промежуточных результатов
     console.log ('+1')
    }

     hide = () => { // привязываем контекст данного метода к классу
        this.setState({ visible: false });// в данном примере передаём функции setState объект,
        // а не функциональную форму, т.к. мы не обновляем статус, а пишем переменную просто поверх старой без промежуточных результатов
     
         console.log('-1')
     }

  toggle = (currentState) => { //а в данном примере передаём функции setState не объект, а функцию, т.к. будем ориентироваться на результат предыдущего состояния (промежуточного)
      this.setState(currentState => ({ visible: !currentState.visible}))
    }
 
    
  render() {
    return (
        <div className={s.Dropdown}>
             <button type="button" className={s.Dropdown__toggle} onClick={this.show}>Показать(метод  show )</button>
            <button type="button" className={s.Dropdown__toggle} onClick={this.hide}>Скрыть (метод hide)</button>
             
            <button type="button" className={s.Dropdown__toggle} onClick={this.toggle}>Toggle</button>
        
            { this.state.visible && <div className={s.Dropdown__menu}>Выпадающее меню</div>}
            
      </div>
    );
    }
    
}

export default Dropdown;