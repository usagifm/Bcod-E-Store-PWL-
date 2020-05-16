import React, { useEffect, useState } from 'react'

import { Button, Descriptions, Icon } from 'antd';


function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }

    // Penambahan pertama 

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'IDR',
      });


    return (
        <div>


            <Descriptions title="Info Produk">]
            <Descriptions.Item label="Kategori"> {Product.category}</Descriptions.Item>
            
                <Descriptions.Item label="Merek"> {Product.brand}</Descriptions.Item>
                <Descriptions.Item label="Harga" > {formatter.format(Product.price)}</Descriptions.Item>
                <Descriptions.Item label="Terjual">{Product.sold}</Descriptions.Item>
                <Descriptions.Item label="Stok"> {Product.stock}</Descriptions.Item>
                <Descriptions.Item label="Review"> {Product.rating}</Descriptions.Item>
                <Descriptions.Item  span={3}> {Product.description}</Descriptions.Item>
            
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round"  type="danger"
                    onClick={addToCarthandler}
                >
                    Tambahkan Ke Keranjang
                    </Button>
            </div>
        </div>
    )
}

export default ProductInfo
