"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import {
    ColorModeProvider,
    type ColorModeProviderProps, useColorMode,
} from "./color-mode"

export function Provider(props: ColorModeProviderProps) {

    const {setColorMode} = useColorMode()
    setColorMode("light")
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider forcedTheme="light" {...props} />
    </ChakraProvider>
  )
}
