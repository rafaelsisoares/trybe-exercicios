import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

import Author from './author.model';

class Book extends Model {
    declare id: number;
    declare title: string;
    declare authorId: number;
    declare genreId: number;
};

Book.init({
    id: {
        type: INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    title: {
        type: STRING,
        allowNull: false,
    },
    authorId: {
        type: INTEGER,
        allowNull: false,
        references: {
            model: 'authors',
            key: 'id',
        }
    },
    genreId: {
        type: INTEGER,
        allowNull: false,
        references: {
            model: 'genres',
            key: 'id',
        }
    }
}, {
    timestamps: false,
    underscored: true,
    sequelize: db,
    modelName: 'books',
});

Book.belongsTo(Author, { foreignKey: 'authorId' });
Author.hasMany(Book, { foreignKey: 'genreId' });

export default Book;