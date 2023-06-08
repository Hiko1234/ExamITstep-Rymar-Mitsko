import React, { useState } from 'react'
// import styles
import s from "./Request.module.scss"
// import img 
import Image from 'next/image';
import icon from "../../assets/img/departmentPage/department1.png"

const RequestItem = () => {
    const [checkbox, setCheckbox] = useState<boolean>(false);
    const [popup, setPopup] = useState<boolean>(false);
    const [textarea, setTextarea] = useState("");

    return (
        <>
            <form className={s.requestForm}>
                <textarea className={s.requestForm__textarea} placeholder='Ваше повідомлення...' onChange={(e) => {
                    setTextarea(e.target.value);
                }}></textarea>
            </form>
            <div className={s.requestForm__btn}>
                <label className={s.requestForm__btn_checkbox}>
                    <input
                        className={s.realCheckbox}
                        type="checkbox"
                        onChange={() => setCheckbox(!checkbox)}
                    />
                    <span className={s.customCheckbox}></span>
                    <span>Я хочу отримати офіційну відповідь на email</span>
                </label>
                <button className={s.requestForm__btn_button} onClick={() => {
                    setPopup(true)
                }}>НАДІСЛАТИ</button>
            </div>
            {textarea.length > 0 ? (
                <>
                    {popup && (
                        <div className={s.popup}>
                            <div className={s.popup__box}>
                                <div className={s.popup__box_container}>
                                    <Image className={s.popup__box_img} src={icon} alt="Popup" width={100} height={100} />
                                    <p className={s.popup__box_text}>Ваше повідомлення відправлене</p>
                                    {checkbox ? (
                                        <p className={s.popup__box_text}>Вам прийде відповідь на email</p>
                                    ) : null}
                                    <button className={s.popup__box_btn} onClick={() => setPopup(false)}>Закрити</button>
                                </div>
                            </div>
                            <div className={s.popup__bg} onClick={() => setPopup(false)}></div>
                        </div>
                    )}
                </>
            ) : (
                <>
                    {popup && (
                        <div className={s.popup}>
                            <div className={s.popup__box}>
                                <div className={s.popup__box_container}>
                                    <Image className={s.popup__box_img} src={icon} alt="Popup" width={100} height={100} />
                                    <p className={s.popup__box_text}>Будь ласка, введіть дані в поле вводу</p>
                                    <button className={s.popup__box_btn} onClick={() => setPopup(false)}>Закрити</button>
                                </div>
                            </div>
                            <div className={s.popup__bg} onClick={() => setPopup(false)}></div>
                        </div>
                    )}
                </>
            )}
        </>
    );
};


export default RequestItem