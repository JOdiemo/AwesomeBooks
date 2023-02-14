/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line quotes */
const addBtn = document.getElementsByClassName('addBtn')[0];
const bookLibrary = document.getElementsByClassName('library')[0];

class Book {
  constructor(author, title){
  this.title = title;
  this.author = author;
  }
}

class BookArray  {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('library')) || [];
  }

  addBooks (author, title) {
    if (author !== '' && title !== ''){
      const book = new Book(author, title);
      this.books.push(book);
      localStorage.setItem('library', JSON.stringify(this.books));
    }
  }

  remove (field)  {
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
  let bookDisplay = ``;
  library.books.forEach((element, i) => {
    bookDisplay += `
    <div class="book" id= "${i}">
    <p>"${element.title}" by ${element.author}</p>
    <button class="removeBtn" onclick="removeBtn(${i})">Remove</button>
    </div>
    `
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


window.addEventListener('DOMContentLoaded', () => {
  display();
});
