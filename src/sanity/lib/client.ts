import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "bx84cc3f",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true, 
   
})
