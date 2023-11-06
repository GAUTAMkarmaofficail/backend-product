const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT, // Adjust the data type for price
      },
      discountPercentage: {
        type: DataTypes.FLOAT, // Adjust the data type for discountPercentage
      },
      rating: {
        type: DataTypes.FLOAT, // Add a field for rating
      },
      stock: {
        type: DataTypes.INTEGER,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
      },
      thumbnail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      images: {
        type: DataTypes.JSON, // Use JSON data type for images array
      },
    },
    {
      timestamps: false,
      indexes: [
        {
          fields: ['title'],
        },
        {
          fields: ['category'],
        },
        {
          fields: ['price'],
        },
        {
          fields: ['brand'],
        },
      ],
    }
  );

  return Product;
};
