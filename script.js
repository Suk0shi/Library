const myLibrary = [];

function Book(title, author, pages, read, id) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.id = id
}

function addBookToLibrary() {
    //get input elements
    const inputTitle = document.getElementById("title");
    const inputAuthor = document.getElementById("author");
    const inputPages = document.getElementById("pages");
    const inputReadYes = document.getElementById("readYes");

    //get the values of the input elements
    const title = inputTitle.value;
    const author = inputAuthor.value;
    const pages = inputPages.value;
    const readYes = inputReadYes.checked;
    // const readNo = inputReadNo.value;
    
    let id = myLibrary.length + 1;

    const book = new Book(title ,author, pages, readYes, id)

    //add values to the array
    myLibrary.push(book);

    console.log(myLibrary);

    
}

function clearForm() {
    document.getElementById("title").value = '';
    document.getElementById("author").value = '';
    document.getElementById("pages").value = '';
    document.getElementById("readYes").checked = '';
}

function displayBooks() {

    for (books of myLibrary) {
        const container = document.querySelector('#container');

        const card = document.createElement('div');
        card.classList.add('card');
        container.appendChild(card);

        const displayTitle = document.createElement('p');
        displayTitle.classList.add('displayTitle');
        displayTitle.textContent = 'Title: ' 
        + books.title;
        card.appendChild(displayTitle);

        const displayAuthor = document.createElement('p');
        displayAuthor.classList.add('displayAuthor');
        displayAuthor.textContent = 'Author: ' 
        + books.author;
        card.appendChild(displayAuthor);

        const displayPages = document.createElement('p');
        displayPages.classList.add('displayPages');
        displayPages.textContent = 'Pages: ' 
        + books.pages;
        card.appendChild(displayPages);

        const displayRead = document.createElement('p');
        displayRead.classList.add('displayRead');

        
        if (books.read === true) {
            displayRead.textContent = 'Read: Read';
        } else {
            displayRead.textContent = 'Read: Not read';
        }
        card.appendChild(displayRead);

        const toggleRead = document.createElement('button');
        toggleRead.classList.add('toggleRead');
        toggleRead.textContent = 'Read'
        toggleRead.setAttribute("onClick", `id='bin', toggleRead(${books.id})`)
        card.appendChild(toggleRead);

        const deleteCard = document.createElement('button');
        deleteCard.classList.add('deleteCard');
        deleteCard.textContent = 'Delete'
        deleteCard.setAttribute("onClick", `id='bin', remove(${books.id})`)
        card.appendChild(deleteCard);
    }
}

function showForm() {
    document.getElementById('formElement').style.display = 'block';
    document.getElementById('formBackground').style.display = 'block';
}

function hideForm() {
    document.getElementById('formElement').style.display = 'none';
}

function toggleRead(rec) {
    var filt = myLibrary.filter((a,i)=>{
        if(rec == a.id){
            if (myLibrary[i].read === true) {
                myLibrary[i].read = false;
            } else if (myLibrary[i].read === false) {
                myLibrary[i].read = true;
            }
            
            clearDisplay();
            displayBooks();
        }
        console.log(myLibrary[i]);
    })
}

function remove(rec) { //just remove the function from the myLibrary array
    
    var filt = myLibrary.filter((a,i)=>{
        if(rec == a.id){
            myLibrary.splice(i, 1);
            clearDisplay();
            displayBooks();
        }
        console.log(myLibrary);
    })
    
}

function clearDisplay() {
    const container = document.querySelector('#container');
    console.log(container);
    while (container.firstChild) {
        container.removeChild(container.firstChild);
     }
}