import React from "react"
import Image from "next/image"
import styled from "styled-components"
import CardBodyMain from "./CardBodyMain"
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
        <CardBodyMain data={data} />
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


export default Card