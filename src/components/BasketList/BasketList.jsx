import basket from "../../assets/basket.svg"
import trash from "../../assets/trash.svg"
import { Link } from "react-router-dom";
import css from "./BasketList.module.css"
import { useSelector  , useDispatch} from "react-redux";
import BasketCard from "./BasketCard/BasketCard";
import { useState,useEffect } from "react";
import { changePizza } from "../../store/action";

const BasketList = () => {
  const [counterPrice, setCounterPrice] = useState(0);
  const pizzas = useSelector(state => state.pizzasForBasket) 
  const dispatch = useDispatch()

  useEffect(() => {
    setCounterPrice(
      pizzas.reduce((prev, el) => (prev += el.price * (el.counter + 1)), 0)
    );
  }, [pizzas]);

  const basketCards = pizzas.map((el,index) => <BasketCard key={index} {...el} /> )

  return (
    <section className={css.basketList}>
      <header>
        <div>
          <img src={basket} alt="" />
          <h1>Корзина</h1>
        </div>
        <div onClick={() =>dispatch(changePizza([]))}>
            <img src={trash} alt="" />
            <p>Очистить корзину</p>
        </div>
      </header>
      <main>{basketCards}</main>
      <div>
        <p>Всего пицц : {pizzas.length}</p>
        <p>Сумаа заказа : {counterPrice} </p>
      </div>
      <footer>
        <Link to={"/"} className={css.basket__btn_back}><img src="" alt="" /> Вернуться назад </Link>
        <button className={css.basket__btn_next}>Оплатить сейчас</button>
      </footer>
    </section>
  );
};

export default BasketList;
