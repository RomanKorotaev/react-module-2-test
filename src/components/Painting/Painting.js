
import defaultImage from './defaultImg.jpg';
import StylePainting  from './Painting.module.css';
import PropTypes from 'prop-types';

//  Это пример react-компонента. По факту это функция, котрая возвращает нам разметку (родительский тег)
//  Не забывать везде закрывать теги (даже одинарные). Имена  react-компонентов ОБЯЗАТЕЛЬНО писать с БОЛЬШОЙ буквы. 
//  Иначе  jsx  не воспримеет её как переменную, а решит что это просто строка с тегом. Ничего не будет рендерится.
function Painting(props) {
    const {
        imageUrl = defaultImage, //так прописывается путь к дефолтной картинке
        url,
        title,
        author = 'не известно',
        price,
        quantity} = props;
    return (<div className={StylePainting.Painting}>
        <b className={StylePainting.PaintingTestStyleVariable}> Component: Painting.js (Тестируем применение</b>
        <b className={StylePainting.PaintingTestStyleVariable}>переменной css в подульных  css-файлах) </b>
        {/* <img src={imageUrl} alt={title} width="480" /> */}
         <img src={url} alt={title} width="480" />
        <h2>{title}</h2>
        <p>
            Автор: <a href={author.url}>{author.tag}</a>
        </p>
        <p className="TitleBorder">Цена: {price}  кредитов</p>   
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
    url: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.number,
    quantity:PropTypes.number
}

export default Painting