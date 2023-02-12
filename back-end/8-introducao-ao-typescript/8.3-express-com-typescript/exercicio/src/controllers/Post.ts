import { Request, Response } from 'express';
import { IPost } from '../interfaces/postInterface';
import statusCodes from '../utils/statusCodes';

import PostService from "../services/Post";

export default class PostController {
    private service: PostService;

    constructor() {
        this.service = new PostService();
    }

    async getAll(_req: Request, res: Response): Promise<void> {
        const posts: IPost[] = await this.service.getAll();
        res.status(statusCodes.OK).json(posts);
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;
        const post = await this.service.getById(+id);

        if (!post) {
            return res.status(statusCodes.NOT_FOUND)
            .json({ message: 'Post not found' });
        }

        res.status(statusCodes.OK).json(post);
    }
}