let myLibrary = [];
const cardsContainer = document.querySelector('.cards-container');
const addNewBook = document.querySelector('#add-new-book');

function Book(author, title, pages, read) {
  this.author = author
  this.title = title
  this.pages = pages
  this.read = read
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

const bookOne = new Book('Steven Kingffffffffffffffff fffff hdfhdhdf', 'IT', 351, true);
const bookTwo = new Book('Batman', 'cool', 351, true);

addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
addBookToLibrary(bookTwo);
addBookToLibrary(bookOne);

myLibrary.forEach(book => {
    const newCard = document.createElement("div");
    const author = document.createElement('div');
    const title = document.createElement('div');
    const pages = document.createElement('div');
    const read = document.createElement('button');
    const deleteCard = document.createElement('button');
    newCard.style.width = "30vh";
    newCard.style.height = "30vh";
    newCard.style.border = "1px solid";
    newCard.style.backgroundColor = "grey";
    newCard.style.borderRadius = "5%";
    author.textContent = book.author;
    title.textContent = book.title;
    pages.textContent = book.pages;
    read.textContent = book.read;
    deleteCard.textContent = "Delete";
    author.classList.add("card-item")
    title.classList.add("card-item")
    pages.classList.add("card-item")
    read.classList.add("card-item","btn-read")
    deleteCard.classList.add("card-item", "btn-delete")
    newCard.appendChild(author);
    newCard.appendChild(title);
    newCard.appendChild(pages);
    newCard.appendChild(read);
    newCard.appendChild(deleteCard);
    newCard.classList.add("card")
    cardsContainer.appendChild(newCard);
});

