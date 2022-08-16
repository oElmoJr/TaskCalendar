import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    padding: 0 100px;
    width: 100%;

    .fc-button-primary { // color of calendar header buttons
        background-color: #363BC4 !important;
        border-color: #363BC4 !important;

        &.fc-button-active, // active button
        &:hover {
            background-color: #181842 !important;
            border-color: #181842 !important;
        }
    }

    .fc-daygrid-day, .fc-col-header-cell, .fc-scrollgrid { // border of days on month view
        border: 1px solid #A5A5A5 !important;
    }

    .fc-day-today { // today
        background-color: #CACBE1 !important;
    }

    .fc-day-other { // past-month days
        background-color: #CFCFCF;
    }

    .fc-toolbar-title { // calendar title
        font-weight: 500;
    }

    .fc-event {
        cursor: pointer !important;
    }
`;
