interface IPost {
    title: string;
    author: string;
    category: string;
    publicationDate: string;
}

interface IPostId extends IPost {
    id: number;
}

export {
    IPost,
    IPostId,
}