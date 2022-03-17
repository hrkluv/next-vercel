import { GetStaticProps } from "next"
import { useState } from "react"

export default function Sg({ random }: {random: number}) {
  const [num, setNum] = useState(random)
  return (
    <div>
      <p>SGで生成されたページ</p>
      <em>{num}</em>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const random = Math.floor( Math.random() * 100 )
  return {
    props: {
      random
    }
  }
}