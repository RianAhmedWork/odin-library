const myLibrary = [];

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

Book.prototype.changeRead = function() {
  if (this.read === "Read") {
    this.read = "Unread"
  } else if (this.read === "Unread") {
    this.read = "Read"
  }
}

function addBookToLibrary(title, author, pages, read) {
  if (
    !myLibrary.some(
      (obj) => String(obj.title).toLowerCase() === String(title).toLowerCase()
    )
  ) {
    myLibrary.push(
      new Book(
        String(title),
        String(author),
        String(pages),
        String(read),
        crypto.randomUUID()
      )
    );
  }
}

function displayBooksOnPage() {
  for (let i = 0; i < myLibrary.length; i++) {
    const titleCompare = document.querySelectorAll(".book-title");
    let counter = 0;
    titleCompare.forEach((title) => {
        if (title.textContent === String(myLibrary[i].title)) {
            counter++;
        }
    });
    if (counter === 0) {
        const bookCard = document.createElement("div");
        bookCard.classList = "book-card";
        const bookTitle = document.createElement("div");
        bookTitle.classList = "book-title";
        bookTitle.textContent = myLibrary[i].title;
        const bookAuthor = document.createElement("div");
        bookAuthor.classList = "book-author";
        bookAuthor.textContent = myLibrary[i].author;
        const bookPages = document.createElement("div");
        bookPages.classList = "book-pages";
        bookPages.textContent = myLibrary[i].pages;
        const bookRead = document.createElement("button");
        bookRead.classList = "book-read";
        bookRead.textContent = myLibrary[i].read;
        bookRead.dataset.id = myLibrary[i].id;
        const bookRemove = document.createElement("button");
        bookRemove.classList = "book-remove";
        bookRemove.textContent = "Remove";
        bookRemove.dataset.id = myLibrary[i].id;
        bookCard.append(bookTitle);
        bookCard.append(bookAuthor);
        bookCard.append(bookPages);
        bookCard.append(bookRead);
        bookCard.append(bookRemove);
        document.getElementById("main").append(bookCard);
        bookRemove.addEventListener("click", function() {
          let index = myLibrary.findIndex(book => book.id === bookRemove.dataset.id);
          if (index !== 1) {
            myLibrary.splice(index, 1);
            bookRemove.parentElement.remove();
          }
        });
        bookRead.addEventListener("click", function() {
          if (bookRead.textContent === "Read") {
            bookRead.textContent = "Unread";
          } else if (bookRead.textContent === "Unread") {
            bookRead.textContent = "Read";
          }
          myLibrary[i].changeRead();
        });
    }
  }
}

const button = document.getElementById("add-book");
const dialog = document.getElementById("book-modal");
const submit = document.getElementById("form-submit");

button.addEventListener("click", function () {
  dialog.showModal();
});

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const formTitle = document.getElementById("form-title");
  const formAuthor = document.getElementById("form-author");
  const formPages = document.getElementById("form-pages");
  const formCheckbox = document.getElementById("form-title");
  if (!formTitle.value || !formAuthor.value || !formPages.value) {
    alert("Please Fill Out All The Fields");
  } else {
  if (formCheckbox.checked) {
    addBookToLibrary(
      formTitle.value,
      formAuthor.value,
      formPages.value,
      "Read"
    );
  } else {
    addBookToLibrary(
      formTitle.value,
      formAuthor.value,
      formPages.value,
      "Unread"
    );
  }
  displayBooksOnPage();
  dialog.close();
}
});