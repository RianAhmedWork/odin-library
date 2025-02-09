const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

function displayBooksOnPage() {
    for (book of myLibrary) {
        const bookCard = document.createElement("div");
        bookCard.classList = "book-card";
        const bookTitle = document.createElement("div");
        bookTitle.classList = "book-title";
        bookTitle.textContent = book.title;
        const bookAuthor = document.createElement("div");
        bookAuthor.classList = "book-author";
        bookAuthor.textContent = book.author;
        const bookPages = document.createElement("div");
        bookPages.classList = "book-pages";
        bookPages.textContent = book.pages;
        const bookRead = document.createElement("div");
        bookRead.classList = "book-class"
        bookRead.textContent = book.read;
        bookCard.append(bookTitle);
        bookCard.append(bookAuthor);
        bookCard.append(bookPages);
        bookCard.append(bookRead);
        document.getElementById("main").append(bookCard);
    }
}