const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customers', {
    cust_id: {
      autoIncrement: true,
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    cust_name: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    cust_city: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    cust_location_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'locations',
        key: 'location_id'
      }
    }
  }, {
    sequelize,
    tableName: 'customers',
    schema: 'sales',
    timestamps: false,
    indexes: [
      {
        name: "pk_cust_id",
        unique: true,
        fields: [
          { name: "cust_id" },
        ]
      },
    ]
  });
};
