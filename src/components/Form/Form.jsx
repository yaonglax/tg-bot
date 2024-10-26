import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Form.css';
import ModalWindow from "../ModalWIndow/ModalWindow";
import Button from "../Button/Button";
import Input from "../Input/Input";


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
               <button className="form__button" type="button" onClick={toHome}>	&lt;- Назад</button>

               {isSignIn ? (
                  !isContractVerified ? (
                     <>
                        <h1>Форма входа</h1>
                        <Input
                           type="number"
                           placeholder={"Номер договора"}
                           onChange={(e) => setContract(e.target.value)}
                        />
                        <Button onClick={validateForm} type='button'>Дальше</Button>
                     </>
                  ) : (
                     <>
                        <h1>Подтверждение договора</h1>
                        <Input
                           type="text"
                           className="form__input input"
                           placeholder="Код подтверждения"

                        />
                        <Button type="button" onClick={() => alert("Код подтвержден!")}>Подтвердить</Button>
                     </>
                  )
               ) : (
                  <>
                     <h1>Форма регистрации</h1>
                     <Input
                        type="text"
                        className="form__input input"
                        placeholder="ФИО"
                        onChange={(e) => setFullName(e.target.value)}
                     />
                     <Input
                        type="tel"
                        className="form__input input"
                        placeholder="Телефон"
                        onChange={(e) => setPhone(e.target.value)}
                     />
                     <Input
                        type="email"
                        className="form__input input"
                        placeholder="Электронная почта"
                        onChange={(e) => setEmail(e.target.value)}
                     />
                     <Input
                        type="text"
                        className="form__input input"
                        placeholder="Адрес для подключения"
                        onChange={(e) => setAddress(e.target.value)}
                     />
                     <Button type={'button'} onClick={validateForm}>Подать заявку</Button>
                  </>
               )}
            </form>
         </div>
         {isModalOpen && <ModalWindow />}
      </>
   )

}

export default Form;