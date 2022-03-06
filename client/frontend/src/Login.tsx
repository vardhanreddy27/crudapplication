import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route ,Link,useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import google from './google.png';

import {Button, Col, Container, Form} from 'react-bootstrap';
import Axios from 'axios';
import Signup from './Signup';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { login, selectCount } from './features/counter/counterSlice';
function Login() {
const count = useAppSelector(selectCount);
const dispatch = useAppDispatch();
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const Sform =async()=>{
 const res=await   Axios.post("https://gentle-wildwood-96779.herokuapp.co/read",{email:email,password:password,});
 dispatch(login(res))
};


  return (
<Container className="p-5 col-lg-5 ">
<Link className="color" to="/"> <AiOutlineArrowLeft /></Link> <h1 className='login top'>Sign in</h1><p className="light">Connect & Collect</p>
<Form>
  <Form.Group className="pt-3 " controlId="formGroupEmail">
    <Form.Control type="email" className="in"placeholder="Enter email"  onChange={(event)=>{setEmail(event.target.value);}} required />
  </Form.Group>
  <Form.Group className="pt-3" controlId="formGroupPassword">
    <Form.Control type="password" className="in"  placeholder="Enter Password" onChange={(event)=>{setPassword(event.target.value);}} required  />
   
    </Form.Group> <div className="form-check pt-3">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label size ">
    Remember Me 
  </label>
</div><Link to="/Dashboard"><Button  className="btn btn-primary btn-lg btn-block col-12 mt-3" onClick={Sform}>submit</Button></Link>
<div className="strike pt-5 pb-5">
    <span>OR</span>
</div>

<Button  className="btn1 btn-primary btn-lg btn-block col-12 " > <img className="google" src={google} alt="google" />Sign In With Google</Button>
<p className="mt-3 text-center">Don't have an account? 
        <Link to="/"> Sign up</Link> 
        </p></Form>
        <Container className='text-center signup tp1'>Privacy Policy</Container>

        <p className='text-center size'>Denaurlen Copyright @ 2021, All Rights Recived</p>

</Container>  )
}

export default Login
