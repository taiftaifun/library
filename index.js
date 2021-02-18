let bookLibrary = [];
let bookId = 0;

const newBookBtn = document.querySelector("#newbook-btn");
const formWrapper = document.querySelector("#form-wrapper");
newBookBtn.addEventListener("click", showForm);
const submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", addBookToLibrary);
submitBtn.disabled = true;
const cancelBtn = document.querySelector("#cancel-btn");
cancelBtn.addEventListener("click", hideForm);
const titleInput = document.querySelector("#title-input")
const auhorInput = document.querySelector("#author-input")
const pagesInput = document.querySelector("#pages-input")
const readInput = document.querySelector("#read-input")
const bookForm = document.querySelector("#book-form")
const libraryShelf = document.querySelector("#library-shelf")
const typeInputs = Array.from(document.querySelectorAll(".type-input"));
typeInputs.forEach(element => element.addEventListener("keyup", checkInput))

function checkInput() {
    submitBtn.disabled = false;
    typeInputs.forEach(input => {
        if(input.value.trim() == "") {
            submitBtn.disabled = true;
        }
    })
}

function Book(title, author, pages, read, id) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
    this.id = id;
}

function addBookToLibrary() {
    bookId ++;
    let title = titleInput.value;
    let author = auhorInput.value;
    let pages = pagesInput.value;
    let read = (readInput.value == "on" ? "READ" : "NOT READ");
    let id = bookId;
    let newBook = new Book(title, author, pages, read, id);
    bookLibrary.push(newBook);
    hideForm();
    bookForm.reset();
    submitBtn.disabled = true;
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

function deleteBook(e) {
    let targetedId = e.target.parentElement.id;
    document.querySelector(`[id='${targetedId}']`).remove();
    bookLibrary = bookLibrary.filter(book => book.id != targetedId);
    bookId --;
}

function renderBook(book) {
    let singleBook = document.createElement("div");
    singleBook.setAttribute("class", "book");
    singleBook.setAttribute("id", bookId);
    singleBook.innerHTML = `<button class="delete-btn">X</button>
                            <div>Title: ${book.title}</div>
                            <div>Author: ${book.author}</div>
                            <div>Pages: ${book.pages}</div>
                            <button class="read-btn">${book.read}</button>`;
    let deleteBtn = singleBook.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteBook);
    libraryShelf.appendChild(singleBook);
}