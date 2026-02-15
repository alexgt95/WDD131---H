const books = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];

const bookList = document.getElementById('book-list'); //This is the array like container or parent element that will hold the book articles. We are using getElementById to select the element with the id of 'book-list' and storing it in the variable bookList.
books.forEach(book => {
    const article = document.createElement('article'); //creating a new instance of a DOM Object. We are creating a new article element for each book in the books array. This will be the container for each book's information.
    article.className = 'book';

    let html = `
        <h2>${book.title}</h2>
        <img src=${book.imgSrc} alt="${book.imgAlt}">
        <p><strong>Release Date:</strong>${book.date}</p>
        <p><strong>Recommended Age:</strong>${book.ages}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
        <p><strong>Rating:</strong> <span aria-label="${book.stars.length} out of 5 stars" role="img">${book.stars}</span></p>
        <p id='desc'>${book.description}</p>`;

    article.innerHTML = html;
    bookList.appendChild(article); //appending the article element we just created to the bookList element in the DOM. This will add the new article to the page for each book in the books array.

});
