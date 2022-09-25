import {
    Box,
    Text,
    IconButton,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

function Task(props){
    return(
        <Box
        boxShadow={'0px 0px 15px 5px rgb(0,0,0,0.3)'}        
        width={'85%'}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        p={'10px 10px'}
        borderRadius={'10px'}
        ><Text fontSize={'lg'} fontWeight={'bold'}>{props.text}</Text>
        <IconButton 
        icon={<CloseIcon/>} 
        colorScheme={'cyan'}
        onClick={props.remove}
        size={'sm'}
        isRound={true}
        />
        </Box>
    );
}

export default Task;
