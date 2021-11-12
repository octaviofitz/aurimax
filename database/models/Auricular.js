module.exports= (sequelize, DataTypes) => {

    let alias= 'Auricular';

    let cols= {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        marca: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        modelo: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        precio: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        oferta: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        imagen: {
            type: DataTypes.STRING(45),
            allowNull: false,
        }
    }

    const config= {
        tableName: 'auriculares',
         timestamps: false,
    }

    const Auricular= sequelize.define(alias,cols,config)

    return Auricular

}