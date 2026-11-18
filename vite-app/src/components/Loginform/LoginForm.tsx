
import { useState, } from 'react'
import { Field,  FieldDescription, FieldGroup, FieldLabel, FieldLegend } from '../ui/field'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '../ui/input-group'
import { Eye, EyeOff, Lock, User } from 'lucide-react'

// This form we will use it to validate inputs by just checking the lengh of the inputs 

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPassowrdError] = useState("");
    const [formData, setFormDta] = useState({
        username: "",
        password: ""
    })

    function togglePasswordVisibility() {
        setShowPassword((prev) => !prev);
    };


    const singleUpdateHandler = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const {id, value} = event.target;
        console.log("The field being updated: ", id)
        setFormDta((prev)=>({...prev, [id]:value}))
 
    }

    

    return (
        <>
            <form className='bg-accent'>
                <FieldGroup className='border bg-card rounded  p-4'>
                    <FieldLegend className=''>Sign In</FieldLegend>
                    <FieldGroup>
                        <Field className=''>
                            <FieldLabel htmlFor='username'>Username</FieldLabel>
                            
                            <InputGroup>
                                <InputGroupInput id='username' placeholder='username' onChange={singleUpdateHandler} value={formData.username}/>
                                <InputGroupAddon align="inline-start">
                                    <User />
                                </InputGroupAddon>
                            </InputGroup>
                            <FieldDescription>{usernameError}</FieldDescription>
                        </Field> 
                        <Field>
                            <FieldLabel htmlFor='password'>Password</FieldLabel>
                            <InputGroup>
                                <InputGroupInput  onChange={singleUpdateHandler} id='password' type={showPassword ? "text" : "password"} placeholder='password' value={formData.password}/>
                                <InputGroupAddon>
                                    <Lock />
                                </InputGroupAddon>
                                <InputGroupButton onClick={togglePasswordVisibility} variant="default" className="cursor-pointer rounded-2xl mr-1">
                                    {showPassword ? (<>
                                        <EyeOff />
                                    </>) : (<>
                                        <Eye />
                                    </>)}
                                </InputGroupButton>
                            </InputGroup>
                            <FieldDescription>{passwordError}</FieldDescription>
                        </Field>
                    </FieldGroup>
                </FieldGroup>

            </form>

        </>
    )
}

export default LoginForm
