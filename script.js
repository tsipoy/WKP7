console.log('It works!')

const libraries = [
    {
        title: 'Little woman',
        author: 'Lisa Alcott',
        genre: 'Novel',
        pages: 50,
        read: true,
   },
    {
        title: 'HarryPotter',
        author: 'Natacha',
        genre: 'Novel',
        pages: 100,
        read: true,
   },
    {
        title: 'Little woman 1',
        author: 'Lisa Alcott 2',
        genre: 'Novel 2',
        pages: 150,
        read: false,
    },

];

// Grab elements
const listContent = document.querySelector('.list-content');

// show the library list from the array

// const libraryList = (arr) => {
//     return arr.map(library => {
//         const html = `
//             <ul>
//                 <li>${library.title}</li>
//                 <li>${library.author}</li>
//                 <li>${library.pages}</li>
//                 <li>${library.genre}</li>
//                 <li>${library.read}</li>
//             </ul>
//         `;
//     }).join('');
//     listContent.insertAdjacentHTML('afterbegin', html)
// };

const libraryList = (arr) => {
    return arr.map(library => {
        const listHtml = `
                <li>${library.title}</li>
                <li>${library.author}</li>
                <li>${library.pages}</li>
                <li>${library.genre}</li>
                <li>${library.read}</li>
    `;
        listContent.insertAdjacentHTML('afterbegin', listHtml);
    });
};
libraryList(libraries);