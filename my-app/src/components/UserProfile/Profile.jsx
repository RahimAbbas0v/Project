import React, { useEffect, useState } from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, } from 'mdb-react-ui-kit';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import './Profile.css'
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
import { UserOutlined } from '@ant-design/icons';
import { Button, Modal, Input } from "antd";
import { EditOutlined, DeleteOutlined,EyeOutlined } from "@ant-design/icons";
import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useNavigate } from "react-router-dom";

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
  
    const handleDelete= (record) => {
      Modal.confirm({
        title: "Are you sure, you want to delete this student record?",
        okText: "Yes",
        okType: "danger",
        onOk: () => {
          setDataSource((pre) => {
            axios.delete(`http://localhost:4000/userData/${record._id}`)
            return pre.filter((student) => student._id !== record._id);
          });
        },
      });
    };

  return (
    <>
    <section>
    <div  id="Profilesection">
      <MDBContainer >
        <MDBRow className="justify-content-center" >
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }} id="profile">
              <MDBCardBody >
                <div className="text-black"id="textb;ack">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 mt-2" id='bg-brown1'>
                    <MDBCardTitle>{item1.firstname}{item1.lastname}</MDBCardTitle>
                    <MDBCardText>{item1.email}</MDBCardText>

                    <div className="d-flex justify-content-start   mb-2"
                    id='bg-brown2'
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">Phone Number</p>
                        <p className="mb-0">{item1.phone}</p>
                      </div> <br />
                      <div className="px-3">
                        <p className="small text-muted mb-1">UserType</p>
                        <p className="mb-0">{item1.UserType}</p>
                      </div>
                    </div>

                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </div>
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
      id="customTable"
        loading={loading}
        columns={[
          {
            title: "UserId",
            dataIndex: "_id",
          },
          {
            title: "First Name",
            dataIndex: "firstname",
          },
          {
            title: "LastName",
            dataIndex: "lastname",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },

          {
            title: "address",
            dataIndex: "address",
          },
          {
            title: "UserType",
            dataIndex: "UserType",
          },
          ,{
            title: "Actions",
            render: (record) => {
              return (
                <>
                  <DeleteOutlined
                  onClick={() => {
                    handleDelete(record);
                  }}
                   id="settingsIcon"
                    style={{ color: "red", marginLeft: 12 }}
                  />
                </>
              );
            },
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space></section>
   
        

    </>

  );
}

    {  /*  <div id="divorder">
<h3>MyOrders</h3>

</div> <MDBTable hover id="ordertable">
<MDBTableHead>
  <tr>
    <th scope='col'>Order Id</th>
    <th scope='col'>Count</th>
    <th scope='col'>Price</th>
    <th scope='col'>Order Date</th>
  </tr>
</MDBTableHead>
<MDBTableBody>
  {
    data
    .filter(x=>x.basket.map(x=>x.useremail==item1.email))
    .map(item=>(
      <tr>
    <th scope='row'>{item._id}</th>
    <td>{item.basket.reduce((total, item)=>total+(item.counter),0)}</td>
    <td>${(item.basket.reduce((total, item)=>total+(item.data.ProductPrice*item.counter),0)-3).toFixed(2)}</td>
    <td>{(item.createdAt).slice(0,10)}</td>
    <td><MDBBtn color="light" size="lg" onClick={toggleShow}>
          <MDBIcon fas icon="info me-2" /> Get information
        </MDBBtn>  <MDBRow className="justify-content-center align-items-center h-100 text-center">
      <MDBCol>
        
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader className="border-bottom-0">
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleShow}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody className="text-start text-black p-4">
                 {item.basket.slice(0,1).map((elem)=>(
                 <MDBTypography
                  tag="h5"
                  className="modal-title text-uppercase mb-5"
                  id="exampleModalLabel"
                >
              {elem.username}
                </MDBTypography>))}
                <MDBTypography
                  tag="h4"
                  className="mb-5"
                  style={{ color: "#35558a" }}
                >
                  Thanks for your order
                </MDBTypography>
                <p className="mb-0" style={{ color: "#35558a" }}>
                  Payment summary
                </p>
                <hr
                  className="mt-2 mb-4"
                  style={{
                    height: "0",
                    backgroundColor: "transparent",
                    opacity: ".75",
                    borderTop: "2px dashed #9e9e9e",
                  }}
                />

                {item.basket.map((elem)=>( 
                <div className="d-flex justify-content-between">
                  <p className="fw-bold mb-0">{elem.data.ProductName}(Qty:{elem.counter})</p>
                  <p className="text-muted mb-0">${elem.data.ProductPrice}</p>
                </div>))}

                <div className="d-flex justify-content-between">
                  <p className="small mb-0">Shipping</p>
                  <p className="small mb-0">$175.00</p>
                </div>

                <div className="d-flex justify-content-between pb-1">
                  <p className="small">Tax</p>
                  <p className="small">$200.00</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="fw-bold">Total</p>
                  <p className="fw-bold" style={{ color: "#35558a" }}>
                    $2125.00
                  </p>
                </div>
              </MDBModalBody>

              <MDBModalFooter className="d-flex justify-content-center border-top-0 py-4">
                <MDBBtn
                  size="lg"
                  style={{ backgroundColor: "#35558a" }}
                  className="mb-1"
                >
                  Track your order
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </MDBCol>
    </MDBRow></td>
  </tr>
    ))
  }
  
</MDBTableBody>
</MDBTable> */}