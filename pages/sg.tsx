import { GetStaticProps } from "next"

export default function Sg({ random }: {random: number}) {
  return (
    <div>
      <p>SGで生成されたページ</p>
      <em>{random}</em>
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