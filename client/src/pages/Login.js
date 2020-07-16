import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, FormGroup, Label, Input, FormFeedback, Alert } from 'reactstrap'

import * as Yup from 'yup'
import { Formik } from 'formik'

import { signIn } from '../actions'

function Login() {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    let history = useHistory();

    const handleFormSubmit = (values, bag) => {
        dispatch(signIn(values));
        bag.setSubmitting(false);
    };
    
    if(auth.isAuth) {
        history.push("/")
    }

    const errorLogin = () => {
        if(auth.error)
            return <Alert color="danger">{auth.error}</Alert>
    }

    return (
        <div className="form">
            <h3><i className="fas fa-sign-in-alt" style={{color: "rgb(0, 123, 255)"}} /> Se connecter</h3> 
            <hr/>

            {errorLogin()}

            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit = {handleFormSubmit} 
                validationSchema = {Yup.object().shape({
                    email:Yup
                        .string() //we can add errors here
                        .email()
                        .required(),
                    password:Yup
                        .string()
                        .min(6)
                        .required()
                })}
            >           
                    {({
                        handleChange,
                        handleSubmit,
                        isValid,
                        isSubmitting,
                        handleBlur,
                        errors,
                        touched
                    }) => (
                        <div>
                            <FormGroup>
                                <Label for = "Email">E-mail</Label>
                                <Input 
                                    valid = {!isValid.email && touched.email}
                                    type = "email" 
                                    name = "email" 
                                    id = "Email" 
                                    invalid = {errors.email && touched.email}
                                    placeholder = "e-mail" 
                                    onChange = {handleChange}
                                    onBlur = {handleBlur}
                                />
                                {errors.email && touched.email ? <FormFeedback>{errors.email}</FormFeedback> : null}
                            </FormGroup>

                            <FormGroup>
                                <Label for = "Password">Password</Label>
                                <Input 
                                    valid = {!isValid.password && touched.password}
                                    type = "password" 
                                    name = "password" 
                                    id = "Password" 
                                    invalid = {errors.password && touched.password}
                                    placeholder = "password" 
                                    onChange = {handleChange}
                                    onBlur = {handleBlur}
                                />
                                {errors.password && touched.password ? <FormFeedback>{errors.password}</FormFeedback> : null}
                            </FormGroup>

                            <Button color = 'primary' block onClick = {handleSubmit} disabled={!isValid || isSubmitting}>Se connecter</Button>
                        </div>
                    )}
                </Formik>

            <Link to="/signup"> Pas de Compte? Créer un compte maintenant</Link>
        </div>
    )
}

export {Login}
