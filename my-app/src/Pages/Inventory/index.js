import { Avatar, Rate, Space, Table, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getInventory } from "../../API";
import './index.css'
import { Button, Modal, Input } from "antd";
import { EditOutlined, DeleteOutlined,EyeOutlined } from "@ant-design/icons";
function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/datas')
    .then(res=>{setDataSource(res.data);
    })
  }, []);
  const navigate=useNavigate()
  const AddPage=()=>{
    navigate("/Admin/Addproducts")
  }
  const handleDelete= (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          axios.delete(`http://localhost:4000/datas/${record._id}`)
          return pre.filter((student) => student._id !== record._id);
        });
      },
    });
  };
  const handleView= (record) => {
    Modal.confirm({
      title: "Are you sure, you want view this item",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        navigate(`/Admin/details/${record._id}`)
      },
    });
  };
  const hanleEdit= (record) => {
    Modal.confirm({
      title: "Are you sure, you want edit this item",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        navigate(`/Admin/edit/${record._id}`)
      },
    });
  };
  return (
    <Space style={{display:"block"}}>
      <div className="AddDiv">
      <button id="addProduct" onClick={AddPage}>Add to Product</button></div>
      <Table
      id="productTable"
        loading={loading}
        columns={[

          {
            title: "Image",
            dataIndex: "ProductUrl",  // this is the value that is parsed from the DB / server side
            render: ProductUrl => <img alt={ProductUrl} src={ProductUrl} />  // 'theImageURL' is the variable you must declare in order the render the URL
      },
          {
            title: "Title",
            dataIndex: "ProductName",
          },
          {
            title: "Price",
            dataIndex: "ProductPrice",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Category",
            dataIndex: "Category",
          },
          {
            title: "Product Id",
            dataIndex: "_id",
          },

          {
            title: "updatedAt",
            dataIndex: "updatedAt",
          },{
            title: "Actions",
            render: (record) => {
              return (
                <>
                  <EditOutlined
                  id="settingsIcon"
                  onClick={()=>{
                    hanleEdit(record)
                  }}
                  />
                  <DeleteOutlined
                  onClick={() => {
                    handleDelete(record);
                  }}
                   id="settingsIcon"
                    style={{ color: "red", marginLeft: 12 }}
                  />
                  <EyeOutlined  style={{ color: "blue", marginLeft: 12 }}  id="settingsIcon" onClick={()=>{handleView(record)}} />
                </>
              );
            },
          },
          

        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 4,
          position: ['bottomCenter'],
        }}
      ></Table>
    </Space>
  );
}
export default Inventory;
