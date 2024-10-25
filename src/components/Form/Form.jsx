import React from "react";
import './Form.css';
const Form = () => {
return (
   <form className="form">
    <h1>Форма регистрации</h1>
    <input type="text" className="form__input input" placeholder="ФИО"></input>
    <input type="tel" className="form__input input"  placeholder="Телефон"></input>
    <input type="email" className="form__input input"  placeholder="Электронная почта"></input>
    <input type="text" className="form__input input"  placeholder="Адрес для подключения"></input>
    <button type="submit">Подать заявку</button>
   </form>
)
}

export default Form;