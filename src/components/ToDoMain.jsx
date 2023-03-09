import { useState } from 'react'

import FormForTask from './FormForTask'
import TableForTask from './TableForTask'

const ToDoMain = () => {
    //state turi buti virsuje
    //1. kintamasis, kuris saugo  state reiksme
    //2. metodas, kuris atnaujina state reiksme
    //3. state pradine reiksme
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Clean your room",
            isCompleted: false
        },
        {
            id: 2,
            text: "Wash the floors",
            isCompleted: true
        },
        {
            id: 3,
            text: "Walk the dog",
            isCompleted: false
        }
    ]);

    console.log(tasks)
    return (
        <div>
            <TableForTask list={tasks}/>
            <FormForTask />
        </div>
    )
}

export default ToDoMain