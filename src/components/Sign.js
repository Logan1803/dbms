import React from 'react'


export default function Sign() {
  return (
    <section>
        <div className='signup'>
			<div className='sect-1'>
				<h2>Sign Up</h2>
				<span>Join and experience the wonder of reading!</span>
				<form id='form' className='flex flex-col'>
					<div className='fields'>
						<input type ='text' placeholder='Name'></input>
						<input type ='text' placeholder='Person_id'></input>
					</div>
					<div className='fields'>
						<input type ='text' placeholder='Email'></input>
						<input type ='text' placeholder='Phone_number'></input>
					</div>
					<div className='fields'>
						<input type ='text' placeholder='Username'></input>
						<input type ='text' placeholder='Password'></input>
					</div>
					<button className='btn'>Register</button>
				</form>
			</div>
			<div className='sect-2'>
			<img src = 'https://raw.githubusercontent.com/akashyap2013/React_Form_Hook_Registration_Form/master/src/assets/img1.jpg' alt='lala'></img>
			</div>
        </div> 
    </section>
  )
}
