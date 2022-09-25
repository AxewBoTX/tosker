//Library Imports
import {
    Container,
    Box,
    Input,
    IconButton,
    useToast
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useState,useEffect } from 'react';
import {v4} from 'uuid';

//Local Imports
import Navbar from './components/navbar.js';
import Task from './components/task.js';

//Local Storage Key
const LOCAL_STORAGE_KEY = 'tosker-task-list-tasks';

//Main App Function
function App() {
    const [value,setValue] = useState('');
    const handleChange = (event) => {setValue(event.target.value)}
    const [tasks,setTasks] = useState([]);
    const toast = useToast();
    const addTask = () => {
        if (value === ''){
            toast({
                title: 'Empty Input!',
                description: "Sorry but the input cannot be empty.",
                status: 'error',
                variant: 'subtle',
                duration: 3000,
                isClosable: true
            });
        }else{
            setTasks([...tasks,{
                text: value,
                done: false,
                id: v4()
            }]);
            setValue('');
        }
    }
    const removeTask = (id) => {
        setTasks(tasks.filter(function(task){
            return task.id !== id;
        }));
    }
    const Tasks = tasks.map(function(task){
        return(
            <Task 
            text={task.text}
            remove={() => {removeTask(task.id)}}
            />
        );
    })
    useEffect(() => {
        const storageTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) 
        if (storageTasks){
            setTasks(storageTasks);
        }
    },[])
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    },[tasks]);
  return (
      <Container>
      <Navbar/>
      <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      mt={'80px'}
      ><Input
      placeholder={'Enter Your Task'}
      fontSize={'lg'}
      size={'lg'}
      variant={'flushed'}
      value={value}
      onChange={handleChange}
      maxlength={30}
      />
      <IconButton 
      icon={<AddIcon/>}
      isRound={true}
      colorScheme={'cyan'}
      onClick={addTask}
      />
      </Box>
      <Box
      mt={'30px'}
      display={'flex'}
      flexDirection={'column'}
      gap={'25px'}
      alignItems={'center'}
      mb={'30px'}
      >{Tasks}
      </Box>
      </Container>
  );
}

export default App;
