import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    fonts: {
     body: "Lato, sans serif",
    },
    textStyles: {
        logoStyles: {
            fontWeight: '700',
        }

    },
    colors: {
        primary: '#1DB954',
        BtnHover: '#168a3f'
    }
  })

  export default theme