import { Pool, RowDataPacket } from 'mysql2/promise';

import { IPost } from '../interfaces/postInterface';

export default class PostModel {
    private connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    }

    async getAll(): Promise<RowDataPacket[] & IPost[]> {
        const query: string = 'SELECT * FROM Posts';
        const [posts] = await this.connection.execute<RowDataPacket[] & IPost[]>(query);
        return posts;
    };

    async getById(id: number): Promise<IPost> {
        const query: string = 'SELECT * FROMPosts WHERE id = ?';
        const [rows] = await this.connection.execute<RowDataPacket[] & IPost>(query, [id]);
        return rows;
    }
};