import { getEventbriteInfo, getMDXInfo } from 'utils/get-meta'

export default async (req, res) => {
  if (req.method !== 'GET') {
    return (res.statusCode = 401)
  }
  try {
    const { list: pages } = await getMDXInfo('projects')
    const { list: events } = await getEventbriteInfo()
    const projects = await [...pages, ...events].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    )
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json({ projects })
  } catch (error) {
    console.log('error in get-projects: ', error)
    res.status(400).json({ projects: [], error: error.message })
  }
}
