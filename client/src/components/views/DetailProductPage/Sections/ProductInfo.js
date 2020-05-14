import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';

function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }


    return (
        <div>
            <Descriptions title="Info Produk">
                <Descriptions.Item label="Merek"> {Product.brand}</Descriptions.Item>
                <Descriptions.Item label="Harga(Rp)" > {Product.price}</Descriptions.Item>
                <Descriptions.Item label="Terjual">{Product.sold}</Descriptions.Item>
                <Descriptions.Item label="Stok"> {Product.stock}</Descriptions.Item>
                <Descriptions.Item label="Dilihat"> {Product.views}</Descriptions.Item>
                <Descriptions.Item label="Rating"> {Product.rating}</Descriptions.Item>
                <Descriptions.Item label="Deskripsi" span={3}> {Product.description}</Descriptions.Item>
            
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger"
                    onClick={addToCarthandler}
                >
                    Add to Cart
                    </Button>
            </div>
        </div>
    )
}

export default ProductInfo
