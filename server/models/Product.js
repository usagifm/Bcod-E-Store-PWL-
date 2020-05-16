const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Penambahan pertama 


const productSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 10000
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
        default: []
    },
    category: {
        type: String,
        default: "Komputer Rakitan",
    },
    sold: {
        type: Number,
        maxlength: 100,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    },
    brand: {
        type: String,
        maxlength: 40
    },
    rating: {
        type: String,
        default: "Belum ada"
    },
    views: {
        type: Number,
        default: 0
    }
}, { timestamps: true })


productSchema.index({ 
    title:'text',
    description: 'text',
}, {
    weights: {
        name: 5,
        description: 1,
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = { Product }