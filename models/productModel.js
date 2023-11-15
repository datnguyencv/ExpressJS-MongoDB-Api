const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

const createSampleData = async () => {
  try {
    const existingProduct = await Product.find();
    if (existingProduct.length === 0) {
      const sampleProduct = [
        { name: "Product 1", quantity: 5, price: 1.99, image: "product1.jpg" },
        { name: "Product 2", quantity: 5, price: 3.99, image: "product1.jpg" },
        { name: "Product 3", quantity: 5, price: 4.99, image: "product1.jpg" },
        { name: "Product 4", quantity: 5, price: 6.99, image: "product1.jpg" },
        { name: "Product 5", quantity: 5, price: 2.99, image: "product1.jpg" },
        { name: "Product 6", quantity: 5, price: 5.99, image: "product1.jpg" },
        { name: "Product 7", quantity: 5, price: 10.99, image: "product1.jpg" },
      ];

      // Thêm người dùng mẫu vào cơ sở dữ liệu
      await Product.insertMany(sampleProduct);

      console.log("Sample data created successfully.");
    } else {
      console.log("Sample data already exists.");
    }
  } catch (error) {
    console.error("Error creating sample data:", error);
  }
};

module.exports = { Product, createSampleData };
