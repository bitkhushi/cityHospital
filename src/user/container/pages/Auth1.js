import React, { useState } from 'react';

function Auth1(props) {

    const [authType, setAuthType] = useState('Login')
    const [reset, setReset] = useState(false)
    const handleLogData =(val)=>{
        console.log(val);
    }
   
    return (
        <div>
            <form onSubmit={}>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">

                        {reset ? <h2>Reset Password</h2> :
                            authType === 'Login' ? <h2>Login</h2> : <h2>Sign Up</h2>}

                        {/* {
                            authType === 'Login' ? <h2>Login</h2> :
                                authType === 'SignUp' ? <h2>Sign Up</h2> : <h2>Reset Password</h2>

                        } */}
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <div className="php-email-form">
                        {
                            authType === 'SignUp' ? <div className="col-md-7 form-group mt-3 mt-md-0" style={{ margin: '0 auto' }}>
                                <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" data-rule="name" data-msg="Please enter a Your Name" />
                                <div className="validate" />
                            </div> : null
                        }

                        {/* {
                            authType === 'Login' || authType === 'forget' ? null :
                                <div className="col-md-7 form-group mt-3 mt-md-0" style={{ margin: '0 auto' }}>
                                    <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" data-rule="name" data-msg="Please enter a Your Name" />
                                    <div className="validate" />
                                </div>
                        

                        } */}
                        <div className="col-md-7 form-group mt-3 mt-md-0" style={{ margin: '0 auto' }}>
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                        </div>

                        {

                            !reset?<div className="col-md-7 form-group mt-3 mt-md-0" style={{ margin: '0 auto' }}>
                            <input type="password" className="form-control" name="phone" id="phone" placeholder="Password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={(e) => handleLogData(e.target.value)}/>
                            <div className="validate" />

                        </div>:null
                            // authType !== 'forget' ?
                            //     <div className="col-md-7 form-group mt-3 mt-md-0" style={{ margin: '0 auto' }}>
                            //         <input type="password" className="form-control" name="phone" id="phone" placeholder="Password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            //         <div className="validate" />

                            //     </div> :
                            //     null
                        }



                        {
                            reset ? <div className="text-center"><button type="submit">submit</button></div>:
                            authType === 'Login'?
                            <div className="text-center"><button type="submit">Login</button></div>:
                            <div className="text-center"><button type="submit">Sign Up</button></div>
                            // authType === 'Login' ? <div className="text-center"><button type="submit">Login</button></div> :
                            //     authType === 'SignUp' ? <div className="text-center"><button type="submit">Sign Up</button></div> :
                            //         <div className="text-center"><button type="submit">submit</button></div>

                        }
                        {
                            authType === 'Login' ?
                                <>


                                    <span>Already have an Account<a href="#" onClick={() => { setAuthType('SignUp'); setReset(false) }}>SignUp</a></span>
                                    <br />
                                    <a href="#" onClick={() => { setAuthType('forget'); setReset(true) }}>forgot password?</a>
                                </> :
                                <span>Create a New Account?<a href="#" onClick={() => { setAuthType('Login'); setReset(false) }}>Login</a></span>


                        }



                    </div>
                </div>
            </section>
            </form>

        </div>
    );
}

export default Auth1;