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

function check(form){
    if (form.value === ""){
        form.classList.add('invalid')
        return 1;
    } 
    else{
        if(form.classList.contains('invalid')){
            form.classList.remove('invalid')
        }
        return 0;
    }
}

function addBookToLibrary(title, page, author, year){
    theLibrary.push(new book(title.value, author.value, page.value, year.value))
}

let submit = document.querySelector('#submit');

let form = document.querySelectorAll('.form');

submit.addEventListener('click', () =>{
    if(check(title) === 1 || check(author) === 1 || check(year) === 1 || check(page) === 1){
        return
    }
    else{
        addBookToLibrary(title, page, author, year);
        formBG.classList.add('hidden');
    }
    
})