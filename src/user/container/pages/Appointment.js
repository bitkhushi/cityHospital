import { useFormik } from 'formik';
import * as Yup from 'yup'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Addapt, getapt } from '../../../redux/slice/AptSlice';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function Appointment(props) {
    const [value, setValue] = React.useState(0);

    const apt = useSelector(state => state.apt);

    console.log(apt);

    const handleChange1 = (event, newValue) => {
        setValue(newValue);
    };
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getapt());
    }, []);


    let appschema = Yup.object({
        name: Yup.string().required('Please enter a name'),
        email: Yup.string().required('Please enter an email').email('Please enter a valid email'),
        phone: Yup.string().required('Please enter a phone number'),
        date: Yup.date().required('Please enter a date'),
        department: Yup.string().required('Please enter a department name'),
        message: Yup.string().required('Please enter a message'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: '',
        },
        validationSchema: appschema,
        enableReinitialize: true,
        onSubmit: (values, action) => {
            dispatch(Addapt(values))
            setValue(1);
            dispatch(getapt());
            action.resetForm();
        },
    });

    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = formik

    console.log(value);

    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <Tabs value={value} onChange={handleChange1} aria-label="basic tabs example">
                        <Tab label="Make an Appointment" />
                        <Tab label="My Appointments" />
                    </Tabs>
                    {
                        value === 0 ? <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e); }} role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    // errorText={errors.name && touched.name ? errors.name : ''} 
                                    />
                                    {
                                        errors.name && touched.name ?
                                            <span className='error' style={{ color: 'red' }}>{errors.name}</span> : null
                                    }
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    // errorText={errors.email && touched.email ? errors.email : ''} 
                                    />
                                    <div className="validate" />
                                    {
                                        errors.email && touched.email ?
                                            <span className='error' style={{ color: 'red' }}>{errors.email}</span> : null
                                    }
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                                        value={values.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    // errorText={errors.phone && touched.phone ? errors.phone : ''} 
                                    />
                                    <div className="validate" />
                                    {
                                        errors.phone && touched.phone ?
                                            <span className='error' style={{ color: 'red' }}>{errors.phone}</span> : null
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <input type="date" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                                        value={values.date}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    // errorText={errors.date && touched.date ? errors.date : ''} 
                                    />
                                    <div className="validate" />
                                    {
                                        errors.date && touched.date ?
                                            <span className='error' style={{ color: 'red' }}>{errors.date}</span> : null
                                    }
                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <select name="department" id="department" className="form-select"
                                        value={values.department}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    // errorText={errors.department && touched.department ? errors.department : ''}
                                    >
                                        <option value>Select Department</option>
                                        <option value="Department 1">Department 1</option>
                                        <option value="Department 2">Department 2</option>
                                        <option value="Department 3">Department 3</option>
                                    </select>
                                    <div className="validate" />
                                    {
                                        errors.department && touched.department ?
                                            <span className='error' style={{ color: 'red' }}>{errors.department}</span> : null
                                    }
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""}
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                // errorText={errors.message && touched.message ? errors.message : ''} 
                                />
                                <div className="validate" />
                                {
                                    errors.message && touched.message ?
                                        <span className='error' style={{ color: 'red' }}>{errors.message}</span> : null
                                }
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Make an Appointment</button></div>
                        </form> :
                            <>
                                <h2>My Appointments</h2>
                                <div className='row'>

                                    {
                                        apt.apt.map((v) => {
                                            return (
                                                <div className='col-md-3'>
                                                    {v.name}
                                                    {v.date}
                                                    <button>Edit</button>
                                                    <button>Delete</button>
                                                </div>
                                            )
                                        })
                                    }


                                </div>

                            </>
                    }
                </div>
            </section>
        </div>

    );
}

export default Appointment;