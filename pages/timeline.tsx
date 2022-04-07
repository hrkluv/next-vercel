import { useState } from "react"
import { GetStaticProps } from "next"
import styled from "styled-components"
import Card from "../components/Card"
import { IconsObj } from "../components/CardBodyActions"

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
  data: Data[]
}


export default function Timeline(
    {
      iconsObj,
      data
    }: StaticProps
  ) {
    console.log(data)
  return (
    <Container>
      {
        data.map((d,i) => (
          <Card key={i} iconsObj={iconsObj} data={d} />
        ))
      }
      
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = [
    {
      icon: '/icon.png',
      name: '堀田真由',
      id: '@Mayu_Hotta',
      createAt: '57分',
      tweet: 'トリートメントして前髪切ってきたんだけど\n巻いてもらいました。今日1日はかわいい。\nかわよいよ'
    }
  ]
  const iconsObj: IconsObj[] = [
    {
      type: 'comment',
      src: '/comment.svg',
      count: 0,
    },
    {
      type: 'retweet',
      src: '/retweet.svg',
      count: 10,
    },
    {
      type: 'iine',
      src: '/iine.svg',
      count: 100,
    },
    {
      type: 'upload',
      src: '/upload.svg'
    },
    {
      type: 'analytics',
      src: '/analytics.svg'
    }
  ]
  return {
    props: {
      iconsObj,
      data
    }
  }
}

const Container = styled.div`
  width: 600px;
  background-color: #fff;
  padding: 16px 20px;
  border: 1px solid #333;
`