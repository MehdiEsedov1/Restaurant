import React from 'react';
import logo from '../../Assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function LogIn() {

  const formik = useFormik({
    initialValues: {
      nickname: '',
      password: '',
      email: '',
      acceptTerms: false
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
      email: Yup.string()
        .email("Invalid E-mail")
        .required("Required"),
      acceptTerms: Yup.bool()
        .oneOf([true], "Must accept terms and conditions")
    })
  })

  const navigator = useNavigate();

  return (
    <div className='sign-up'>
      <form onSubmit={formik.handleSubmit}>
        <img src={logo} alt="Hamburger" />
        <div className='sign-up-inputs-container'>
          <input type="text" id='nickname' placeholder='Nickname' onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.nickname && formik.touched.nickname ? <Typography style={{ color: 'red' }}>{formik.errors.nickname}</Typography> : null}

          <input type="email" id='email' placeholder='E-mail' onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.email && formik.touched.email ? <Typography style={{ color: 'red' }}>{formik.errors.email}</Typography> : null}

          <input type="password" id='password' placeholder='Password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.password && formik.touched.password ? <Typography style={{ color: 'red' }}>{formik.errors.password}</Typography> : null}
        </div>

        <div className='sign-up-checkbox-container'>
          <input type="checkbox" id='acceptTerms' onChange={formik.handleChange} onBlur={formik.handleBlur} />
          <Typography>I accept terms and conditions</Typography>
          {formik.errors.acceptTerms && formik.touched.acceptTerms ? <Typography style={{ color: 'red' }}>{formik.errors.acceptTerms}</Typography> : null}
        </div>
        <div className='sign-up-buttons-container'>
          <Button onClick={() => { navigator('/signup') }}><Typography variant='h5'>Sign up</Typography></Button>
          <Button type='submit'><Typography variant='h5'>Log in</Typography></Button>
        </div>
      </form>
    </div>
  )
}