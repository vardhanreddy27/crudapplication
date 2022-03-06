import React, { useState } from 'react';
import Axios  from 'axios';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import { useForm } from 'react-hook-form'
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Container, Form, Button } from 'react-bootstrap';
import { useAppDispatch } from './app/hooks';

function Signup()
{
const [name,setName]=useState('');
const [password,setPassword]=useState('');
const [email,setEmail]=useState('');
const sform =()=>{
Axios.post("https://gentle-wildwood-96779.herokuapp.com/sinsert",{name:name,email:email,password:password,});

};

const formSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is mandatory')
    .min(3, 'Password must be at 3 char long'),
  confirmPwd: Yup.string()
    .oneOf([Yup.ref('password')], 'Password does not match'),
})
const formOptions = { resolver: yupResolver(formSchema) }
const { register, handleSubmit, reset, formState } = useForm(formOptions)
const { errors } = formState

  async function onSubmit(data: any) {
  console.log(JSON.stringify(data, null, 4))
  alert('registred');
  
}
  return (  
  
    
      <Container className="p-5 col-lg-5">  <Link className="color" to="/Login"> <AiOutlineArrowLeft /></Link>
  <h1 className='signup top'>Signup</h1><p className="light">Connect & Collect</p>
<Form onSubmit={handleSubmit(onSubmit)}> <Form.Group className="pt-3  " controlId="formGroupName">
    <Form.Control type="text" className="input-lg in" onChange={(event)=>{setName(event.target.value);}} name="name" value={name} placeholder="Enter user name" required />
  </Form.Group>
  <Form.Group className="pt-3 " controlId="formGroupEmail">
    <Form.Control type="email" onChange={(event)=>{setEmail(event.target.value);}} name="email"className="in" placeholder='Enter Email' required />
  </Form.Group>
  <Form.Group className="pt-3" controlId="formGroupPassword">
    <Form.Control 
                 type="password"
            {...register('password')}
            className={`form-control in ${errors.password ? 'is-invalid' : ''}`} 
            onChange={(event)=>{setPassword(event.target.value);}} name="password"
            placeholder="Enter Password"  required
      />
             <div className="invalid-feedback">{errors.password?.message}</div>
  </Form.Group>        

      <Form.Group className="pt-3" controlId="formGroupPassword">

    <Form.Control type="password"   {...register('confirmPwd')}
            className={`form-control in ${errors.confirmPwd ? 'is-invalid' : ''}`} name="confirmPwd"placeholder="Confirm Password" required/> 
           <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
                      

    </Form.Group>
   <div className="form-check pt-3">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label size">
    Accept The Terms & Conditions.  <Link to="/">   Click Here</Link> 
  </label>
</div>
    <Button  type="submit" onClick={sform} className="btn btn-lg btn-block col-12 mt-3">Sign up</Button>
    <p className="mt-3 text-center letter">Already have account?         <Link to="/Login">Sign in</Link> 

   

        </p> </Form>
        <Container className='text-center signup tp'>Privacy Policy</Container>
        <p className='text-center size'>Denaurlen Copyright @ 2021, All Rights Recived</p>
</Container>  

  )
}

export default Signup
