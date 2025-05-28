export const fetchMoodboardImages = async (keywords: string[]) => {
    const query = keywords.join(',')
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${import.meta.env.VITE_UNSPLASH_KEY}`)
    const data = await response.json()
    const limitedData = data.results.slice(0, 4)
    return limitedData.map((item: any) => item.urls.small)}
