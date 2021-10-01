import Painting from '../Painting/Painting'
import PropTypes from 'prop-types';
import PaintingListStl from './PaintingList.module.css'


console.log("PaintingList.js works!");
// это аналог шаблона разметки для одной карточки. Аргументом получает массив с 
//карточками от файла  json. Данніе одной карточки пропускаються циклом map через шаблон и получаем коллекцию карточек
function PaintingList({ items }) {
    return (
        <ul className={PaintingListStl.PaintingListStyle}>
     {/* <ul> */}
            {items.map(item => (
                <li key={item.id}>
                     <Painting
                        url={item.url}
                        title={item.title}
                        author={item.author}
                        price={item.price}
                        quantity={item.quantity}
                    />
                </li>
            ))}
        </ul>
    );
}


//Строка  id: PropTypes.string.isRequired в данном компоненте проверяет является ли полученный айдишник строкой
// остальные props были проверены в компоненте Painting
PaintingList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }) )
    
}
 
export default PaintingList;