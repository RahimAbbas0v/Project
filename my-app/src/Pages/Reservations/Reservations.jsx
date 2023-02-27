import React, { useEffect, useState } from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, } from 'mdb-react-ui-kit';
import './Reservations.css'
import {useSelector,useDispatch} from "react-redux/es/exports" ;
import axios from 'axios';
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
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { UserOutlined } from '@ant-design/icons';
import { Button, Modal, Input } from "antd";
import { EditOutlined, DeleteOutlined,EyeOutlined } from "@ant-design/icons";
import { Avatar, Rate, Typography,Space } from "antd";
import { useNavigate } from "react-router-dom";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Basic() {
  const [item1, setItem1] = useState([])
    useEffect(()=>{
        setItem1(JSON.parse(localStorage.getItem('item')))
    },[])  
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
  
    useEffect(() => {
      setLoading(true);
      axios.get('http://localhost:4000/reservation')
      .then(res=>{setDataSource(res.data);
      setLoading(false)})
    }, []);
    const navigate=useNavigate()
  const [reserv,setReserv]=useState([])
console.log(reserv);
    const handleDelete= (_id) => {
      Modal.confirm({
        title: "Are you sure, you want to cancel your reservation?",
        okText: "Yes",
        okType: "danger",
        onOk: () => {
          axios.delete(`http://localhost:4000/reservation/${_id}`)
          .then(res=>setDataSource([...dataSource].filter(x=>x._id!==res.data._id)))
        },
      });
    };
  return (
    <>
    <section>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>First Name</StyledTableCell>
            <StyledTableCell align='center'>Last Name</StyledTableCell>
            <StyledTableCell align='center'>Phone Number</StyledTableCell>
            <StyledTableCell align='center'>Date</StyledTableCell>
            <StyledTableCell align='center'>Clock</StyledTableCell>
            <StyledTableCell align='center'>Message</StyledTableCell>
            <StyledTableCell align='center'>Cancel Reservation</StyledTableCell>


          </TableRow>
        </TableHead>
        <TableBody>

              {
                dataSource
                .map(item=>(
            <StyledTableRow >
              <StyledTableCell align='center'>{item.email}</StyledTableCell>
              <StyledTableCell align='center'>{item._id}</StyledTableCell>
              {
                item.name.map((elem)=>(
                  <>
<StyledTableCell align='center'>+{elem.phone}</StyledTableCell>
              <StyledTableCell align='center'>{elem.date}</StyledTableCell>
              <StyledTableCell align='center'>{elem.clock}</StyledTableCell>
              <StyledTableCell align='center'>{elem.message}</StyledTableCell></>
                ))}
              <StyledTableCell align='center'>
             <DeleteOutlined
                 onClick={()=>handleDelete(item._id)}
                   id="settingsIcon"
                    style={{ color: "red", marginLeft: 12 }}
                  /></StyledTableCell>
              



            </StyledTableRow> ))
              }
   
        </TableBody>
      </Table>
    </TableContainer></section>
   
        

    </>

  );
}
