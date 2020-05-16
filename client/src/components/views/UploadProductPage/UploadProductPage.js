import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;


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

// Penambahan pertama 

function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [CategoryValue, setCategoryValue] = useState("Komputer Rakitan")
    const [StockValue, setStockValue] = useState(0)
    const [BrandValue, setBrandValue] = useState("")

    const [Images, setImages] = useState([])


    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onCategorySelectChange = (event) => {
        setCategoryValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }

    const onStockChange = (event) => {
        setStockValue(event.currentTarget.value)
    }

    const onBrandChange = (event) => {
        setBrandValue(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();


        if (!TitleValue || !DescriptionValue || !PriceValue ||
            !CategoryValue || !Images || !StockValue || !BrandValue)  {
            return alert('fill all the fields first!')
        }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            price: PriceValue,
            images: Images,
            category: CategoryValue,
            stock: StockValue,
            brand: BrandValue,
            
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Produk Berhasil Ditambahkan !')
                    props.history.push('/')
                } else {
                    alert('Gagal Menambahkan Produk !')
                }
            })

    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Upload Travel Product</Title>
            </div>


            <Form onSubmit={onSubmit} >

                {/* DropZone */}
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label>Nama Produk</label>
                <Input
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                <br />
                <br />
                <label>Deskripsi</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                <label>Harga(Rp)</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                <br /><br />
                <label>Jumlah Stock</label>
                <Input
                    onChange={onStockChange}
                    value={StockValue}
                    type="number"
                />
                <br /><br />
                <select onChange={onCategorySelectChange} value={CategoryValue}>
                    {Category.map(item => (
                        <option key={item.key} value={item.key}>{item.key} </option>
                    ))}
                </select>
                <br />
                <br />
                <label>Merek</label>
                <Input
                    onChange={onBrandChange}
                    value={BrandValue}
                />
                <br />
                <br />

                <Button
                    onClick={onSubmit}
                >
                    Submit
                </Button>

            </Form>

        </div>
    )
}

export default UploadProductPage
