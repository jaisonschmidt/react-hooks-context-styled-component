import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const ThemeDark = createGlobalStyle `
    ${reset}
    body {
        background: black;
    }
`
export default ThemeDark;