import { createContext, useState, } from "react";
import FormModal from "../components/FormModal";
import api from "../services/api"

export const TaskContext = createContext();

export function TaskContextProvider({children}) {
    const [openFormModal, setOpenFormModal] = useState(false);
    const [title, setTitle] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [description, setDescription] = useState("");

    function handleNew() {
        setOpenFormModal(true)
    }
    
    function handleClose() {
        setOpenFormModal(false)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const task = {
            title,
            start, 
            end,
            description
        }
        
        api.post("tasks", task);

        setOpenFormModal(false);        
    }

    function titleHandler(e) {
        setTitle(e.target.value)
    }
    function startHandler(e) {
        setStart(e.target.value)
    }
    function endHandler(e) {
        setEnd(e.target.value)
    }
    function descriptionHandler(e) {
        setDescription(e.target.value)
    }

    return (
        <TaskContext.Provider 
            value={{
                handleNew, handleClose, 
                titleHandler, startHandler, 
                endHandler, descriptionHandler, 
                handleSubmit,
                title, setTitle,
                start, setStart,
                end, setEnd,
                description, setDescription
            }}>

            {children}
            {openFormModal && <FormModal />}
        </TaskContext.Provider>
    )
}