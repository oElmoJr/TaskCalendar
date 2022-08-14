import React from "react";
import Footer from "../Foother";
import FullCalendarApp from "../Calendar";
import Header from "../Header";

import { Container } from "./styles"

export default function Layout() {
    return (
        <Container>
            <Header/>
            <FullCalendarApp tasks={[
                {
                  id: 1,
                  title: 'event 1',
                  start: '2022-08-14T10:00:00',
                  end: '2022-08-14T12:00:00',
                },
                {
                  id: 4,
                  title: 'Entrega do projeto',
                  start: '2022-08-16',
                  end: '2022-08-16',
                },
                {
                  id: 2,
                  title: 'event 2',
                  start: '2022-08-16T13:00:00',
                  end: '2022-08-16T18:00:00',
                },
                { 
                  id: 3, 
                  title: 'event 3', 
                  start: '2022-08-17', 
                  end: '2022-08-20' 
                },
              ]}
            />
            <Footer/>
        </Container>
    )
}