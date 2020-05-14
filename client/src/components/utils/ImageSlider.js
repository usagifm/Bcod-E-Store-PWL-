import React from 'react'
import { Carousel } from 'antd';

function ImageSlider(props) {
    return (
        <div style={{ 
            position:'relative',
            overflow:'hidden', 
            width:'240px', 
            height:'240px' 
        }}>

            <Carousel dots={false}>
                {props.images.map((image, index) => (
                    <div key={index}>
                        <img style={{
                            width:'100%',
                            height:'100%'
                        }}
                            src={`http://localhost:5000/${image}`} alt="productImage" />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default ImageSlider
