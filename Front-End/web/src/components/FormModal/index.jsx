import React from "react";

import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContexts";


import {
    Overlay,
    Container,
    Headers,
    FormContainer,
    FormMain,
    InputGroup,
    Footer
} from "./styles"

export default function FormModal() {
    
    const { 
        handleClose, 
        handleSubmit,
        titleHandler,
        startHandler,
        endHandler, 
        descriptionHandler, 
        title, 
        start, 
        end, 
        description
    } = useContext(TaskContext)
    
    return (
        <Overlay>
            <Container>
                <Headers>
                    <span>Add a new task</span>
                </Headers>
                <FormContainer onSubmit={handleSubmit}>
                    <FormMain>
                        <InputGroup>
                            <label htmlFor="title">Title</label>
                            <input id="title" type="text" value={title} onChange={titleHandler}/>
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="start">Inicial date</label>
                            <input id="start" type="text" value={start} onChange={startHandler} />
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="end">End date</label>
                            <input id="end" type="text" value={end} onChange={endHandler}/>
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="description">Description</label>
                            <textarea id="description" type="text" value={description} onChange={descriptionHandler}/>
                        </InputGroup>
                    </FormMain>
                    <Footer>
                        <button type="button" className="cancel" onClick={handleClose}>Cancel</button>
                        <button type="submit">Save</button>
                    </Footer>
                </FormContainer>
            </Container>
        </Overlay>
    )
}