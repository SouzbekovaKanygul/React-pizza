import pizza from "../../assets/pizza.svg"
import PizzaCard from "./PizzaCard/PizzaCard";
import css from "./PizzaList.module.css"
import pizza2 from "../../assets/pizza2.svg"
import pizza3 from "../../assets/pizza3.svg"
import pizza4 from "../../assets/pizza4.svg"
import { useEffect, useState } from "react";



const infoPizzas = [
  {
    image : pizza,
    titlePizza : "Чизбургер-пицца",
    pricePizza : 395
  },
  {
    image : pizza2,
    titlePizza : "Сырная",
    pricePizza : 395
  },
  {
    image : pizza3,
    titlePizza : "Креветки-по-азиатски",
    pricePizza : 395
  },
  {
    image : pizza4,
    titlePizza : "Сырный цыпленок",
    pricePizza : 395
  },
  {
    image : pizza,
    titlePizza : "Чизбургер-пицца",
    pricePizza : 395
  },
  {
    image : pizza2,
    titlePizza : "Сырная",
    pricePizza : 395
  },
  {
    image : pizza3,
    titlePizza : "Креветки-по-азиатски",
    pricePizza : 395
  },
  {
    image : pizza4,
    titlePizza : "Сырный цыпленок",
    pricePizza : 395
  },
]

const PizzaList = () => {
  const pizzas = infoPizzas.map((el,index) => <PizzaCard key={index} {...el} /> )

  return (
    <section className={css.pizzaList}>
      <h1>Все пиццы</h1>
      <main>{pizzas}</main>
    </section>
  );
};

export default PizzaList;
