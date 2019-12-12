const fs = require('fs')
const { join } = require('path')
const { promisify } = require('util')
const YAML = require('yaml')

async function getMDXInfo(content) {
  try {
    const dirname = process.env.PROJECT_ROOT
    const files = await promisify(fs.readdir)(
      join(dirname, `./pages/${content}`)
    )
    const mdx = await files.filter(f => f.includes('.mdx'))
    let list = await Promise.all(
      mdx.map(async p => {
        let meta = {}
        let name = p.replace('.mdx', '')
        let { size } = await promisify(fs.stat)(
          join(dirname, `./pages/${content}/${p}`)
        )
        let page = await promisify(fs.readFile)(
          join(dirname, `./pages/${content}/${p}`)
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
    return { list }
  } catch (error) {
    console.log('error: ', error)
    throw new Error('Project data unavailable')
  }
}

async function getEventbriteInfo() {
  try {
    const url = 'https://www.eventbriteapi.com/v3/users/me/events/'
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.EVENTBRITE_API_KEY}`,
      },
    })
    const { events } = await response.json()
    const list = await events.map(x => ({
      date: x.start.utc,
      name: x.name.text,
      url: x.url,
      title: x.name.text,
      description: x.description.text.split('\n')[1] + '  ...',
      type: 'class',
      tags: ['workshop', x.status === 'live' ? 'upcoming' : 'passed'],
      size:
        (new Date(x.end.local) - new Date(x.start.local)) / (60 * 60 * 1000),
    }))
    return { list }
  } catch (error) {
    throw new Error('Event data unavailable')
  }
}

async function writeMDXInfo(content) {
  try {
    const { list } = await getMDXInfo(content)
    await promisify(fs.writeFile)(
      `./pages/${content}/${content}-list.json`,
      JSON.stringify(list)
    )
  } catch (err) {
    console.log('error in writeMDXInfo: ', err)
  }
}

module.exports = {
  getMDXInfo,
  getEventbriteInfo,
  writeMDXInfo,
}
