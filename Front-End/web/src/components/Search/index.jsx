import React from "react";
import { Container, SearchIcon } from "./styles";

export default function Search() {
    return (
        <Container>
                <input type="text" placeholder="search" />
                <SearchIcon/> 
        </Container>
    )
}