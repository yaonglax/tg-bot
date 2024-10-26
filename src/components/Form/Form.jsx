import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Form.css';
import ModalWindow from "../ModalWIndow/ModalWindow";


const Form = ({ isSignIn }) => {

   const [fullName, setFullName] = useState('')
   const [phone, setPhone] = useState('')
   const [email, setEmail] = useState('')
   const [address, setAddress] = useState('')
   const [contract, setContract] = useState('')
   const [isContractVerified, setContractVerified] = useState(false)
   const [isModalOpen, setIsModalOpen] = useState(false)

   const navigate = useNavigate();
   const toHome = () => {
      navigate('/')
   }

   const validateForm = () => {
      if (isSignIn) {
         if (contract.length) {
            setContractVerified(true)
            setContract('')
         }
      }
      else {
         if (fullName.length && phone.length && email.length && address.length) {
            setIsModalOpen(true)
            setTimeout(() => {
               toHome()
            }, 2000)
         }
      }


   }

   return (
      <>
         <div className="form-wrapper">
            <form className="form">
               <button className="form__button" type="button" onClick={toHome}>Назад</button>

               {isSignIn ? (
                  !isContractVerified ? (
                     <>
                        <h1>Форма входа</h1>
                        <input
                           type="number"
                           className="form__input input"
                           placeholder="Номер договора"
                           onChange={(e) => setContract(e.target.value)}
                        />
                        <button type="button" onClick={validateForm}>Дальше</button>
                     </>
                  ) : (
                     <>
                        <h1>Подтверждение договора</h1>
                        <input
                           type="text"
                           className="form__input input"
                           placeholder="Код подтверждения"

                        />
                        <button type="button" onClick={() => alert("Код подтвержден!")}>Подтвердить</button>
                     </>
                  )
               ) : (
                  <>
                     <h1>Форма регистрации</h1>
                     <input
                        type="text"
                        className="form__input input"
                        placeholder="ФИО"
                        onChange={(e) => setFullName(e.target.value)}
                     />
                     <input
                        type="tel"
                        className="form__input input"
                        placeholder="Телефон"
                        onChange={(e) => setPhone(e.target.value)}
                     />
                     <input
                        type="email"
                        className="form__input input"
                        placeholder="Электронная почта"
                        onChange={(e) => setEmail(e.target.value)}
                     />
                     <input
                        type="text"
                        className="form__input input"
                        placeholder="Адрес для подключения"
                        onChange={(e) => setAddress(e.target.value)}
                     />
                     <button type="button" onClick={validateForm}>Подать заявку</button>
                  </>
               )}
            </form>
         </div>
         {isModalOpen && <ModalWindow />}
      </>
   )

}

export default Form;