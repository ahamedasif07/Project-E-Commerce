import React, { useContext, useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';
import { MyContext } from '../../MainLayOut'; // Fixed the potential typo in context name

const ChildrenBooks = () => {
  const { data } = useContext(MyContext); // Ensure you're importing the correct context
  const [Data, setData] = useState([]);
  const [bookCategory] = useState("Children's Books");
  const [childrenBooks, setChildrenBooks] = useState([]);
  const [viewList, setViewList] = useState(10);

  // Update Data when the context's data changes
  useEffect(() => {
    setData(data);
  }, [data]);

  // Filter books based on the category
  useEffect(() => {
    const filteredBooks = Data.filter(
      (book) => book.bookCategory.toLowerCase() === bookCategory.toLowerCase()
    );
    setChildrenBooks(filteredBooks);
  }, [bookCategory, Data]);

  return (
    <div className="max-w-screen-2xl mx-auto md:px-[50px] px-4">
      <div className="py-[100px]">
        <div className="flex flex-col group justify-center items-center">
          <h2 className="text-gray-800 font-semibold text-lg">
            CHILDREN’S <span className="text-[#ED1B24]">BOOKS</span>
          </h2>
          <p className="h-[4px] text-center bg-yellow-500 w-[40px] group-hover:w-[160px] ease-in-out duration-300"></p>
        </div>
        <div className="mt-6 py-4">
          <div className="grid lg:grid-cols-5 px-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 justify-center items-center">
            {childrenBooks.slice(0, viewList).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>

        {viewList < childrenBooks.length && (
          <button
            onClick={() => setViewList(viewList + 5)}
            className="bg-red-500 flex items-center gap-2 justify-center hover:bg-red-600 rounded-md mx-auto text-[14px] px-2 py-2 text-white"
          >
            View <span className="text-white text-[12px]">More</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ChildrenBooks;
