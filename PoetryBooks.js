import React, { useState } from 'react';
import './Books.css';

const PoetryBooks = () => {
  const [titleSearch, setTitleSearch] = useState('');
  const [authorSearch, setAuthorSearch] = useState('');
  const books = [
    {
      title: 'Paradise Lost',
      author: 'John Milton',
      image: 'https://th.bing.com/th/id/OIP.ItLLV_tV_ljdjBLdoEc7igHaLG?w=134&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      title: 'The Waste Land',
      author: 'T. S. Eliot',
      image: 'https://th.bing.com/th/id/OIP.r5iTCzh1h0Ak1HECMlre7wHaLH?w=202&h=304&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      title: 'Paradise Lost',
      author: 'J A Jance',
      image: 'https://th.bing.com/th/id/OIP.uhdJLym1WQZ_lunic1x2gAHaLB?w=202&h=301&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      title: 'Leaves of Grass',
      author: 'Walt Whitman',
      image: 'https://th.bing.com/th/id/OIP.VwnKV_bwhG9or6EIseTrxwAAAA?w=125&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
   
    {
      title: 'The Divine Comedy',
      author: 'Dante Alighieri',
      image: 'https://th.bing.com/th/id/OIP.L1kPJ8gP7BwyFwqGrVrgQgHaJO?w=202&h=253&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
        title:"Hamlet",
        author:"William Shakespeare",
        image:"https://th.bing.com/th/id/OIP.yXWTQwdiAO-3t8SFAiqKFgHaL0?w=197&h=315&c=7&r=0&o=5&dpr=1.3&pid=1.7"
     },
     {
      title:"Titus Andronicus",
      author:"William Shakespeare",
      image:"https://th.bing.com/th/id/OIP.MRldbecLTrOBU06yrmU6DAHaLQ?w=202&h=308&c=7&r=0&o=5&dpr=1.3&pid=1.7"
   },
   {
    title:"Romeo and Juliet",
    author:"William Shakespeare",
    image:"https://th.bing.com/th/id/OIP.6yZEZaz5cXRATGI0-YaMgAHaL8?w=196&h=317&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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

  return (
    <>
      <h1>Poetry Books</h1>
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
          </li>
        ))}
      </ul>
    </>
  );
};

export default PoetryBooks;