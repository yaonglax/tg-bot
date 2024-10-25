import React from "react";
import './Form.css';
const Form = () => {
return (
   <form className="form">
    <input type="text" className="form__input input" placeholder="Фамилия"></input>
    <input type="text" className="form__input input"  placeholder="Имя"></input>
    <input type="text" className="form__input input"  placeholder="Отчество"></input>
    <input type="text" className="form__input input"  placeholder="Телефон"></input>
    <input type="text" className="form__input input"  placeholder="Адрес для подключения"></input>
   </form>
)
}

export default Form;