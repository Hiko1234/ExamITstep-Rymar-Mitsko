import React from "react";

const Test = (props) => {
  const { text } = props;
  const { children } = props;
  console.log(props);
  return <div>{children}</div>;
};

export default Test;
