import fs from 'fs'
import logStrings from './logUtils'

export function extractDirectory(_path: string): string[] {
  try {
    const dirs = fs
      .readdirSync(_path, {
        encoding: 'utf8',
        withFileTypes: true
      })
      .filter((item) => {
        return item.isDirectory()
      })
      .map((item) => item.name)
    return dirs
  } catch (err) {
    console.warn(logStrings.SPLIT_LINE_WARNING)
    console.warn(`extract directory error: ${err}`)
    console.warn(logStrings.SPLIT_LINE_WARNING)
  }
  return []
}
