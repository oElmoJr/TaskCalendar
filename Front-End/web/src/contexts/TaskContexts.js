import { createContext, useState, } from "react";
import FormModal from "../components/FormModal";
import TaskModal from "../components/TaskModal";
import api from "../services/api"

export const TaskContext = createContext();

export function TaskContextProvider({children}) {
    const [openFormModal, setOpenFormModal] = useState(false);
    const [openTaskModal, setOpenTaskModal] = useState(false);
    
    const [id, setId] = useState(false);
    const [title, setTitle] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [startDate, setStartDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endDate, setEndDate] = useState("");
    const [endTime, setEndTime] = useState("");
    const [description, setDescription] = useState("");

    const [tarefas, setTarefas] = useState([])
    const [idTarefa, setIdTarefa] = useState([])

    function handleNew() {
        setOpenFormModal(true)
    }

    function handleEdit(taskId, taskTitle, taskStart, taskEnd, taskDescription) {    

        function splitDateTime(stg) {
           return stg.split("T")
        }

        console.log(splitDateTime(taskStart))
        console.log(splitDateTime(taskEnd))

        setId(taskId)
        setTitle(taskTitle);
        setStartDate(splitDateTime(taskStart)[0]);
        setStartTime(splitDateTime(taskStart)[1]);
        setEndDate(splitDateTime(taskEnd)[0]);
        setEndTime(splitDateTime(taskEnd)[1]);
        setDescription(taskDescription);

        setOpenFormModal(true);
        setOpenTaskModal(false)
    }

    function handleSubmit(e) {
        e.preventDefault();

        const task = {
            title,
            start, 
            end,
            description
        }

        if (id) {
            api.put(`tasks/${id}`, task);
        } else {
            api.post(`tasks`, task);
        }
        
        handleClose()  
    }

    function handleDelete(id) {
        api.delete(`tasks/${id}`)
        handleClose()
    }

    function handleTask(tasks, id) {
        setTarefas(tasks);
        setIdTarefa(id);

        setOpenTaskModal(true)
    }
    
    function handleClose() {
        setOpenFormModal(false)
        setOpenTaskModal(false)

        setTitle("")
        setStart("")
        setEnd("")
        setStartDate("")
        setStartTime("")
        setEndDate("")
        setEndTime("")
        setDescription("")
    }

    function titleHandler(e) {
        setTitle(e.target.value)
    }

    function startDateHandler(e) {
        setStartDate(e.target.value)
        if(startTime) setStart(e.target.value + "T" + startTime)
        if(!startTime) setStart(e.target.value)
    }
    
    function endDateHandler(e) {
        setEndDate(e.target.value)
        if(endTime) setEnd(e.target.value + "T" + endTime)
        if(!endTime) setEnd(e.target.value)
    }
    
    function startTimeHandler(e) {
        setStartTime(e.target.value)
        if(e.target.value) setStart(startDate + "T" + e.target.value)
        if(!e.target.value) setStart(startDate)
    }
    
    function endTimeHandler(e) {
        setEndTime(e.target.value)
        if(e.target.value) setEnd(endDate + "T" + e.target.value)
        if(!e.target.value) setEnd(endDate)
    }

    function descriptionHandler(e) {
        setDescription(e.target.value)
    }

    return (
        <TaskContext.Provider 
            value={{
                handleNew, handleTask, handleClose, handleEdit,
                titleHandler, descriptionHandler, 
                startDateHandler, endDateHandler, 
                startTimeHandler, endTimeHandler, 
                handleSubmit,
                title, setTitle,
                startDate, setStartDate,
                startTime, setStartTime,
                endDate, setEndDate,
                endTime, setEndTime,
                description, setDescription,
                id, setId, handleDelete
                
            }}>

            {children}
            {openFormModal && <FormModal />}
            {openTaskModal &&<TaskModal task={tarefas} id={idTarefa} />}
        </TaskContext.Provider>
    )
}