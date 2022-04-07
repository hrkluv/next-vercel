import React from "react"
import styled from "styled-components"
import CardBodyActions, {IconsObj} from "../components/CardBodyActions"

type Data = {
  icon: string
  name: string
  id: string
  createAt: string
  tweet: string
}
type Dataa = {
  [key: string]: string | number
}

type StaticProps = {
  iconsObj: IconsObj[]
  data: Data
}

const Icon = ({src}:{src:string}) => <StyledIcon><img src={src} width="100%" /></StyledIcon>

const CardBodyHeader = ({data}) => (
  <StyledCardBodyHeader>
    <div>
      <span><strong>{data.name}</strong></span>
      <span style={{color:"#536471"}}>{data.id}</span>
    </div>
    <span style={{color:"#536471"}}>・</span>
    <a href="#" style={{color:"#536471",textDecoration:"none"}}>{data.createAt}</a>
  </StyledCardBodyHeader>
)

const CardBodyArticle = ({data}) => {
  return (
    <p style={{fontSize:'15px',padding:0,margin:0}}><MultiLineBody body={data.tweet} /></p>
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

const Card = (
  {
    iconsObj,
    data
  }: StaticProps
) => {
  return (
    <Wrapper>
      <Icon src={data.icon} />
      <CardBody>
        <CardBodyHeader data={data} />
        <CardBodyArticle data={data} />
        <CardBodyActions iconsObj={iconsObj} style={{color:'#f00'}} />
      </CardBody>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 0 16px;
`
const StyledIcon = styled.div`
  flex-basis: 48px;
`
const CardBody = styled.div`
  flex: 1;
`
const StyledCardBodyHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  > div {
    display: flex;
    align-items: center;
    gap: 0 8px;
  }
`

export default Card