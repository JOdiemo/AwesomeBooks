const addBtn = document.getElementsByClassName('addBtn')[0]
const bookLibrary = document.getElementsByClassName('library')[0]
let books = [];

addBtn.addEventListener('click', (e) => {
  author = document.getElementById('author').value.trim();
  title = document.getElementById('title').value.trim()
  addBooks(author, title)
  display();
})

const addBooks = (Author, Title) => {
  if (Author !== '' && Title !== ""){
    const obj = {
      title: Title,
      author: Author
    }
    books.push(obj);
    localStorage.setItem('Book1', JSON.stringify(books))
  }
}

function display() {
  if (localStorage.getItem('Book1') == null) {
    books = []
  } else {
    books = JSON.parse(localStorage.getItem('Book1'))
  }
  let bookDisplay = ``;
  books.forEach((element, i) => {
    bookDisplay += `
    <div id= "book${i}">
    <p>${element.title}</p>
    <p>${element.author}</p>
    <button onclick = 'remove(${i})' >Remove</button>
    </div>
    `
   });
  bookLibrary.innerHTML = bookDisplay
}

const remove = (field) => {
  const BookIndex = books.findIndex((item, i) => i === field);
  books.splice(BookIndex, 1);
  localStorage.setItem('Book1', JSON.stringify(books))  
  display();
}

window.addEventListener('DOMContentLoaded', () => {
  display();
});