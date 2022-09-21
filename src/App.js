//Library Imports
import {
    Container,
    Box
} from '@chakra-ui/react';

//Local Imports
import Navbar from './components/navbar.js';

//Main App Function
function App() {
  return (
      <Container>
      <Navbar/>
      <Box
      mt={'100px'}
      fontSize={'lg'}
      fontWeight={'bold'}
      >Sorry but this web app is currenly not being developed because the developer realised that he suck at javascript</Box>
      <Box
      fontSize={'lg'}
      fontWeight={'bold'}
      >Soon he will come back</Box>
      <Box
      fontSize={'lg'}
      fontWeight={'bold'}
      >Like if someone care</Box>
      </Container>
  );
}

export default App;
