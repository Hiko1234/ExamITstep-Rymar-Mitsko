import React, { useState } from 'react'
// import styles
import s from "./Request.module.scss"
// import img 
import Image from 'next/image';
import icon from "../../assets/img/homePage/nav/declaration.png"

const RequestItem = () => {
    const [checkbox, setCheckbox] = useState<boolean>(false);
    const [popup, setPopup] = useState<boolean>(false);

    return (
        <>
            <form className={s.requestForm}>
                <textarea className={s.requestForm__textarea} placeholder='Ваше повідомлення...'></textarea>
            </form>
            <div className={s.requestForm__btn}>
                <div className={s.requestForm__btn_checkbox}><input type="checkbox" onClick={() => {
                    setCheckbox(true);
                }} /><label>Я хочу отримати офіційну відповідь на email</label></div>
                <button className={s.requestForm__btn_button} onClick={() => {
                    setPopup(true);
                }}>НАДІСЛАТИ</button>
            </div>
            {popup && (
                <div className={s.popup}>
                    <div className={s.popup__box} onClick={() => {
                        setPopup(false)
                    }}>
                        <div className={s.popup__box_container}>
                            <Image className={s.popup__box_img} src={icon} alt="Popup" width={35} height={35} />
                            <p className={s.popup__box_text}>Ваше повідомлення відправлене</p>
                            <button className={s.popup__box_btn} onClick={() => {
                                setPopup(false)
                            }}>Закрити</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default RequestItem