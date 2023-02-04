import PostModel from "../models/Post";
import connection from "../models/connection";
import { IPost } from '../interfaces/postInterface';

export default class PostService {
    public model: PostModel;

    constructor() {
        this.model = new PostModel(connection);
    }

    async getAll(): Promise<IPost[]> {
        const posts: IPost[] = await this.model.getAll();
        return posts;
    }

    async getById(id: number): Promise<IPost> {
        const post: IPost = await this.model.getById(id);
        return post;
    }
}