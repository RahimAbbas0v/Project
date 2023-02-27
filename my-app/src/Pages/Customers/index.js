import { Avatar, Rate, Space, Table, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import './index.css'
import { UserOutlined } from '@ant-design/icons';
import { Button, Modal, Input } from "antd";
import { EditOutlined, DeleteOutlined,EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:4000/userData')
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
  const handleView= (record) => {
    Modal.confirm({
      title: "Are you sure, you want view this item",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        navigate(`/Admin/userView/${record._id}`)
      },
    });
  };
  const hanleEdit= (record) => {
    Modal.confirm({
      title: "Are you sure, you want edit this item",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        navigate(`/Admin/useredit/${record._id}`)
      },
    });
  };
  return (
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
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}
export default Customers;
