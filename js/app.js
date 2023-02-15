/* eslint-disable import/extensions */
import Book from './Book.js';

const addBtn = document.getElementsByClassName('addBtn')[0];
const bookLibrary = document.getElementsByClassName('library')[0];

class BookArray {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('library')) || [];
  }

  addBooks(author, title) {
    if (author !== '' && title !== '') {
      const book = new Book(author, title);
      this.books.push(book);
      localStorage.setItem('library', JSON.stringify(this.books));
    }
  }

  remove(field) {
    this.books.splice(field, 1);
    localStorage.setItem('library', JSON.stringify(this.books));
  }
}

const library = new BookArray();

function display() {
  if (localStorage.getItem('library') == null) {
    library.books = [];
  } else {
    library.books = JSON.parse(localStorage.getItem('library'));
  }
  let bookDisplay = '';
  library.books.forEach((element, i) => {
    bookDisplay += `
    <div class="book" id= "${i}">
    <p>"${element.title}" by ${element.author}</p>
    <button class="removeBtn" id="${i}">Remove</button>
    </div>
    `;
  });
  bookLibrary.innerHTML = bookDisplay;
}

addBtn.addEventListener('click', () => {
  const author = document.getElementById('author').value.trim();
  const title = document.getElementById('title').value.trim();
  library.addBooks(author, title);
});

function removeBtn(bookID) {
  library.remove(bookID);
  display();
}

const lib = document.querySelector(".library");
lib.addEventListener("click", function(e){
  if (e.target.classList.contains('removeBtn')) {
      const bookID = e.target.id;
      removeBtn(bookID);
  }
});
console.log(lib);

window.addEventListener('DOMContentLoaded', () => {
  display();
});
