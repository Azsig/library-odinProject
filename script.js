const theLibrary = [];

function book(title, author, page, year){
    this.title = title;
    this.author = author;
    this.page = page;
    this.year = year;
    this.info = () => {
        info = title + ' ' + author + ' ' + page + ' ' + year;
        return info;
    }

}

let add = document.querySelector("#add");
let formBG = document.querySelector('.formBG')
let cancel = document.querySelector("#cancel")
add.addEventListener('click', ()=> {
    formBG.classList.remove('hidden')
})

cancel.addEventListener('click', () => {
    formBG.classList.add('hidden')
})

let title = document.querySelector('#bookTitle');
let page = document.querySelector('#page');
let author = document.querySelector('#author');
let year = document.querySelector('#year');

function addBookToLibrary(title, page, author, year){
    theLibrary.push(book(title.value, author.value, page.value, year.value))
}

let submit = document.querySelector('#submit');

submit.addEventListener('click', () =>{
    addBookToLibrary(title, page, author, year);
})