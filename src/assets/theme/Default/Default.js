import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const ThemeDefault = createGlobalStyle `
    ${reset}
    body {
        background: gray;
    }
`
export default ThemeDefault;