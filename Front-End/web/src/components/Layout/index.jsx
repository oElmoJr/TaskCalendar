import React, { useEffect, useState } from "react";
import Header from "../Header";
import FullCalendarApp from "../Calendar";
import Footer from "../Foother";
import api from "../../services/api";

import { Container } from "./styles"

export default function Layout() {
  const [tasks, setTasks] = useState([]); 
  
  useEffect(() => {
    api.get("tasks").then(({data}) => {
       
    const mapped = data.tasks.map(({_id, title, start, end, description}) => ({
      id: _id, title, start, end, description
    }));

    setTasks(mapped);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
    return (
        <Container>
            <Header/>
            <FullCalendarApp tasks={tasks} />
            <Footer/>
        </Container>
    )
}