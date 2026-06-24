import { getShortUrl } from "../dao/shortUrl.js"
import {createShortUrlWithoutUser} from "../Sevices/shortUrl.service.js"

export const createShortUrl = async (req,res)=>{
  console.log(req.body)
  const {url} = req.body
  const shortUrl = await createShortUrlWithoutUser(url)
  res.send(process.env.APP_URL + shortUrl);
}

export const redirectFromShortUrl = async(req,res)=>{
  const {id} = req.params
  const url = await getShortUrl(id)
  res.redirect(url.full_url)  
}