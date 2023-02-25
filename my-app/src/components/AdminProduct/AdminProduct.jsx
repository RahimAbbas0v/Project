
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import axios from 'axios'
 function AdminProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/datas")
        .then((res) => setProducts(res.data));
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const imageBodyTemplate = (product) => {
        return <img src={product.ProductUrl} className="w-6rem shadow-2 border-round" />;
    };

    const priceBodyTemplate = (product) => {
        return formatCurrency(product.ProductPrice);
    };
    
    const NameTemplate = (product) => {
        return formatCurrency(product.ProductName);
    };

    const ratingBodyTemplate = (product) => {
        return <Rating value={product.Category} readOnly cancel={false} />;
    };

    const statusBodyTemplate = (product) => {
        return <Tag value={product.Category} severity={getSeverity(product)}></Tag>;
    };

    const getSeverity = (product) => {
        switch (product.ProductPrice) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2" >
            <span className="text-xl text-900 font-bold">Products</span>
            <Button icon="pi pi-refresh" rounded raised />
        </div>
    );
    const footer = `In total there are ${products ? products.length : 0} products.`;

    return (
        <div className="card" id='tableAdmin'>
            <DataTable value={products} header={header} footer={footer} tableStyle={{ minWidth: '60rem' }} style={{color:"black"}}>
                <Column field="name" header="Name" body={NameTemplate}></Column>
                <Column header="Image" body={imageBodyTemplate}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate}></Column>
                <Column field="category" header="Category" body={ratingBodyTemplate}></Column>
                <Column header="Status" body={statusBodyTemplate}></Column>
            </DataTable>
        </div>
    );
}
 export default AdminProduct