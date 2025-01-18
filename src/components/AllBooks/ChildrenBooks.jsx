import React from 'react'
import BookCard from '../BookCard/BookCard';

const ChildrenBooks = () => {
    const childrenBooksData = [
        {
          id: 1,
          bookCategory: "Children's Books",
          image: "https://i.ibb.co.com/FW5D5QM/images-14.jpg",
          bookName: "Magic Adventures",
          price: 14.99,
          discountPrice: 10.99,
          discountPercentage: 27
        },
        {
          id: 2,
          bookCategory: "Children's Books",
          image: "https://i.ibb.co.com/w6VCv0r/images-9.jpg",
          bookName: "Fairy Tales",
          price: 12.99,
          discountPrice: 9.49,
          discountPercentage: 27
        },
        {
          id: 3,
          bookCategory: "Children's Books",
          image: "https://i.ibb.co.com/0m8sb4D/images-10.jpgshttps://i.ibb.co.com/f1XbfgR/images-11.jpg",
          bookName: "Learn to Count",
          price: 8.75,
          discountPrice: 6.49,
          discountPercentage: 26
        },
        {
          id: 4,
          bookCategory: "Children's Books",
          image: "https://i.ibb.co.com/Hp1pDkr/images-15.jpg",
          bookName: "Bedtime Stories",
          price: 10.50,
          discountPrice: 7.75,
          discountPercentage: 26
        },
        {
          id: 5,
          bookCategory: "Children's Books",
          image: "https://i.ibb.co.com/hVdWXK7/images-11.jpg",
          bookName: "Discover Nature",
          price: 13.99,
          discountPrice: 10.29,
          discountPercentage: 27
        },
        {
          id: 6,
          bookCategory: "Children's Books",
          image: "https://i.ibb.co.com/w6VCv0r/images-9.jpg",
          bookName: "Coloring Fun",
          price: 9.99,
          discountPrice: 7.49,
          discountPercentage: 25
        },
        {
          id: 7,
          bookCategory: "Children's Books",
          image: "https://i.ibb.co.com/0m8sb4D/images-10.jpgshttps://i.ibb.co.com/f1XbfgR/images-11.jpg",
          bookName: "Animal Kingdom",
          price: 16.75,
          discountPrice: 12.75,
          discountPercentage: 24
        },
        {
          id: 8,
          bookCategory: "Children's Books",
          image: "https://i.ibb.co.com/w6VCv0r/images-9.jpg",
          bookName: "Stories of Heroes",
          price: 11.50,
          discountPrice: 8.99,
          discountPercentage: 22
        },
        {
          id: 9,
          bookCategory: "Children's Books",
          image: "https://i.ibb.co.com/hVdWXK7/images-11.jpg",
          bookName: "Ocean Adventures",
          price: 15.75,
          discountPrice: 11.99,
          discountPercentage: 24
        },
        {
          id: 10,
          bookCategory: "Children's Books",
          image: "https://i.ibb.co.com/w6VCv0r/images-9.jpg",
          bookName: "Jungle Explorers",
          price: 18.99,
          discountPrice: 14.49,
          discountPercentage: 24
        }
      ];
      
      
  return (
    <div className='py-[100px] max-w-[1100px] mx-auto'>
       <div className='flex flex-col group justify-center mx-auto items-center'>
       <h2 className='text-gray-800 font-semibold text-lg '>CHILDREN’S <span className='text-[#ED1B24]'>BOOKS</span> </h2>
       <p className='h-[4px] text-center bg-yellow-500 w-[40px] group-hover:w-[160px] ease-in-out duration-300'></p>
       </div>
      <div className=' mt-6 p-4'>
      <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 justify-center items-center'>
        {childrenBooksData.map(book => <BookCard key={book.id} book={book}></BookCard> )}
       </div>

      </div>

    </div>
  )
}

export default ChildrenBooks