import { GetServerSideProps } from "next"
import { useState } from "react"

export default function SSR({ random }: {random: number}) {
  const [num, setNum] = useState(random)
  return (
    <div>
      <p>SSRで生成されたページ</p>
      <em>{num}</em>
      <button type="button" onClick={() => setNum(num + 1)}>change</button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const random = Math.floor( Math.random() * 100 )

  return {
    props: {
      random
    }
  }
}

/*
export async function getServerSideProps() {
  const random = Math.floor( Math.random() * 100 )

  return {
    props: {
      random
    }
  }
}
*/