import React, { useState } from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button'; 

const EmailInput = () => {
    const [erroMessage, setErrorMessage] = useState<string | null >(null)

    function validateEmail(event: React.ChangeEvent<HTMLInputElement>){
        const enteredEmail = event.target.value.trim();
        if(enteredEmail === ""){
            setErrorMessage("Email filed is required")
        }else if(!enteredEmail.includes("@")){
            setErrorMessage("You have entered an invalid email")
        }else{
            setErrorMessage(null)
        }
    }
  return (
    <>
      <Input placeholder='Enter Your Email' onBlur={validateEmail} />
      {erroMessage && (
        <div className='flex gap-3'>
        <p className='text-red-800 text-sm '>{erroMessage}</p>
        <Button onClick={() => setErrorMessage(null)} variant='destructive' size='icon-sm' className="hover:cursor-pointer"> X  </Button>
        </div>
      )}
    </>
  )
}

export default EmailInput
