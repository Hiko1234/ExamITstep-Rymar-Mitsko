import React, { useEffect, useState } from "react";
import Link from "next/link";

const Products = ({ posts }) => {
  // Client Side
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    console.log(posts);
  }, []);
  return (
    <>
      <h1>Products</h1>
      <p>Products - 6</p>

      <Link href="/products/some-name-hadjkhfas2">products - 7</Link>

      <Link href="/products/8">products - 8</Link>

      <Link href="/products/9">products - 9</Link>

      <div>
        <div className="result">{count}</div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </>
  );
};

// Server Side
export const getServerSideProps = async (context) => {
  //get path params

  let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  posts = await posts.json();
  return {
    props: {
      posts,
    },
  };
};

export default Products;
