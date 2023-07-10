import React, { useEffect, useState } from 'react';
import * as Yup from 'yup'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Buttons/Button';
import Input from '../UI/InputBox/Input';

import { Para } from '../UI/SubTitle/SubTitle.style';
import { Heading2 } from '../UI/Headings/Heading.style';



function Auth(props) {
    const [authType, setAuthType] = useState('Login')
    const [data, setData] = useState([])
    const navigate = useNavigate()


    const handleLogin = () => {
        let data = localStorage.setItem("logindata", 'true')

        navigate('/')
    }
    const handleRegister = () => {

    }
    const handleForget = () => {

    }
    
    let authobj = {}, initval = {}
    if (authType === 'Login') {
        authobj = {
            pass: Yup.string().required('please enter a password'),
            email: Yup.string().required('please enter a email').email('please enter valid email')

        }
        initval = {
            pass: '',
            email: ''
        }

    } else if (authType === 'SignUp') {
        authobj = {
            name: Yup.string().required('please enter a name'),
            pass: Yup.string().required('please enter a password'),
            email: Yup.string().required('please enter a email').email('please enter valid email')


        }
        initval = {
            name: '',
            pass: '',
            email: ''
        }
    } else {
        authobj = {
            email: Yup.string().required('please enter a email').email('please enter valid email')
        }
        initval = {
            email: ''
        }
    }
    let authschema = Yup.object(authobj)


    const formik = useFormik({
        initialValues: initval,
        validationSchema: authschema,
        enableReinitialize: true,
        onSubmit: (values, action) => {
            action.resetForm()

            if (authType === 'Login') {
                handleLogin()
            } else if (authType === 'SignUp') {
                handleRegister()
            } else if (authType === 'forget') {
                handleForget()
            }

        },
    })

    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = formik
    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">

                        {
                            authType === 'Login' ? <Heading2>Login</Heading2> :
                                authType === 'SignUp' ? <Heading2>Sign Up</Heading2> : <Heading2>Reset Password</Heading2>

                        }
                        <Para>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</Para>
                    </div>
                    <form onSubmit={handleSubmit} className="php-email-form">
                        {
                            authType === 'Login' || authType === 'forget' ? null :
                                <div className="col-md-7 form-group mt-3 mt-md-0" style={{ margin: '0 auto' }}>
                                    <Input type="text" className="form-control" name="name" id="name" placeholder="Your Name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errorText={errors.name && touched.name ? errors.name : ''}
                                        data-rule="name" data-msg="Please enter a Your Name" />
                                    <div className="validate" />
                                    {/* {
                                        errors.name && touched.name ?
                                            <span className='error' style={{ color: 'red' }}>{errors.name}</span> : null
                                    } */}
                                </div>

                        }
                        <div className="col-md-7 form-group mt-3 mt-md-0" style={{ margin: '0 auto' }}>
                            <Input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                errorText={errors.email && touched.email ? errors.email : ''}
                                data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                            {/* {
                                errors.email && touched.email ?
                                    <span className='error' style={{ color: 'red' }}>{errors.email}</span> : null
                            }  */}
                        </div>

                        {
                            authType !== 'forget' ?
                                <div className="col-md-7 form-group mt-3 mt-md-0" style={{ margin: '0 auto' }}>
                                    <Input type="password" className="form-control" name="pass" id="pass" placeholder="Password"
                                        value={values.pass}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errorText={errors.pass && touched.pass ? errors.pass : ''}

                                        data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    {/* <div className="validate" />
                                    {
                                        errors.pass && touched.pass ?
                                            <span className='error' style={{ color: 'red' }}>{errors.pass}</span> : null
                                    } */}

                                </div> :
                                null
                        }



                        {
                            authType === 'Login' ? <div className="text-center"> <Button type='primary' disabledbtn={true}>Login</Button>  </div> :
                                authType === 'SignUp' ? <div className="text-center"><Button type='secondary'>Sign Up</Button></div> :
                                    <div className="text-center"><Button type='outlined'>Submit</Button></div>

                        }
                        {
                            authType === 'Login' ?
                                <>


                                    <span>Already have an Account<a href="#" onClick={() => setAuthType('SignUp')}>SignUp</a></span>
                                    <br />
                                    <a href="#" onClick={() => setAuthType('forget')}>forgot password?</a>
                                </> :
                                <span>Create a New Account?<a href="#" onClick={() => setAuthType('Login')}>Login</a></span>


                        }



                    </form>
                </div>
            </section>

        </div>
    );
}

export default Auth;