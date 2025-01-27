// import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, 
   
// })
import { createClient } from 'next-sanity';

// Load environment variables
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "bx84cc3f"; // Replace "" with fallback if needed
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"; // Default to "production"
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-01-01"; // Default API version

// Create the Sanity client
export const client = createClient({
  projectId, // Your Sanity project ID
  dataset,   // Dataset (e.g., "production")
  apiVersion, // API version
  useCdn: process.env.NODE_ENV === "production", // Use the CDN only in production for faster reads
});
