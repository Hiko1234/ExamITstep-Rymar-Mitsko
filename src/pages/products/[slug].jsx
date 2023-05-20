import React from "react";
import { useRouter } from "next/router";

const SingleProduct = () => {
  // get the id from the url
  const router = useRouter();
  const { slug } = router.query;

  return <div>SingleProduct - {slug} </div>;
};

// Server Side
export const getServerSideProps = async (context) => {
  //get path params

  console.log(context);
  const slug = null;

  return {
    props: {
      slug,
    },
  };
};

export default SingleProduct;
