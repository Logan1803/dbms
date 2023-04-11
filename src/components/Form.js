import React from 'react'
import {  useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data);

  return (
    <section>
        <div className='register'>
            <div className='col-1'>
                <h2>Sign in</h2>
                <span>Register and enjoy the service</span>
                <form id='form1' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type='text' {...register("username")} placeholder='username'></input>
                    <input type='text' {...register("password")} placeholder='password'></input>
                    <input type='text' {...register("confirmpwd")} placeholder='confirm password'></input>
                    <input type='text' {...register("mobile")} placeholder='mobile number'></input>

                    <button className='btn'>Sign in</button>
                </form>
            </div>
            <div className='col-2'>
                <img src='https://raw.githubusercontent.com/akashyap2013/React_Form_Hook_Registration_Form/master/src/assets/img1.jpg' alt='picture'></img>
            </div>
        </div>
    </section>
  )
}
