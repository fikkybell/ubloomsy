export const generateStepsAndMood = async (goal: string, category: string) => {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo' ,
      messages: [
        {
          role: 'system',
          content: 'You are a helpful productivity assistant that breaks dreams into actionable steps and visual aesthetics.'
        },
        {
          role: 'user',
          content: `My dream is: ${goal}. It's under the category: ${category}. 

Please:
1. List 5 short actionable steps to achieve it.
2. Provide a comma-separated list of aesthetic keywords for a moodboard that reflects this dream.`
        }
      ],
      temperature: 0.7
    })
  })
  console.log('API KEY:', import.meta.env.VITE_OPENAI_API_KEY)

  const data = await response.json()
  console.log(data)
  const content = data.choices[0].message.content as string

  // Extract steps and keywords
  const lines = content.split('\n').filter(Boolean)
  const stepList = lines.filter(line => /^[0-9]/.test(line)).map(line => line.replace(/^\d+\.\s*/, ''))
  const keywordsLine = lines.find(line => !/^[0-9]/.test(line) && line.includes(',')) || ''
  const keywords = keywordsLine.split(',').map(k => k.trim())

  return { stepList, keywords }
}
