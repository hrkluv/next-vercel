// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
  id: string
  createAt: string
  tweet: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const data = [
    {
      name: '堀田真由',
      id: '@Mayu_Hotta',
      createAt: '57分',
      tweet: `トリートメントして前髪切ってきたんだけど、巻いてもらいました。今日1日はかわいい。<br/>かわよいよ`
    }
  ]
  res.status(200).json(data)
}
