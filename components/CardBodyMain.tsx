import React from "react"
import styled from "styled-components"

type Data = {
  icon: string
  name: string
  id: string
  createAt: string
  tweet: string
}

const CardBodyMain = ({data}:{data:Data}) => {
  return (
    <>
      <Header>
        <div>
          <span><strong>{data.name}</strong></span>
          <span style={{color:"#536471"}}>{data.id}</span>
        </div>
        <span style={{color:"#536471"}}>・</span>
        <a href="#" style={{color:"#536471",textDecoration:"none"}}>{data.createAt}</a>
      </Header>
      <p style={{fontSize:'15px',padding:0,margin:0}}><MultiLineBody body={data.tweet} /></p>
    </>
  )
}

const MultiLineBody = ({body}:{body:string}) => {
  const text = body.split('\n').map((item, i) => (
    <React.Fragment key={i}>
      {item}<br/>
    </React.Fragment>
  ))
  return <>{text}</>
}

const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  > div {
    display: flex;
    align-items: center;
    gap: 0 8px;
  }
`

export default CardBodyMain