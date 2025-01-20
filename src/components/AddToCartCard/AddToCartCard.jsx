/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import {  MyContex,  } from '../../MainLayOut';

const AddToCartCard = ({ book, addToCart }) => {
    const {handleRemoveFromCart} = useContext(MyContex);
    const { name, image, bookCategory, bookName, price, discountPrice, discountPercentage } = book;

    // State to manage quantity
    const [quantity, setQuantity] = useState(1);

    // Function to increase quantity
    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    // Function to decrease quantity
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    // Calculate total price based on quantity
    const totalPrice = (price * quantity).toFixed(2);

    // Calculate total count of items
    const totalCount = addToCart ? addToCart.reduce((count, item) => count + item.quantity, 0) : 0;

    // Calculate total cart price
    const totalCartPrice = addToCart
        ? addToCart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)
        : 0;

    console.log("addToCart: ", addToCart);
    console.log("Total count: ", totalCount);
    console.log("Total price: ", totalCartPrice);

    return (
        <div>
            <div className="p-6 my-4 max-w-3xl mx-auto border rounded-lg shadow-md bg-white">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Product Image */}
                    <div className="flex items-center gap-4 mb-4 lg:mb-0">
    <div className="relative w-[150px] h-[150px] md:w-[150px] md:h-[150px]">
        <img src={image} alt={name} />
    </div>
    {/* Product Info */}
    <div>
        <h3 className="font-semibold text-lg text-black">{name}</h3>
        <p className="text-md  text-gray-500">
            {bookCategory} 
        </p>
        <p className="text-sm py-1 text-gray-500">
            {bookName} 
        </p>
        <p className="text-sm text-gray-500">
            ${price}
            {discountPrice && (
                <span className="ml-2 line-through text-gray-400 text-sm">
                    ${discountPrice}
                </span>
            )}
        </p>
        <p className="text-sm text-green-500">
            {discountPercentage && `-${discountPercentage}%`}
        </p>
    </div>
</div>

                    {/* Quantity and Actions */}
                    <div className="flex items-center gap-6 flex-wrap lg:flex-nowrap">
                        <div className="flex items-center border rounded-md">
                            <button
                                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                onClick={decreaseQuantity}
                            >
                                -
                            </button>
                            <input
                                type="number"
                                value={quantity}
                                readOnly
                                className="w-12 text-center border-l border-r"
                            />
                            <button
                                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                onClick={increaseQuantity}
                            >
                                +
                            </button>
                        </div>
                        <p className="font-semibold text-gray-700">
                            ${price}
                        </p>
                    </div>
                    
                </div>
                {/* Total Price and Actions */}
                <div className="flex flex-col lg:flex-row justify-between items-center mt-4">
                    <div>
                        <p className="text-lg ml-[30px] font-semibold text-gray-700">
                            Total: ${totalPrice}
                        </p>
                    </div>
                    <div className="flex items-center gap-4 mt-4 lg:mt-0">
                        <button onClick={()=>handleRemoveFromCart(book)}
                            className="text-[18px] text-gray-700 hover:text-red-500 transition-all duration-300"
                        >
                            <RiDeleteBinLine />
                        </button>
                        <button className="px-6 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-600">
                            Buy Now
                        </button>
                    
                
            </div>
            </div>
        </div>
        </div>
    );
};

export default AddToCartCard;
