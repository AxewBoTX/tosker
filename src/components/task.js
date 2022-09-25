import {
    Box,
    Text,
    IconButton,
    Checkbox
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';

function Task(props){
    const [value,setValue] = useState(props.state);
    const Returner = () => {
        if (value){
            return (<s>{props.text}</s>);
        }else{
            return (props.text);
        }
    }
    return(
        <Box
        boxShadow={'0px 0px 15px 5px rgb(0,0,0,0.3)'}        
        width={'100%'}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        p={'10px 10px'}
        borderRadius={'10px'}
        >
        <Checkbox onChange={()=>{setValue(!value)}} colorScheme={'cyan'} size={'lg'}/>
        <Text fontSize={'lg'} fontWeight={'bold'}><Returner/></Text>
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
