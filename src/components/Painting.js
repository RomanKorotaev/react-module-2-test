import PropTypes from 'prop-types';


//  Это пример react-компонента. По факту это функция, котрая возвращает нам разметку (родительский тег)
//  Не забывать везде закрывать теги (даже одинарные). Имена  react-компонентов ОБЯЗАТЕЛЬНО писать с БОЛЬШОЙ буквы. 
//  Иначе  jsx  не воспримеет её как переменную, а решит что это просто строка с тегом. Ничего не будет рендерится.
function Painting(props) {
    const {  imageUrl,
        title,
        authorUrl,
        authorName = 'не известно',
        price,
        quantity} = props;
    return (<div>
        <img src={ imageUrl} alt={title} width="480" />
        <h2>{title}</h2>
        <p>
            Автор: <a href={authorUrl}>{authorName}</a>
        </p>
        <p>Цена: {price}  кредитов</p>   
        {/* Пример рендеринга по условию */}
         <p>Доступность:  { quantity < 10 ? 'заканчивается' : 'есть в наличии' } </p>
        <button type="button">Добавить в корзину</button>
    </div >
    );
}

// Выше импортируем библиотеку с проверкой типов  prop-types, а ниже пример использования
// если вместо цифры, например, в цене передать не число, а строку, то в консоле будет предупреждение об ошибке
Painting.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    authorUrl: PropTypes.string,
    authorName: PropTypes.string,
    price: PropTypes.number,
    quantity:PropTypes.number
}

export default Painting