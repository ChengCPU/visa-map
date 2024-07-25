let cachedJsonData:any = null
function getBaseUrl() {
  if(typeof window !== 'undefined') return ''
  const vc = process.env.VERCEL_URL
  if(vc) return `https://${vc}`
  return 'http://localhost:3000/'
}

export const fetchAndCacheJsonData = async():Promise<any> => {
  if(cachedJsonData) {
    return cachedJsonData
  }

  try {
    const response = await fetch(getBaseUrl() + 'visaPolicy.json')
    if(!response.ok) {
      throw new Error('Network response was not ok.')
    }

    const data = await response.json()
    cachedJsonData = data

    return data
  } catch (error) {
    console.error('Error fetching JSON data:', error)

    return null
  }
};