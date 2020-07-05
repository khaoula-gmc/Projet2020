import React from 'react'
import {Formik, yupToFormErrors, validateYupSchema} from 'formik'
import * as Yup from 'yup'
import { Button, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

function Login() {
    const handleFormSubmit=(values)=>{
            console.log(values)
    }
    return (
        <div style={{padding:20}}>
           <h3>Se Connecter</h3> 
           <hr/>
           <Formik
                initialValues={{email:"", password:""}}
                onSubmit={handleFormSubmit} 
                validationSchema={Yup.object().shape({
                    email:Yup
                        .string()//we can add errors here
                        .email()
                        .required(),
                    password:Yup
                        .string()
                        .min(6)
                        .required()
                })}
                render={({
                    handleChange,
                    handleSubmit,
                    isValid,
                    isSubmitting,
                    handleBlur,
                    errors,
                    touched
                })=>(
                    <div>
                        <FormGroup>
                            <Label for="Email">E-mail</Label>
                            <Input type="email" 
                                   name="email" 
                                   id="Email" 
                                   invalid={errors.email&&touched.email}
                                   placeholder="e-mail" 
                                   onChange={handleChange}
                                   onBlur={handleBlur}/>
                            {errors.email&&touched.email?<FormFeedback>{errors.email}</FormFeedback>:null}
                        </FormGroup>
                        <FormGroup>
                            <Label for="Password">Password</Label>
                            <Input type="password" 
                                   name="password" 
                                   id="Password" 
                                   invalid={errors.password&&touched.password}
                                   placeholder="password" 
                                   onChange={handleChange}
                                   onBlur={handleBlur}/>
                            {errors.password&&touched.password?<FormFeedback>{errors.password}</FormFeedback>:null}
                        </FormGroup>
                        <Button color='primary' block onClick={handleSubmit} disabled={!isValid||isSubmitting}>Submit</Button>
                    </div>
                )}
           />

                
            
        </div>
    )
}

export {Login}
