/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line quotes */
const addBtn = document.getElementsByClassName('addBtn')[0];
const bookLibrary = document.getElementsByClassName('library')[0];

class Book {
  constructor(author, title){
  this.tile = title;
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
    const BookIndex = this.books.findIndex((i) => i === field);
    this.books.splice(BookIndex, 1);
    localStorage.setItem('library', JSON.stringify(this.books));
  }
}

const library = new BookArray();

addBtn.addEventListener('click', () => {
  const author = document.getElementById('author').value.trim();
  const title = document.getElementById('title').value.trim();
  library.addBooks(author, title);
  console.log(library);
});