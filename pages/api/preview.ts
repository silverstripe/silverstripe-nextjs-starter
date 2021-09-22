import { NextApiRequest, NextApiResponse } from 'next'
import ssConfig from '../../ss.config'
import dotenv from 'dotenv'
import { createClient } from '@silverstripe/nextjs-builder'
import jwt, { JwtPayload } from 'jsonwebtoken'


const setCookieSameSite = (res: NextApiResponse, value: string) => {
  const cookies = res.getHeader("Set-Cookie") as string[];
  res.setHeader(
    "Set-Cookie",
    cookies?.map((cookie) =>
      cookie.replace(
        "SameSite=Lax",
        `SameSite=${value}; Secure;`
      )
    )
  );
};
export default async (req: NextApiRequest, res: NextApiResponse) => {
    dotenv.config()
    const client = createClient(ssConfig)
    const key = process.env.SILVERSTRIPE_PREVIEW_KEY
    if (!key) {
      return res.status(401).json({ message: `Preview unavailable`})
    }
    const providedToken: string = `${req.query.token}`
    const token = decodeURIComponent(providedToken)
    let decoded: JwtPayload
    try {
      decoded = jwt.verify(token, key, { algorithms: [`HS256`]}) as JwtPayload
    } catch (e: any) {      
      return res.status(401).json({ message: `Invalid token ${key} ${token} ${e.message}` })
    }

    const { link, expiry } = decoded
    const timestamp = new Date().getTime() / 1000
    if (timestamp > expiry) {
      return res.status(401).json({ message: `Token has expired.` })
    }

    const result: any = await client.queryUncached(`
query PreviewPage($link: String!) {
  readOnePage(link: $link) {
    id
    link
  }
}
`,
  { link }
)
    if (!result?.readOnePage) {
      return res.status(401).json({ message: `Invalid link ${link}` })
    }
  
    res.setPreviewData({})
    setCookieSameSite(res, "None");
    res.redirect(result.readOnePage.link)
  }