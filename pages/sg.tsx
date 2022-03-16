export default function Sg({ random }: {random: number}) {
  return (
    <div>
      <p>SGで生成されたページ</p>
      <em>{random}</em>
    </div>
  )
}

export async function getStaticProps() {
  const random = Math.floor( Math.random() * 100 )

  return {
    props: {
      random
    }
  }
}