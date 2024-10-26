import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Form.css';
import ModalWindow from "../ModalWIndow/ModalWindow";


const Form = () => {

const [fullName, setFullName] = useState('')
const [phone, setPhone] = useState('')
const [email, setEmail] = useState('')
const [address, setAddress] = useState('')
const [isModalOpen, setIsModalOpen] = useState(false)
   
const navigate = useNavigate();
const toHome = () => {
   navigate('/')
 }

 const validateForm = () => {
if (fullName.length && phone.length && email.length && address.length) {
setIsModalOpen(true)
setTimeout(() => {
toHome()
}, 2000)
}
 }
 
return (
   <>
   <form className="form">
      <button className="form__button" type="button" onClick={toHome}>Назад</button>
    <h1>Форма регистрации</h1>
    <input type="text" className="form__input input" placeholder="ФИО" onChange={(e) => setFullName(e.target.value)}></input>
    <input type="tel" className="form__input input"  placeholder="Телефон" onChange={(e) => setPhone(e.target.value)}></input>
    <input type="email" className="form__input input"  placeholder="Электронная почта" onChange={(e) => setEmail(e.target.value)}></input>
    <input type="text" className="form__input input"  placeholder="Адрес для подключения" onChange={(e) => setAddress(e.target.value)}></input>
    <button type="button" onClick={validateForm}>Подать заявку</button>

   </form>
    {isModalOpen && <ModalWindow />}
    </>
)

}

export default Form;