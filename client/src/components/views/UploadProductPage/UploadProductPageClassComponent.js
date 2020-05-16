import React, { Component } from 'react'
import { Typography, Button, Form, Input } from 'antd';
import axios from 'axios';
import FileUpload from '../../utils/FileUpload';

const { Title } = Typography;
const { TextArea } = Input;


// Penambahan pertama 


const Category = [
    { key: "Komputer Rakitan" },
    { key: "Komputer Build Up" },
    { key: "Laptop" },
    { key: "Aksesoris" },
    { key: "VGA Card" },
    { key: "Motherboard" },
    { key: "RAM" },
    { key: "Power Supply" },
    { key: "Software" }

]

export class UploadProductPage extends Component {

    state = {
        title: '',
        description: '',
        category: "Komputer Rakitan",
        images: [],
        stock: 0,
        price: 0,
        brand: ''
    }

    handleChangeTitle = (event) => {
        this.setState({ title: event.currentTarget.value })
    }

    handleChangePrice = (event) => {
        this.setState({ price: parseInt(event.currentTarget.value, 10) })
    }

    handleChangeStock = (event) => {
        this.setState({ stock: parseInt(event.currentTarget.value, 10) })
    }

    handleChangeDecsription = (event) => {
        // console.log(event.currentTarget.value)
        this.setState({ description: event.currentTarget.value })
    }

    handleChangeCategory = (event) => {
        this.setState({ category: event.currentTarget.value })
    }

    handleChangeBrand = (event) => {
        this.setState({ brand: event.currentTarget.value })
    }


    onSubmit = (event) => {
        event.preventDefault();

        if (this.props.user.userData && !this.props.user.userData.isAuth) {
            return alert('Please Log in First')
        }

        if (!this.state.title || !this.state.description ||
            !this.state.category || !this.state.images
            || !this.state.price || this.state.stock || this.state.brand) {
            return alert('Please first fill all the fields')
        }

        const variables = {
            writer: this.props.user.userData._id,
            title: this.state.title,
            description: this.state.description,
            images: this.state.images,
            category: this.state.category,
            price: this.state.price,
            stock: this.state.stock,
            brand: this.state.stock,
        }

        axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('video Uploaded Successfully')
                    setTimeout(() => {
                        this.props.history.push('/')
                    }, 1000);
                } else {
                    alert('Failed to upload video')
                }
            })
    }

    updateFiles = (newImages) => {
        this.setState({ images: newImages })
    }


    render() {
        return (
            <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2} > Upload Travel Product</Title>
            </div>

            <Form onSubmit={this.onSubmit}>
               
               <FileUpload refreshFunction={this.updateFiles} />

                <br /><br />
                <label>Nama Produk</label>
                <Input
                    onChange={this.handleChangeTitle}
                    value={this.state.title}
                />
                <br /><br />
                <label>Deskripsi</label>
                <TextArea
                    onChange={this.handleChangeDecsription}
                    value={this.state.description}
                />
                <br /><br />
                <label>Harga(Rp)</label>
                <Input
                    type="number"
                    onChange={this.handleChangePrice}
                    value={this.state.price}
                />
                <br /><br />
                <label>Jumlah Stock</label>
                <Input
                    onChange={this.handleChangeStock}
                    value={this.state.stock}
                    type="number"
                />
                <br /><br />
                <select onChange={this.handleChangeCategory}>
                    {Category.map(item => (
                        <option key={item.key} value={item.key}>{item.key}</option>
                    ))}
                </select>
                <br /><br />
                <label>Merek</label>
                <Input
                    onChange={this.handleChangeBrand}
                    value={this.state.brand}
                />
                <br />
                <br />


                <Button type="primary" size="large" onClick={this.onSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
        )
    }
}

export default UploadProductPage
