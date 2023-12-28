
// make library array
const theLibrary = [];

//construction for book object
class book{
    constructor(title, author, page, year){
        this.title = title;
        this.author = author;
        this.page = page;
        this.year = year;
        this.read = 'not read';
    }

    info = () =>{
        return `${this.title} by ${this.author}, ${this.page} page, made in${this.year} ${this.read}`
    }
}



//put the element from html
let delList = document.querySelectorAll('#delete');
let add = document.querySelector("#add");
let formBG = document.querySelector('.formBG');
let cancel = document.querySelector("#cancel");
let table = document.querySelector("#table");
let title = document.querySelector('#bookTitle');
let page = document.querySelector('#page');
let author = document.querySelector('#author');
let year = document.querySelector('#year');
let submit = document.querySelector('#submit');
let readlist = document.querySelectorAll('#read');

//make button action
add.addEventListener('click', ()=> {
    formBG.classList.remove('hidden')
})

cancel.addEventListener('click', () => {
    formBG.classList.add('hidden')
})


//checking form are fill or not
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
//function to add book object to library array
function addBookToLibrary(title, page, author, year){
    theLibrary.push(new book(title.value, author.value, page.value, year.value))
}


//make submit to add the book to library
let a = 0
submit.addEventListener('click', () =>{
    if(check(title) === 1 || check(author) === 1 || check(year) === 1 || check(page) === 1){
        return
    }
    else{
        addBookToLibrary(title, page, author, year);
        formBG.classList.add('hidden');
        showBook(theLibrary[a])
        a +=1
    }
    
})

//function to show the book
function showBook(book){

    let tr = document.createElement('tr');
    tr.id = book.title;
    table.appendChild(tr);
    makeTable(tr, book, 'title');
    makeTable(tr, book, 'author');
    makeTable(tr, book, 'page');
    makeTable(tr, book, 'year');
    makeCheckBox(tr);
    makeDelete(tr);

}
//function to make table
function makeTable(parent, book, ele){
    let Ele = document.createElement('td');
    Ele.textContent = book[ele];
    parent.appendChild(Ele);
}
//function to make delete button
function makeDelete(parent){
    let td = document.createElement('td');
    td.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>'
    td.id = 'delete';
    parent.appendChild(td);
    td.addEventListener('click', () => {
        let parent = td.parentNode
        let no = theLibrary.findIndex((x)=>{return x.title == parent.id})
        a -= 1
        theLibrary.splice(no, 1);
        parent = document.getElementById(parent.id);
        parent.parentNode.removeChild(parent);
    });
}

function makeCheckBox(parent){
    let td = document.createElement('td')
    let cb = document.createElement('input');
    cb.setAttribute('type', 'checkbox');
    cb.id = 'read';
    cb.setAttribute('name', 'read');
    td.appendChild(cb);
    parent.appendChild(td)
    cb.addEventListener('click', () =>{
        let no = theLibrary.findIndex((x)=>{return x.title == parent.id});
        if(cb.checked == true){
            theLibrary[no].read = 'read'
        }
        else{
            theLibrary[no].read = 'not read'
        }
    })
}








