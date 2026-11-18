import React, { useState } from 'react'
import { Field, FieldDescription, FieldLabel} from '../ui/field'
import { Input } from '../ui/input'
 

const Counter = () => {
    const [enterWord, setEntered] = useState("");
    function counterFunc(event: React.ChangeEvent<HTMLInputElement>){
        setEntered(event.target.value)
    }

    const len = enterWord.length;
  return (
    <>
      <Field>
        <FieldLabel>Enter a word to count the characters</FieldLabel>
        <Input type='text' onChange={counterFunc} value={enterWord} placeholder='enter any word to be counted' />
        <FieldDescription>You have entered {len}   words</FieldDescription>
      </Field>
    </>
  )
}

export default Counter
