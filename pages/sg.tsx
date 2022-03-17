import { GetStaticProps } from "next"
import { useState } from "react"

export default function Sg({ random }: {random: number}) {
  const [num, setNum] = useState(random)
  return (
    <div>
      <p>SGで生成されたページ</p>
      <em>{num}</em>
      <button type="button" onClick={() => setNum(num + 1)}>change</button>
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