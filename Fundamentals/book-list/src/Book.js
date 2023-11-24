export const Book =(props)=>{
    const {author,img,title,number}=props;
    // const displayTitle=()=>{
    //     console.log(title);
    // }
    // const getSingleBook= ()=>{
    //     getBook(id);
    // }
    return (
        <article className='book'>
            <span className="number">#{number+1}</span>
            <img src={img}/>
            <h2>{title}</h2>
            <h4>{author}</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus purus nisi, laoreet nec justo id, molestie fermentum metus. Suspendisse vehicula ex accumsan nisi faucibus venenatis. I</p>
            <button>Click Me!</button>
            {/* <button onClick={getSingleBook}>Click Me!</button> */}
            {/* <p>{props.job}</p>
            <p>{props.number}</p>
            <p>{props.title}</p> */}
        </article>
    );
}