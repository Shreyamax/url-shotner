import {generateNanoId} from "../Utils/helper.js"
import urlSchema from "../models/shorturl.model.js"
import {saveShortUrl} from "../dao/shortUrl.js"

export const createShortUrlWithoutUser = async (url) =>{
    const shortUrl = await generateNanoId(7)
    await saveShortUrl(shortUrl, url)
    return shortUrl
}

export const createShortUrlWithUser = async (url, userId) =>{
    const shortUrl = await generateNanoId(7)
    await saveShortUrl(url, shortUrl, userId)
    return shortUrl
} 