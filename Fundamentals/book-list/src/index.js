import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {books} from './books';
import {Book} from './Book';
const BookList=()=>{
    // const getBook=(id)=>{
    //     const book= books.find((book)=>book.id==id);
    //     console.log(book);
    // }
    return(
        <section className='book-list'>
        {/* <EventExamples/> */}
        <h1>Amazon Best Sellers</h1>
        <div className='books'>
        {books.map((book,index) => {
            return(<Book {...book} key={book.id} number={index} />    
                // <Book author={book.author} title={book.title} img={book.img} />
                // <Book author={author} title={title} img={img} key={index}/>
                // <Book book={book} key={index}/>
            );
        })}
        </div>
        {/* <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
        <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} /> */}
        {/* <Book title="random title" number={22}/> */}
    </section>
)
}

// const EventExamples= ()=>{
//     const handleFormInput=(e)=>{
//         console.log(e);
//         console.log("form input");
//     };
//     const handleButtonInput=()=>{
//         alert("button click");
//     };
//     const handleFormSubmission=(e)=>{
//         e.preventDefault();
//         console.log("form submit");
//     };
//     return(
//         <section>
//             {/* Submite basıldığında, handleFormSubmission fonksiyonu çalışacak. */}
//             <form> 
//                 <h2>Typical Form</h2>
//                 <input onChange={handleFormInput} type="text" style={{margin:'15px'}}/>
//                 <button type='button' onClick={handleButtonInput}>Click Me!</button>
//                 <button type='submit'>Submit</button>
//             </form>
//         </section>
//     );
// }
// const Image =()=> <img src="https://images-na.ssl-images-amazon.com/images/I/7110baO-5UL._AC_UL450_SR450,320_.jpg"/>
// const Title =()=> <h2>{title}</h2>
// const Author =()=><h4>{author}</h4>

const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);