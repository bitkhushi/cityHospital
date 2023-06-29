import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup'





function Test2(props) {
    let formschema = Yup.object({
        name: Yup.string().required('Please enter name').matches(/^[a-zA-Z ]{2,30}$/, 'please enter your first name,middle name,last name').test('message', 'Please enter valid name',
            function (val) {
                let arr = val.split(' ')
                console.log(arr);
                if (arr.length === 3) {
                    return true
                } else {
                    return false
                }

            }),
        email: Yup.string().required('please enter Your email').email('please enter valid email'),
        password: Yup.string().required('please enter Your password').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, ' Must include alphabets, digits and special characters.'),
        mobile: Yup.string().required('please enter Your Number').matches((/^(\+\d{1,3}[- ]?)?\d{10}$/), 'enter valid number'),
        age: Yup.number().min(0).max(150).required('please enter Your Age'),
        gender: Yup.string().required('please select Your gender'),
        country: Yup.string().required('please select Your country'),
        hobbies: Yup.array().min(2).required('please select Your hobbies'),
        address: Yup.string().required('please enter Your address').test('message', 'Maximum 100 word allowed',
            function (val) {
                let add = val.split(" ")
                if (add.length > 100) {
                    return true
                } else {
                    return false
                }
            }
        ),
        // date: Yup.date().max(new Date(), "Enter a Valid Date").required().test('date', 'Date Must be in present and past.',
        //     function () {
        //         let userdate =this.parent.Date
        //         if(userdate > ){

        //         }
        //     }
        // ),
        dob: Yup.string().required('please select Your dob').test('messege', 'Must be in present and past.',
            function (val) {
                let currentDate = new Date();
                console.log(currentDate);
                let pastDate = new Date(val);
                console.log(pastDate);
                if (currentDate >= pastDate) {

                    return true;

                } else {
                    return false;
                }
            }
        ),
        condition: Yup.boolean().oneOf([true]).required('please select Your condition'),

        // condition: Yup.string().required('please select Your condition').test('message', '',
        //     function (val) {
        //         if (val.checked === true) {
        //             return false;
        //         } else {
        //             return true
        //         }
        // }),






    });
    console.log(formschema);

    const formik = useFormik({

        initialValues: {
            name: '',
            email: '',
            password: '',
            mobile: '',
            age: '',
            gender: '',
            country: '',
            hobbies: '',
            address: '',
            dob: '',
            condition: '',

        },
        validationSchema: formschema,
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
        },
    });
    console.log(formik);
    const { handleBlur, handleChange, handleSubmit, touched, errors, values } = formik
    return (
        <div>
            <div style={{ width: '600px' }}>
                <form onSubmit={handleSubmit} method="post">
                    <h2>Application Form</h2>
                    <div className="row">
                        <p>Full Name</p>
                        {
                            errors.name && touched.name ?
                                <span className='error' style={{ color: 'red' }}>{errors.name}</span> : null
                        }


                        <input type="text" name="name" value={values.name} style={{ width: '400px', padding: '0' }} onChange={handleChange}
                            onBlur={handleBlur} />


                    </div>
                    <div className="row">
                        <p>Email Address</p>
                        {
                            errors.email && touched.email ?
                                <span className='error' style={{ color: 'red' }}>{errors.email}</span> : null
                        }

                        <input type="text" name="email" value={values.email} style={{ width: '500px' }} onChange={handleChange}
                            onBlur={handleBlur} />

                    </div>
                    <div className="row">
                        <p>Password</p>
                        {
                            errors.password && touched.password ?
                                <span className='error' style={{ color: 'red' }}>{errors.password}</span> : null
                        }

                        <input type="password" name="password" value={values.password} style={{ width: '500px' }} onChange={handleChange}
                            onBlur={handleBlur} />

                    </div>
                    <div className="row">
                        <p>Mobile Number</p>
                        {
                            errors.mobile && touched.mobile ?
                                <span className='error' style={{ color: 'red' }}>{errors.mobile}</span> : null
                        }

                        <input type="text" name="mobile" value={values.mobile} maxLength={10} style={{ width: '500px' }} onChange={handleChange}
                            onBlur={handleBlur} />

                    </div>
                    <div className="row">
                        <p>Age</p>
                        {
                            errors.age && touched.age ?
                                <span className='error' style={{ color: 'red' }}>{errors.age}</span> : null
                        }

                        <input type="text" name="age" value={values.age} style={{ width: '100px' }} onChange={handleChange}
                            onBlur={handleBlur} />


                    </div>
                    <div className="row">
                        <p>Gender</p>
                        {
                            errors.gender && touched.gender ?
                                <span className='error' style={{ color: 'red' }}>{errors.gender}</span> : null
                        }


                        <div className="form-inline">
                            <p><input type="radio" name="gender" value='male' onChange={handleChange}
                                onBlur={handleBlur} /> Male</p>
                            <p><input type="radio" name="gender" value='female' onChange={handleChange}
                                onBlur={handleBlur} /> Female</p>
                        </div>
                    </div>
                    <div className="row">
                        <p>Country</p>
                        <select name="country" value={values.country} style={{ width: '500px' }} onChange={handleChange}
                            onBlur={handleBlur}>
                            <option value={0}>Select</option>
                            <option value="au">Australia</option>
                            <option value="in">India</option>
                            <option value="us">United States</option>
                            <option value="uk">United Kingdom</option>

                        </select>
                        {
                            errors.country && touched.country ?
                                <span className='error' style={{ color: 'red' }}>{errors.country}</span> : null
                        }


                    </div>

                    <div className="row">
                        <p>Hobbies</p>

                        {
                            errors.hobbies && touched.hobbies ?
                                <span className='error' style={{ color: 'red' }}>{errors.hobbies}</span> : null
                        }



                        <div className="form-inline">
                            <p><input type="checkbox" name="hobbies" value='sports' onChange={handleChange}
                                onBlur={handleBlur} /> Sports</p>
                            <p><input type="checkbox" name="hobbies" value='movies' onChange={handleChange}
                                onBlur={handleBlur} /> Movies</p>
                            <p><input type="checkbox" name="hobbies" value='music' onChange={handleChange}
                                onBlur={handleBlur} /> Music</p>
                        </div>
                    </div>
                    <div className="row">
                        <p>Address</p>
                        <input type="text" name="address" value={values.address} style={{ width: '145px' }} onChange={handleChange}
                            onBlur={handleBlur} />
                        {
                            errors.address && touched.address ?
                                <span className='error' style={{ color: 'red' }}>{errors.address}</span> : null
                        }

                    </div>
                    <div className="row">
                        <p>Date of Birth</p>
                        <input type="date" name="dob" value={values.dob} style={{ width: '145px' }} onChange={handleChange}
                            onBlur={handleBlur} />
                        {
                            errors.dob && touched.dob ?
                                <span className='error' style={{ color: 'red' }}>{errors.dob}</span> : null
                        }

                    </div>
                    <br />
                    <div className="row">
                        {
                            errors.condition && touched.condition ?
                                <span className='error' style={{ color: 'red' }}>{errors.condition}</span> : null
                        }

                        <p><input type="checkbox" name="condition" value={values.condition} onChange={handleChange}
                            onBlur={handleBlur} />Terms &amp; Condition</p>
                    </div>

                    <div className="row">
                        <input type="submit" style={{ width: '200px' }} />
                    </div>
                </form>



            </div>
        </div>
    );
}

export default Test2;