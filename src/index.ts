import { promises as fs } from 'node:fs'
import getTheme from './theme'

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeFile(
      './themes/zb81-light.json',
      `${JSON.stringify(getTheme({
        style: 'light',
        name: 'Zb81 Light',
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/zb81-dark.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Zb81 Dark',
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/zb81-light-soft.json',
      `${JSON.stringify(getTheme({
        style: 'light',
        name: 'Zb81 Light Soft',
        soft: true,
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/zb81-dark-soft.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Zb81 Dark Soft',
        soft: true,
      }), null, 2)}\n`,
    ),
  ]))
  .catch(() => process.exit(1))
