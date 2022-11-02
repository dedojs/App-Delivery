module.exports = (Sequelize, DataTypes) => {
  const Product = Sequelize.define('Product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(4, 2),
      allowNull: true,
    },
    urlImage: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'url_image',
    },
  }, {
    tableName: 'products',
    timestamps: false,
  });

  return Product;
};