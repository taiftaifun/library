let bookLibrary = [];

const newBookBtn = document.querySelector("#newbook-btn");
const formWrapper = document.querySelector("#form-wrapper");
newBookBtn.addEventListener("click", showForm);
const submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", addBookToLibrary);
const cancelBtn = document.querySelector("#cancel-btn");
cancelBtn.addEventListener("click", hideForm);
const titleInput = document.querySelector("#title-input")
const auhorInput = document.querySelector("#author-input")
const pagesInput = document.querySelector("#pages-input")
const readInput = document.querySelector("#read-input")
const bookForm = document.querySelector("#book-form")
const libraryShelf = document.querySelector("#library-shelf")

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary() {
    let title = titleInput.value;
    let author = auhorInput.value;
    let pages = pagesInput.value;
    let read = (readInput.value == "on" ? true : false);
    let newBook = new Book(title, author, pages, read);
    bookLibrary.push(newBook);
    hideForm();
    bookForm.reset();
    console.log(bookLibrary);
    renderBook(newBook);
}

function showForm() {
    formWrapper.setAttribute("style", "display: block");
    newBookBtn.setAttribute("style", "display: none");
}

function hideForm() {
    formWrapper.setAttribute("style", "display: none")
    newBookBtn.setAttribute("style", "display: block");
}

function renderBook(book) {
    let singleBook = document.createElement("div");
    singleBook.setAttribute("class", "book");
    singleBook.innerHTML = `<div>Title: ${book.title}</div>
                            <div>Author: ${book.author}</div>
                            <div>Pages: ${book.pages}</div>
                            <div>Read: ${book.read}</div>`;
    libraryShelf.appendChild(singleBook);
}