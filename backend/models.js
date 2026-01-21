const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
await mongoose.connect('mongodb://localhost:27017/persistencia_db');
    console.log('✅ Conectado a MongoDB');
  } catch (error) {
    console.error('❌ Error conectando a MongoDB:', error.message);
    process.exit(1);
  }
};

const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,     
    required: true    
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true, 
  toJSON: { virtuals: true }, 
  toObject: { virtuals: true }
});

usuarioSchema.virtual('posts', {
  ref: 'Post',          
  localField: '_id',    
  foreignField: 'autor' 
});

const postSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  contenido: {
    type: String      
  },
  autor: {            
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  }
}, {
  timestamps: true
});

const Usuario = mongoose.model('Usuario', usuarioSchema);
const Post = mongoose.model('Post', postSchema);

module.exports = { connectDB, Usuario, Post };