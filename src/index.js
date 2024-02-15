import React from 'react';
import ReactDom from "react-dom/client";
import './index.css';

import Menu from './component/menu';
import Footer from './component/footer';
const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return <div className='container'>
        <Header />

        <Menu />
        <Footer />
    </div>
}


function Header() {
    // const style = { color: "red", fontSize: "42px", textTransform: "uppercase" }
    const style = {}

    return <header className='header footer'>
        <h1 style={style} >Fast Pizza company</h1>;

    </header>
}




const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App /></React.StrictMode>)