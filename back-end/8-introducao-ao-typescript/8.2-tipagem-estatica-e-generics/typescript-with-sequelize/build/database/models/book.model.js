"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const author_model_1 = __importDefault(require("./author.model"));
class Book extends sequelize_1.Model {
}
;
Book.init({
    id: {
        type: sequelize_1.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    authorId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        references: {
            model: 'authors',
            key: 'id',
        }
    },
    genreId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        references: {
            model: 'genres',
            key: 'id',
        }
    }
}, {
    timestamps: false,
    underscored: true,
    sequelize: _1.default,
    modelName: 'books',
});
Book.belongsTo(author_model_1.default, { foreignKey: 'authorId' });
author_model_1.default.hasMany(Book, { foreignKey: 'genreId' });
exports.default = Book;
