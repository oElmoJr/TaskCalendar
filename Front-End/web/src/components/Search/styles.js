import styled from "styled-components";
import { IoSearch } from 'react-icons/io5';

export const Container = styled.div`
    display: flex;
    align-items: center;
    
    border: solid 1px #A5A5A5;
    border-radius: 5px;
    
    width: 180px;
    
    input {
        color: #fff;
        background-color: #181842;
        border: none;
        border-radius: 5px;
        
        height: 30px;
        width: 150px;
        padding: 0 5px;
    }
`;

export const SearchIcon = styled(IoSearch)`
        color: #ffff;
        margin: auto;
`;