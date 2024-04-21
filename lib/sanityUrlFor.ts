import {SanityImageSource} from '@sanity/image-url/lib/types/types'
import {client} from './sanityClient'
import imageUrlBuilder from '@sanity/image-url'
import {bgImageFallback} from '../helper/fallbacks'

const {projectId, dataset} = client.config()

export const urlFor = (source: SanityImageSource) => {
  try {
    return projectId && dataset
      ? imageUrlBuilder({projectId, dataset}).image(source).url()
      : bgImageFallback
  } catch (e) {
    console.error(e)
    return bgImageFallback
  }
}