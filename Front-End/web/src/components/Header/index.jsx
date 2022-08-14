import React from "react";
import { Container } from "./styles";
import Logo from "./Logo.png"
import Search from "../Search";

export default function Header() {
    return (
        <Container>
            <img src={Logo} alt="" />
            <Search />
        </Container>
    )
}