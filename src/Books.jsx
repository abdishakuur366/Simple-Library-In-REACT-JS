import React, { useState, useEffect } from 'react'
import  './Books.css'
import avator1 from'./images/avator1.png'
import avator2 from './images/avator2.jpg'
import avator3 from './images/avator3.png'
import avator4 from './images/avator4.png'
import avator5 from './images/avator5.JPG'
import avator6 from './images/avator6.png'
import { FaUser } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Books() {
    const [books, setBooks]=useState([
        {
            id: 1,
            title: "Stop requiring innovation heroism!",
            body:"labore et dolore magllamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

            author: "Abdishakuur",
            avator:avator1,
        },
        {
            id: 2,
            title: "How to Become a Good Backend Engineer",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

            author: "Suzanne Collins",
            avator:avator2
        },
        {
            id: 3,
            title: "The Hunger Games: Mockingjay - Start a New Life",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            author: "Suzanne Collins",
            avator:avator3
        },
        {
            id: 4,
            title: "14 things I wish I knew at 25 (now that I’m 38)",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            author: "Suzanne Collins",
            avator:avator4
        },
        {
            id: 5,
            title: "The Hunger Games: Mockingjay - Start a New Life",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            author: "Suzanne Collins",
            avator:avator5
        },
        {
            id: 6,
            title: "The Hunger Games: Mockingjay - Start a New Life",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            author: "Suzanne Collins",
            avator:avator6
        },
        {
            id: 7,
            title: "The Hunger Games: Mockingjay - Start a New Life",
            body:" sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            author: "Suzanne Collins",
            avator:avator6
        }
    ]) 
    //Delete Individual Book Function
    const deleteBook = (id) => {
        let newBooks = books.filter((book) => book.id !== id);
        setBooks(newBooks);
    }
    //Delete All Books Function
    const deleteAll=()=>{
        setBooks([])
    }
    //UseEffect marka [] empty array lagu daro waxaa la wacaa bis marka shaashada lasoo galo,
    //Lkn haddii aad empty array ka tagid [] mar kasto oo page kaaada state ka dhaco waa la wacaa
    //
    const [name, setName]= useState("shakra")
    useEffect(
        ()=>{
            console.log("Running")
        },
        [name]
    )
  return (
    <div className='wrapper'>
        
        
        <div className='nav'>
            <div className="logo">
                <a href="/"><h1>Abdi <span>Shakuur</span></h1></a>
                <hr />
            </div>
            <div className="navBar">
            <ol>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">About Us</a></li>
            </ol>
            </div>
        </div>
        <h1 className='ourBooks'>Our Books</h1>
        <hr />
        <button onClick={()=>deleteAll()} className='btnClear'>CLEAR ALL</button>
            
            {
                books.map((book)=> 
                <div className='BookCard' key={book.id}>
                        <img src={book.avator}  alt='waa lagu maqan yahay' />
                        <div className='BookCard__content'>
                            <h3 className='title'>{book.title} <hr /></h3>
                            <p className='bo'>{book.body}</p>
                            <h4 className='author'> <FaUser className='icon'/>{book.author}</h4>
                            <button onClick={()=>deleteBook(book.id)} className='delete'>DELETE</button>
                        </div> 

                </div>)
            }
            {/* <button onClick={()=>{setName("Hassan")}}>Update</button>
            <p>{name}</p> */}
            

                            {/* <div clasnsName="footer">
                                <h1>This is my FOOTER</h1>
                                <p>&copy; CopyRight 2023 Abdishakur    </p>
                                <a href="https://www.facebook.com/shakraxasanxaaji/"><FaFacebook/></a>
                                <a href="https://www.twitter.com/@shakr21372/"><FaTwitter/></a>
                                <a href="https://www.instagram.com/shakraxasanxaaji/"><FaInstagram/></a>
                            </div> */}

                            <div className="dambe">
                                <h1>This is my FOOTER</h1>
                                <p className=' h'>&copy; CopyRight 2023 Abdishakur    </p>
                                <div className="social">
                                <h5>My Social Accounts</h5>
                                <a href="https://www.facebook.com/shakraxasanxaaji/"><FaFacebook/></a>
                                <a href="https://www.twitter.com/@shakr21372/"><FaTwitter/></a>
                                <a href="https://www.instagram.com/shakraxasanxaaji/"><FaInstagram/></a>
                                </div>
                            </div>
            
    </div>
  )
}

export default Books