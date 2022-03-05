import React, { useState } from 'react'
import { logout, selectCount, selectName } from './features/counter/counterSlice';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { BsPersonCircle } from "react-icons/bs";
import { Button, Container,Row,Col } from 'react-bootstrap';
import logo from './post.jpg';
import coin from './coins.png';
import { Link} from "react-router-dom";

import { GoKebabVertical } from "react-icons/go";
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';

function Dashboard() {
  const name = useAppSelector(selectName);
  const dispatch = useAppDispatch();
  const [leadc,setleadc]=useState(2100);

  const Sform =async()=>{
    dispatch(logout())
   };
  return (
<Container fluid className="p-3"> <Row>
  <Col><h5 className='si'>DENAURLEN</h5></Col>
<Col ><Link to="/Login"><Button  className="btn btn3 btn-success " onClick={Sform}>logout</Button></Link>
</Col>

</Row>

 <Row>
  <Col xs={6}><h5 className='si'><BsPersonCircle className='right'/>{name}</h5></Col>
<Col xs={6}> <h4 className='coi'> <img className="img2" src={coin} alt="post" />  {leadc}</h4>
</Col>
</Row>
<Row > <img className="img22" src={logo} alt="logo" />
</Row>
<Row>
<Col xs={8}>


   <Button className="lend" onClick={() => setleadc(leadc + 100)}>Lead +100</Button>
   
   
   
</Col><Col xs={6} className="d"><AiOutlineHeart size='2em' className='pad'/><FaRegComment size='2em' className='pad'/>
<RiShareForwardLine size='2em'/>
</Col><p>{leadc}<br></br>{name} lead</p>
</Row> 

</Container>
   
  )
}

export default Dashboard



