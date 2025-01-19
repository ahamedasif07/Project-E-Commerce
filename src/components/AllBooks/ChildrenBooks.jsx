import React, { useContext, useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';
import { DataContext } from '../../MainLayOut';


const ChildrenBooks = () => {
  const {data} =useContext(DataContext)
  const [bookCategory,setBookCategory]=useState("Children's Books")
  const [childrenBooks,setChildrenBooks]=useState([])
    // const childrenBooksData = [

    //     {
    //       id: 1,
    //       bookCategory: "Children's Books",
    //       image: "https://i.ibb.co.com/FW5D5QM/images-14.jpg",
    //       bookName: "Magic Adventures",
    //       price: 14.99,
    //       discountPrice: 10.99,
    //       discountPercentage: 27
    //     },
    //     {
    //       id: 2,
    //       bookCategory: "Children's Books",
    //       image: "https://i.ibb.co.com/w6VCv0r/images-9.jpg",
    //       bookName: "Fairy Tales",
    //       price: 12.99,
    //       discountPrice: 9.49,
    //       discountPercentage: 27
    //     },
    //     {
    //       id: 3,
    //       bookCategory: "Children's Books",
    //       image: "https://i.ibb.co.com/0m8sb4D/images-10.jpgshttps://i.ibb.co.com/f1XbfgR/images-11.jpg",
    //       bookName: "Learn to Count",
    //       price: 8.75,
    //       discountPrice: 6.49,
    //       discountPercentage: 26
    //     },
    //     {
    //       id: 4,
    //       bookCategory: "Children's Books",
    //       image: "https://i.ibb.co.com/Hp1pDkr/images-15.jpg",
    //       bookName: "Bedtime Stories",
    //       price: 10.50,
    //       discountPrice: 7.75,
    //       discountPercentage: 26
    //     },
    //     {
    //       id: 5,
    //       bookCategory: "Children's Books",
    //       image: "https://i.ibb.co.com/hVdWXK7/images-11.jpg",
    //       bookName: "Discover Nature",
    //       price: 13.99,
    //       discountPrice: 10.29,
    //       discountPercentage: 27
    //     },
    //     {
    //       id: 6,
    //       bookCategory: "Children's Books",
    //       image: "https://i.ibb.co.com/w6VCv0r/images-9.jpg",
    //       bookName: "Coloring Fun",
    //       price: 9.99,
    //       discountPrice: 7.49,
    //       discountPercentage: 25
    //     },
    //     {
    //       id: 7,
    //       bookCategory: "Children's Books",
    //       image: "https://i.ibb.co.com/0m8sb4D/images-10.jpgshttps://i.ibb.co.com/f1XbfgR/images-11.jpg",
    //       bookName: "Animal Kingdom",
    //       price: 16.75,
    //       discountPrice: 12.75,
    //       discountPercentage: 24
    //     },
    //     {
    //       id: 8,
    //       bookCategory: "Children's Books",
    //       image: "https://i.ibb.co.com/w6VCv0r/images-9.jpg",
    //       bookName: "Stories of Heroes",
    //       price: 11.50,
    //       discountPrice: 8.99,
    //       discountPercentage: 22
    //     },
    //     {
    //       id: 9,
    //       bookCategory: "Children's Books",
    //       image: "https://i.ibb.co.com/hVdWXK7/images-11.jpg",
    //       bookName: "Ocean Adventures",
    //       price: 15.75,
    //       discountPrice: 11.99,
    //       discountPercentage: 24
    //     },
    //     {
    //       id: 10,
    //       bookCategory: "Children's Books",
    //       image: "https://i.ibb.co.com/w6VCv0r/images-9.jpg",
    //       bookName: "Jungle Explorers",
    //       price: 18.99,
    //       discountPrice: 14.49,
    //       discountPercentage: 24
    //     },
    //     {
    //         id: 11,
    //         bookCategory: "Children's Books",
    //         image: "https://i.ibb.co.com/FW5D5QM/images-14.jpg",
    //         bookName: "Magic Adventures",
    //         price: 14.99,
    //         discountPrice: 10.99,
    //         discountPercentage: 27
    //       },
    //       {
    //         id: 12,
    //         bookCategory: "Children's Books",
    //         image: "https://i.ibb.co.com/w6VCv0r/images-9.jpg",
    //         bookName: "Fairy Tales",
    //         price: 12.99,
    //         discountPrice: 9.49,
    //         discountPercentage: 27
    //       },
    //       {
    //         id: 13,
    //         bookCategory: "Children's Books",
    //         image: "https://i.ibb.co.com/0m8sb4D/images-10.jpgshttps://i.ibb.co.com/f1XbfgR/images-11.jpg",
    //         bookName: "Learn to Count",
    //         price: 8.75,
    //         discountPrice: 6.49,
    //         discountPercentage: 26
    //       },
    //       {
    //         id: 14,
    //         bookCategory: "Children's Books",
    //         image: "https://i.ibb.co.com/Hp1pDkr/images-15.jpg",
    //         bookName: "Bedtime Stories",
    //         price: 10.50,
    //         discountPrice: 7.75,
    //         discountPercentage: 26
    //       },
    //       {
    //         id: 15,
    //         bookCategory: "Children's Books",
    //         image: "https://i.ibb.co.com/hVdWXK7/images-11.jpg",
    //         bookName: "Discover Nature",
    //         price: 13.99,
    //         discountPrice: 10.29,
    //         discountPercentage: 27
    //       }
    //   ];
  useEffect(()=>{
    const childrenBooks =data.filter(book => book.bookCategory.toLowerCase() === bookCategory.toLocaleLowerCase() )
    setChildrenBooks(childrenBooks)
  },[childrenBooks,bookCategory])
  const [viewList, setViewList] = useState(10);
  

  return (
    <div className='max-w-screen-2xl mx-auto md:px-[50px] px-4'>
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
  
      <button
        onClick={() => setViewList(viewList + 5)}
        className={`bg-red-500 hover:bg-red-600 rounded-md mx-auto text-[14px] px-2 py-2 ${
          viewList >= childrenBooks.length ? 'hidden' : 'block'
        } text-white`}
      >
        View <span className="text-white text-[14px]">More</span>
      </button>
    </div>
  </div>
  
  );
};

export default ChildrenBooks;
