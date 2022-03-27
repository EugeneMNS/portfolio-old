import React  from "react";
import s from "./Contacts.module.css";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.contactsContainer}>
                <h2>Contacts</h2>
                <form className={s.contactsForm}>
                    <input className={s.input}/>
                    <input className={s.input}/>
                    <textarea className={s.textarea}/>
                </form>
                <button className={s.contactsButton}> SEND</button>
            </div>
        </div>
    )
}
