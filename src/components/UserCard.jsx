import React, { useState } from 'react'
import './styles/userCard.css'

const UserCard = ({ user, deleteUser, setUserUpdate }) => {

    const [deleteCard, setDeleteCard] = useState(true)

    const handelDelate = () => {
        setDeleteCard(false)
    }

    const handelUpdate = () => {
        setUserUpdate(user)
    }

    const handelAccept = () => {
        deleteUser(user.id)
    }

    const handelCancel = () => {
        setDeleteCard(true)
    }

    return (
        <div>
            <article className='userCard__article'>
                <h2 className='userCard__h2'>{user.first_name} {user.last_name}</h2>
                <hr />
                <ul className='userCard__ul'>
                    <li className='userCard__li'><span className='userCard__span'>Email:</span><span className='userCard__li__span'>{user.email}</span></li>
                    <li className='userCard__li'><span className='userCard__span'>Birthday:</span><span className='userCard__li__span'>{user.birthday}</span></li>
                </ul>
                <hr />
                <button className='userCard__btn1' onClick={handelDelate}><i className='bx bx-trash' ></i></button>
                <button className='userCard__btn2' onClick={handelUpdate}><i className='bx bx-edit'></i></button>
            </article>
            <div className={`userCard__delete ${deleteCard && 'userCard__cancel'}`}>
                <div className='userCard__delete__container'>
                  <h2 className='userCard__message'>Are you sure you want to delete?</h2>
                <div className='userCard__btn'>
                    <button className='userCard__btn__accept' onClick={handelAccept}>Accept</button>
                    <button className='userCard__btn__cancel' onClick={handelCancel}>Cancel</button>
                </div>  
                </div>
                

            </div>
        </div>

    )
}

export default UserCard