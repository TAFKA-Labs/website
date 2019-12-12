// import { getEventbriteInfo, getMDXInfo } from 'utils/get-meta'
const fs = require('fs')
const { join } = require('path')
const { promisify } = require('util')
const YAML = require('yaml')

export default async (req, res) => {
  if (req.method !== 'GET') {
    return (res.statusCode = 401)
  }
  try {
    // const { list: pages } = await getMDXInfo('projects')
    const dirname = process.env.PROJECT_DIRNAME
    console.log('dirname? ', dirname)
    const files = await promisify(fs.readdir)(
      join(process.env.PROJECT_DIRNAME, `pages/projects`)
    )
    console.log('files? ', files)
    const mdx = await files.filter(f => f.includes('.mdx'))
    let list = await Promise.all(
      mdx.map(async p => {
        let meta = {}
        let name = p.replace('.mdx', '')
        let { size } = await promisify(fs.stat)(
          join(process.env.PROJECT_DIRNAME, `pages/projects/${p}`)
        )
        let page = await promisify(fs.readFile)(
          join(process.env.PROJECT_DIRNAME, `pages/projects/${p}`)
        )
        let frontmatter = page.toString().split('---')[1]
        if (frontmatter) {
          meta = YAML.parse(frontmatter)
        }
        return {
          name,
          size,
          ...meta,
        }
      })
    )
    await list.sort((a, b) => new Date(b.date) - new Date(a.date))
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json({ projects: list })
  } catch (error) {
    console.log('error in get-projects: ', error)
    res.status(400).json({ projects: [], error: error.message })
  }
}
