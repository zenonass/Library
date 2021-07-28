let myLibrary = [];
const cardsContainer = document.querySelector('.cards-container');
const addNewBook = document.querySelector('#add-new-book');
const submitForm = document.querySelector('#submit-book-form');
const submitButton = document.querySelector('#btn-submit');


const author = document.querySelector('#author');
const title = document.querySelector('#title');
const pages = document.querySelector('#pages');
const read = document.querySelector('.btn-read');

function Book(author, title, pages, read) {
  this.author = author
  this.title = title
  this.pages = pages
  this.read = read
}

addNewBook.addEventListener('click', ()=> {
  submitForm.style.display = 'inline-block';
  cardsContainer.style.filter = 'blur(5px)';
})

read.addEventListener('click', ()=>{
  if (read.textContent === "Read") {
    read.style.backgroundColor = "#da9797";
    read.textContent = "Not Read";
  }
  else {
    read.style.backgroundColor = "#d3ffcd";
    read.textContent = "Read";
  }
  
})


submitButton.addEventListener('click',(e) =>{
  e.preventDefault()
  const newBook = new Book(author.value, title.value,`Pages: ${pages.value}`, read.textContent);
  myLibrary.push(newBook)
  submitForm.style.display = 'none';
  cardsContainer.style.filter = 'none';
  resetFormValues()
  createBooks()
  console.log(myLibrary);
})

function resetFormValues(){
  author.value = '';
  title.value = '';
  pages.value = '';
}

function clearBooks(){
  cardsContainer.innerHTML='';
}

function createBooks(){
    clearBooks()
    myLibrary.forEach((book, index) => {
      const newCard = document.createElement("div");
      const author = document.createElement('div');
      const title = document.createElement('div');
      const pages = document.createElement('div');
      const read = document.createElement('button');
      const deleteCard = document.createElement('button');

      author.textContent = book.author;
      title.textContent = book.title;
      pages.textContent = book.pages;
      read.textContent = book.read;
      deleteCard.textContent = "Delete";

      deleteCard.value = index

      author.classList.add("card-item")
      title.classList.add("card-item")
      pages.classList.add("card-item")
      read.classList.add("card-item","btn-read")
      deleteCard.classList.add("card-item", "btn-delete")
      newCard.classList.add("card")

      newCard.appendChild(author);
      newCard.appendChild(title);
      newCard.appendChild(pages);
      newCard.appendChild(read);
      newCard.appendChild(deleteCard);
      cardsContainer.appendChild(newCard);
  });
  const deleteCardButtons = document.querySelectorAll('.btn-delete');
      deleteCardButtons.forEach(deleteCardButton => {
        deleteCardButton.addEventListener('click', ()=> {
          deleteCardButton.parentElement.remove();
          myLibrary.splice(deleteCardButton.value)
          });
        })
};