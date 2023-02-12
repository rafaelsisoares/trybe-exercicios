import Author from "./database/models/author.model";
import Book from "./database/models/book.model";

(async () => {
    const authors = await Author.findAll();
    console.table(authors.map((author) => author.toJSON()));

    process.exit(0);
})();

(async () => {
    const books = await Book.findAll();
    console.table(books.map((book) => book.toJSON()));

    process.exit(0);
})();