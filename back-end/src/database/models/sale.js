/**
 * @param {import('sequelize').Sequelize } Sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

module.exports = (Sequelize, DataTypes) => {
  const Sale = Sequelize.define('Sale', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',  
      references: {
        model: 'users',
        key: 'id'
      },
      field: 'user_id',
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',  
      references: {
        model: 'users',
        key: 'id'
      },
      field: 'seller_id',
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
      field: 'total_price',
    },
    deliveryAddress: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'delivery_address',
    },
    deliveryNumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'delivery_number',
    },
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'sale_date',
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Pendente',
    },
  }, {
    tableName: 'sales',
    createdAt: 'saleDate',
    updatedAt: false
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      foreignKey: 'userId',
    }),
    Sale.belongsTo(models.User, {
      foreignKey: 'sellerId',
    })
  };

  return Sale;
};