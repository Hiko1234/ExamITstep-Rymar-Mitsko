import React from 'react'

const Container = (props: any) => {
    const { children } = props;
  return <div style={{maxWidth: "1207px", margin: "0 auto", padding: "0 15px"}}>{children}</div>
}

export default Container