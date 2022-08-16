import React from "react";
import Header from "../Header";
import FullCalendarApp from "../Calendar";
import Footer from "../Foother";

import { useAxios } from "../../hooks/useAxios";

import { Container } from "./styles"

export default function Layout() {
  const {data} = useAxios('tasks');

    const tasks = data?.tasks?.map(({_id, title, start, end, description}) => ({
      id: _id, title, start, end, description
    }));
  
    return (
        <Container>
            <Header/>
            <FullCalendarApp tasks={tasks} />
            <Footer/>
        </Container>
    )
}