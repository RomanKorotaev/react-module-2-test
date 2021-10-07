import React from 'react'
import s  from './Counter.module.css'; 

const Value = ({value}) =>  // в этой строке привязываем контекст (this) функции  к  классу (его экземпляру)
                             // другой вариант через bind      
    <span className={s.Counter__value}>{value}</span>


export default Value;