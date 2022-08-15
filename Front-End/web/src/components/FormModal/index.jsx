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
    DateTimeGroup,
    Footer
} from "./styles"

export default function FormModal() {
    
    const { 
        handleClose, 
        handleSubmit,
        titleHandler,
        startDateHandler,
        startTimeHandler,
        endDateHandler, 
        endTimeHandler, 
        descriptionHandler, 
        title, 
        startDate, 
        startTime, 
        endDate, 
        endTime, 
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
                            <input required id="title" type="text" value={title} onChange={titleHandler}/>
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="start">Inicial date</label>
                            <DateTimeGroup>
                                <input required id="start" type="date" value={startDate} onChange={startDateHandler} />
                                <input id="start" className="time"  type="time" value={startTime} onChange={startTimeHandler} />
                            </DateTimeGroup>
                        </InputGroup>
                        <InputGroup>
                           <label htmlFor="end">End date</label>
                            <DateTimeGroup>
                                <input required id="end" type="date" value={endDate} onChange={endDateHandler}/>
                                <input id="end" className="time" type="time" value={endTime} onChange={endTimeHandler}/>
                            </DateTimeGroup>
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