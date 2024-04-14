import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: 'dmjt0r53',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})
