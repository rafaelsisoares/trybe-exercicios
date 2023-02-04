import { Pool, RowDataPacket } from 'mysql2/promise';

import { IPostId } from '../interfaces/postInterface';

export default class PostModel {
    private connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    }

    async getAll(): Promise<IPostId[]> {
        const query: string = 'SELECT * FROM Posts';
        const [posts] = await this.connection.execute<(RowDataPacket & IPostId)[]>(query);
        return posts;
    };

    async getById(id: number): Promise<IPostId> {
        const query: string = 'SELECT * FROM Posts WHERE id = ?';
        const [[rows]] = await this.connection.execute<(RowDataPacket & IPostId)[]>(query, [id]);
        return rows;
    }
};