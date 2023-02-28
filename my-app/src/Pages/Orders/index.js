import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory, getOrders } from "../../API";
import DeleteIcon from '@mui/icons-material/Delete';
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import axios from 'axios'
import "./index.css"
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, } from 'mdb-react-ui-kit';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
export default function RecentOrders() {
  
  const [loading, setLoading] = useState(false);
  const [data, setdata] = useState([])
  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:4000/orders")
    .then(res=>{setdata(res.data);
      setLoading(false)})

  }, []);
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
const  handledelete=(_id)=>{
  axios.delete(`http://localhost:4000/orders/${_id}`)
  .then(res=>setdata([...data].filter(x=>x._id!==res.data._id)))
}
  return (
    <>
      <Typography.Text>Recent Orders</Typography.Text>
      <MDBTable hover id="mdtable">
<MDBTableHead>
  <tr>
    <th scope='col'>Order Id</th>
    <th scope='col'>Count</th>
    <th scope='col'>Price</th>
    <th scope='col'>Order Date</th>
    <th scope='col'>Order remove</th>
  </tr>
</MDBTableHead>
<MDBTableBody>
  {
    data
    .map(item=>(
      <tr>
    <th scope='row'>{item._id}</th>
    <td>{item.basket.reduce((total, item)=>total+(item.counter),0)}</td>
    <td>${(item.basket.reduce((total, item)=>total+(item.data.ProductPrice*item.counter),0)-3).toFixed(2)}</td>
    <td>{(item.createdAt).slice(0,10)}</td>
    <td><button onClick={()=>handledelete(item._id)}><DeleteIcon id='deliconbtn'/></button></td> </tr>
    ))
  } 
  
</MDBTableBody>
</MDBTable> 
    </>
  );
}
