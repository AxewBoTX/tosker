import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { ChakraProvider,ColorModeScript } from '@chakra-ui/react';
import theme from './theme.js';
import "@fontsource/m-plus-rounded-1c";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <App />
    </ChakraProvider>
);
