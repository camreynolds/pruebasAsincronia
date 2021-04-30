import Product from '../models/Product'  // con este "Product" se podrá realizar operaciones CRUD.

export const createProduct = async (req, res) => {
    const {name, category, price, imgURL} = req.body;
    const newProduct = new Product({name, category, price, imgURL});
    const productSaved = await newProduct.save(); // "productSaved" es una copia del objeto guardado.

    res.status(201).json(productSaved);
};

export const getProduct = async (req, res) => {
    const products = await Product.find();
    res.json(products); // No se colocó "status(200)" porque cuando no se coloca, lo devuelve por defecto.
};

export const getProductById = async (req, res) => {
   const product = await Product.findById(req.params.productId);
   res.status(200).json(product);
};

export const updateProductById = async (req, res) => {
   const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
       new: true
   });
   res.status(200).json({updatedProduct});
};

export const deleteProductById = async (req, res) => {
  const {productId} = req.params;
  await Product.findByIdAndDelete(productId);
  res.status(200).json({Mensaje: 'Producto eliminado exitosamente.'});
};