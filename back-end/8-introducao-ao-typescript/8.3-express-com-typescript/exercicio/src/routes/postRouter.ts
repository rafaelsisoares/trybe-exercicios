import { Router } from 'express';

import PostController from '../controllers/Post';

const router = Router();
const postController = new PostController();

router.get('/', postController.getAll.bind(postController));
router.get('/:id', postController.getById.bind(postController));

export default router;