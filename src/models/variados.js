import Sequelize from "sequelize";
import {connection} from '../database/connection.js'
export const variados = connection.define('variados', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    img: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    ano: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    diretores: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    iframe: {
        type: Sequelize.TEXT,
        allowNull: false,
    }

}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps:false,
}
);