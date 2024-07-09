import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/userForm.css'

const UserForm = ({createUser, userUpdate, updateUser, setUserUpdate}) => {

    const {handleSubmit, register, reset} = useForm()

    useEffect(() => {
        reset(userUpdate)
    },[userUpdate])

    const submit = data => {
        if(userUpdate) {
            updateUser(userUpdate.id, data)
            setUserUpdate()
        }else {
          createUser(data)  
        }
        
        reset({
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            birthday: ""
         })
    }

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
    <h2 className='form__title'>{userUpdate ? "Update User" : "Create User"}</h2>
    <label className='form__label' >
        <span className='form__field__name'>Email</span>
        <input className='form__field' {...register('email')} type="email" placeholder='email@gmail.com'/>
    </label>
    <label className='form__label' >
        <span className='form__field__name'>Password</span>
        <input className='form__field' {...register('password')} type="password" />
    </label>
    <label className='form__label' >
        <span className='form__field__name'>Firs name</span>
        <input className='form__field' {...register('first_name')} type="text" />
    </label>
    <label className='form__label' >
        <span className='form__field__name'>Last name</span>
        <input className='form__field' {...register('last_name')} type="text" />
    </label>
    <label className='form__label' >
        <span className='form__field__name'>Birthday</span>
        <input className='form__field' {...register('birthday')} type="date" />
    </label>
    <button className='form__btn' >{userUpdate ? "Update" : "Create"}</button>
</form>

  )
}

export default UserForm