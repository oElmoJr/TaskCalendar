import styled from "styled-components"

export const Overlay  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(67, 67, 67, 0.34);
    backdrop-filter: blur(2px);
    
    position: fixed;
    z-index: 9;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: #E0E0E0;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.01);
    border-radius: 5px;

    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 600px;
    padding: 50px 80px; 
    
`;

export const Headers = styled.header`
    display: flex;
    justify-content: space-between;
    /* align-items: flex-start; */

    color: #3D3D3D;
    font-weight: 400;
    font-size: 30px;

    margin-top: 20px;

    button {
        border: none;
        background: none;
        cursor: pointer;
        
        svg {
            color: #666681;
            height: 25px;
            width: 25px;
        }
    }
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    
    color: #666681;
    gap: 5px;
    margin: 20px 0;
    font-size: 13px;
`;

export const Description = styled.div`
    margin-top: 50PX;
    font-size: 16px;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        background-color: #363BC4;
        border: none;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;

        width: 80px;
        height: 40px;
    }

    button:hover {
        background-color: #181842;
    }

    .delete {
        background-color: #3d3d3d;
    }
`;