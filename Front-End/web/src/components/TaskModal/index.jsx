import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContexts";
import {IoClose} from "react-icons/io5"

import {
    Overlay,
    Container,
    Headers,
    Main,
    Description,
    Footer
} from "./styles"

export default function TaskModal({task, id}) {
    const { handleClose, handleEdit, handleDelete } = useContext(TaskContext)
    
    const tarefa =  task.filter((tar) => tar.id === id)
    
    // function handleEdit() {
    //     setFormValues()
    // }

    return (
        <Overlay>
        {tarefa.map(({id, title, start, end, description}) => (
            <Container key={id}>
                <div>
                <Headers>
                    <span>{title}</span>
                    <button type="button" className="cancel" onClick={handleClose}><IoClose /></button>

                </Headers>
                <Main>
                    <span>Initial date: {start}</span>
                    <span>End date: {end}</span>
                    
                    <Description>
                        {description}
                    </Description>
                </Main>
                </div>
                <Footer>
                    <button type="button" onClick={() => handleEdit(id, title, start, end, description)}>Edit</button>
                    <button className="delete" type="button" onClick={() => handleDelete(id)}>Delete</button>
                </Footer>
            </Container>
        ))}
            
        </Overlay>
    )
}