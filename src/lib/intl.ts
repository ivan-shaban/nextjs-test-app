import path from 'path'
import { promises as fs } from 'fs'

const translationsDirectory = path.join(process.cwd(), 'public', 'translations')

export async function getLocaleMessages(locale: string) {
    const fullPath = path.join(translationsDirectory, `${locale}.json`)
    const fileContents = await fs.readFile(fullPath, 'utf8')

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return JSON.parse(fileContents)
}
