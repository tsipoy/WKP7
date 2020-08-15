console.log('It works!')

const libraries = [
    {
        title: 'Little woman',
        author: 'Lisa Alcott',
        genre: 'Comedy',
        pages: 300,
        read: true,
    },
    {
        title: 'Northern light',
        author: 'Philip Paulman',
        genre: 'Novel',
        pages: 400,
        read: true,
    },
    {
        title: 'Harry Potter',
        author: 'Jk Rouling',
        genre: 'Fantasy',
        pages: 150,
        read: false,
    },

];

// Grab elements
const listContent = document.querySelector('.books');
const listBooks = document.querySelector('.books-list');
const addButton = document.querySelector('.add-button');
const form = document.querySelector('.add-book');
const bookTitle = title.querySelector('#title');
const bookAuthor = author.querySelector('#author');
const bookPages = page.querySelector('#page');
const bookGenre = genre.querySelector('#genre');
const bookstatus = document.querySelector('#status');



// Display the list 
const libraryList = () => {
    const listHtml= libraries.map(library => 
      `
            <ul class="books-list">
                <li>${library.title}</li>
                <li>${library.author}</li>
                <li>${library.genre}</li>
                <li>${library.pages}</li>
                <input type="checkbox" id="read" name="read">
                <button class="delete-button">Delete</button>
            </ul>
    `).join('');
        listBooks.insertAdjacentHTML('afterbegin', listHtml);
    
};
libraryList();

// hold state
let items = [];

const handleSubmit = e => {
    e.preventDefault();
    const title = e.currentTarget.value;
    const author = e.currentTarget.value;
    const genre = e.currentTarget.value;
    const pages = e.currentTarget.value;
    const status = e.currentTarget.value;

    if (!title) return;
    const item = {
        title: title,
        author: author,
        genre: genre,
        page: pages,
        status: status,
    };

    //  push it
    items.push(item);
    console.info(`There is ${items.length} here.`);
    e.terget.reset();
    listBooks.dispatchEvent(new CustomEvent('itemsUpdated'));
};

const displayItems = () => {
    console.log(items);
    const html = items
        .map(
            item =>
                ` 
                 <ul class="books-list">
                     <li>${item.title}</li>
                     <li>${item.author}</li>
                     <li>${item.genre}</li>
                     <li>${item.pages}</li>
                     <input type="checkbox" id="${item.id}" name="read">
                 </ul>`
        )
        .join('');
    listBooks.innerHTML = html;
};

const mirrorToLocalStorage = () => {
    console.info('mirroring items to local storage');
    localStorage.setItem('items', JSON.stringify(items));
};

const restoreFromLocalStorage = () => {
    console.info('Restoring from LS');
    const lsItems = JSON.parse(localStorage.getItem('items'));
    // check if there is something inside local storage
    if (lsItems) {
        // push has no limit for arguments
         items.push(...lsItems);
            listBooks.dispatchEvent(new CustomEvent('itemsUpdated'));
    }
};

// const deleteItems = (id) => {
//     console.log('deleting items', id);
//     items = items.filter(item => item.id !== id);
//     listBooks.dispatchEvent(new CustomEvent('itemsUpdated'));
// };

// const marksAsComplete = id => {
//     console.log(id);
//     const itemRef = items.find(item => item.id === id);
//     itemRef.complete = !itemRef.complete;
//     listBooks.dispatchEvent(new CustomEvent('itemsUpdated'));
// }


form.addEventListener('submit', handleSubmit);
// we listen for our own event, and launch the function displayItems, when clicking the button
listBooks.addEventListener('itemsUpdated', displayItems);
listBooks.addEventListener('itemsUpdated', mirrorToLocalStorage);

// listBooks.addEventListener('click', function (e) {
//     const id = parseInt(e.target.value);
//     if (e.target.matches('button.delete-button')) {
//         deleteItems(id);
//     }
//     if (e.target.matches('input[type="checkbox"]')) {
//         marksAsComplete(id);
//     }
// });

// restoreFromLocalStorage();
