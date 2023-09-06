import React, { useState } from 'react';
import './Books.css';

const FictionBooks = () => {
  const [titleSearch, setTitleSearch] = useState('');
  const [authorSearch, setAuthorSearch] = useState('');

  const books = [
    {
        title: 'The God of Small Things',
        author: 'Arundhati Roy',
        image: 'https://th.bing.com/th/id/OIP.PRvEXRIfqtGPs_SX7gFDcwAAAA?w=201&h=310&c=7&r=0&o=5&dpr=1.3&pid=1.7'
      },
    {
      title: 'The White Tiger',
      author: 'Aravind Adiga',
      image: 'https://th.bing.com/th/id/OIP.jLZ4Vl_LcNHPzgC8X4yd2gAAAA?w=202&h=308&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      title: 'Midnight’s Children ',
      author: 'Salman Rushdie',
      image: 'https://th.bing.com/th/id/OIP.0IlUL4ELTqjMYYyggV3oqwHaLc?w=201&h=310&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      title: 'Interpreter of Maladies',
      author: 'Jhumpa Lahiri',
      image: 'https://th.bing.com/th/id/OIP.If23xjD64CmT_Vebv88AwgHaLU?w=202&h=309&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
   
    {
      title: 'A Fine Balance',
      author: 'Rohinton Mistry ',
      image: 'https://th.bing.com/th/id/OIP.4f9E3oD00kLnc8lzo-bS8gHaLn?w=199&h=313&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
        title:"Malgudi Days",
        author:"R K Narayan",
        image:"https://th.bing.com/th/id/OIP.dEdu07IA3JwXJxCWF-25JAAAAA?w=202&h=287&c=7&r=0&o=5&dpr=1.3&pid=1.7"
     },
     {
      title:"The Guide",
      author:"R K Narayan",
      image:"https://th.bing.com/th/id/OIP.z1JMoBY6MQL-0PA9OUh5YQHaLq?w=199&h=313&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
            title:" Train to Pakistan",
            author:"Khushwant Singh ",
            image:"https://th.bing.com/th/id/OIP.YeafY8hMr_rspgnCN0rOMAHaLy?w=198&h=315&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
            title:"Chanakya’s Chant",
            author:"Ashwin Sanghi",
            image:"https://th.bing.com/th/id/OIP.fnDxk6xqGFr7kdwUYOyt6gAAAA?w=201&h=310&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
       
        {
            title:"The Devil’s Wind",
            author:" Manohar Malgonkar",
            image:"https://th.bing.com/th/id/OIP.WSR__Ci8lK3AFFJoo8D2igAAAA?w=109&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
  ];
  const handleTitleSearch = (event) => {
    setTitleSearch(event.target.value);
  };

  const handleAuthorSearch = (event) => {
    setAuthorSearch(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(titleSearch.toLowerCase()) &&
    book.author.toLowerCase().includes(authorSearch.toLowerCase())
  );

  const addToFavorites = (book) => {
    fetch('/api/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Book added to favorites:', data);
      })
      .catch((error) => {
        console.error('Error adding book to favorites:', error);
      });
  };

  return (
    <>
      <h1>Fiction Books</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title"
          value={titleSearch}
          onChange={handleTitleSearch}
        />
        <input
          type="text"
          placeholder="Search by author"
          value={authorSearch}
          onChange={handleAuthorSearch}
        />
      </div>
      <ul className="books-list">
        {filteredBooks.map((book) => (
          <li key={book.title} className="book-item">
            <img src={book.image} alt={book.title} />
            <div>
              {book.title} by {book.author}
            </div>
            <button onClick={() => addToFavorites(book)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FictionBooks;