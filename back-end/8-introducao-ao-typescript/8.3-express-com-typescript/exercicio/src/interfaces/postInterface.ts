interface IPost {
    title: string;
    author: string;
    category: string;
    published: string;
}

interface IPostId extends IPost {
    id: number;
}

export {
    IPost,
    IPostId,
}