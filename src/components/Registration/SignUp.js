import React from 'react';
import logo from '../../Assets/logo.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function SignUp() {
    const navigator = useNavigate();

    const formik = useFormik({
        initialValues: {
            nickname: '',
            email: '',
            password: '',
            passwordAgain: '',
            acceptTerms: false,
        },
        onSubmit: () => {
            console.log(formik.values);
            const userInfos = JSON.stringify(formik.values);
            localStorage.setItem('userInfos', userInfos);

            navigator('/');
        },
        validationSchema: Yup.object({
            nickname: Yup.string()
                .max(10, "Must be 10 characters maximum")
                .required("Required"),
            password: Yup.string()
                .min(5, "Must be 5 characters minimum")
                .required("Required"),
            passwordAgain: Yup.string()
                .min(5, "Must be 5 characters minimum")
                .oneOf([Yup.ref('password')], "Passwords must match")
                .required("Required"),
            email: Yup.string()
                .email("Invalid E-mail")
                .required("Required"),
            acceptTerms: Yup.bool()
                .oneOf([true], "Must accept terms and conditions")
        }),
    });

    return (
        <div className='sign-up'>
            <form onSubmit={formik.handleSubmit}>
                <img src={logo} alt="Hamburger" />
                <div className='sign-up-inputs-container'>
                    <input type="text" id='nickname' placeholder='Nickname' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.nickname && formik.touched.nickname ? <Typography style={{ color: 'red' }}>{formik.errors.nickname}</Typography> : null}

                    <input type="e-mail" id='email' placeholder='E-mail' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.email && formik.touched.email ? <Typography style={{ color: 'red' }}>{formik.errors.email}</Typography> : null}

                    <input type="password" id='password' placeholder='Password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.password && formik.touched.password ? <Typography style={{ color: 'red' }}>{formik.errors.password}</Typography> : null}

                    <input type="password" id='passwordAgain' placeholder='Again password' onChange={formik.handleChange} />
                    {formik.errors.passwordAgain && formik.touched.passwordAgain ? <Typography style={{ color: 'red' }}>{formik.errors.passwordAgain}</Typography> : null}
                </div>
                <div className='sign-up-checkbox-container'>
                    <input type="checkbox" id='acceptTerms' checked={formik.values.acceptTerms} onChange={formik.handleChange} />
                    <Typography>I accept terms and conditions</Typography>
                    {formik.errors.acceptTerms && formik.touched.acceptTerms ? <Typography style={{ color: 'red' }}>{formik.errors.acceptTerms}</Typography> : null}
                </div>
                <div className='sign-up-buttons-container'>
                    <Button type='submit'><Typography variant='h5'>Sign up</Typography></Button>
                    <Button onClick={(e) => { navigator('/login'); e.preventDefault() }}><Typography variant='h5'>Log in</Typography></Button>
                </div>
            </form>
        </div>
    )
}