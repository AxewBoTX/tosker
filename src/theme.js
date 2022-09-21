import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

const styles = {
    global: props => ({
        body:{
            bg: mode("#F2F3F5","#2F3136")(props)
        }
    })
}
const fonts = {
    heading: "'M PLUS Rounded 1c'",
    body: "'M PLUS Rounded 1c'"
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

export default extendTheme({styles,fonts,config});
