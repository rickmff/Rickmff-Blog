import type {NextApiRequest, NextApiResponse} from 'next'
import {parseBody} from 'next-sanity/webhook'

interface BodyData {
  slug: {
    current: string
  }
}

export default async function revalidate(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {isValidSignature, body} = await parseBody<BodyData>(req, process.env.SANITY_REVALIDATE_SECRET)

    if (!isValidSignature) {
      const message = 'Invalid signature'
      console.warn(message)
      res.status(401).json({message})
      return
    }

    const staleRoute = `/${(body as BodyData).slug.current}`
    await res.revalidate(staleRoute)
    const message = `Updated route: ${staleRoute}`
    console.log(message)
    return res.status(200).json({message})
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: err.message})
  }
}
