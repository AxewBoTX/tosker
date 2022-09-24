import { useColorMode,useColorModeValue } from '@chakra-ui/react';
import {
    Container,
    Box,
    Image,
    Heading,
    IconButton,
} from '@chakra-ui/react';
import { SunIcon,MoonIcon } from '@chakra-ui/icons';

function Navbar(){
    const {toggleColorMode} = useColorMode();
    return(
        <Container
        position={'fixed'}
        top={'10px'}
        left={'10px'}
        right={'10px'}
        display={'flex'}
        justifyContent={'space-between'}
        maxW={'850px'}
        >
        <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        >
        <Image 
        src={'assets/tosker.png'}
        width={'45px'}
        height={'45px'}
        />
        <Heading>Tosker</Heading>
        </Box>
        <IconButton
        colorScheme='cyan'
        icon={useColorModeValue(<MoonIcon/>,<SunIcon/>)}
        onClick={toggleColorMode}
        />
        </Container>
    );
}

export default Navbar;
