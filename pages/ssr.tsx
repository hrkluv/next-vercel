export default function SSR({ random }: {random: number}) {
  return (
    <div>
      <p>SSRで生成されたページ</p>
      <em>{random}</em>
    </div>
  )
}

export async function getServerSideProps() {
  const random = Math.floor( Math.random() * 100 )

  return {
    props: {
      random
    }
  }
}