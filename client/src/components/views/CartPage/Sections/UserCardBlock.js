import React from 'react'

function UserCardBlock(props) {



    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'IDR',
      });

    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

            const renderItems = () => (
                props.products && props.products.map(product => (
                    <tr key={product._id}>
                        <td>
                            <img style={{ width: '70px' }} alt="product" 
                            src={renderCartImage(product.images)} />
                        </td> 


                        <td>{product.quantity} Unit</td>


                        <td>{formatter.format(product.price)} </td>

                        
                        <td><button 
                        onClick={()=> props.removeItem(product._id)}
                        >Hapus</button> </td>
                    </tr>
                ))
            )


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Gambar Produk</th>
                        <th>Jumlah</th>
                        <th>Harga</th>
                        <th>Hapus dari Keranjang Belanja</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock
