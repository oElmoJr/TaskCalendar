import styled from "styled-components";

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
    padding: 48px 80px; 
`;

export const Headers = styled.header`
    display: flex;
    justify-content: center;

    color: #3D3D3D;
    font-weight: 400;
    font-size: 30px;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;

    height: 100%;
    width: 100%;
`;

export const FormMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: auto 0;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;;
    gap: 2px;

    label {
        color: #666681;
    }
    
    input, textarea {
        color: #666681;
        font-size: 14px;
        background: none;
        border: 1px solid #9D9D9D;
        border-radius: 5px;

        width: 100%;
        height: 35px;
        padding: 0 5px;
    }

    #description {
        height: 160px;
        resize: none
    }
`;

export const DateTimeGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;

    .time {
        width: 150px;
    }
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

    .cancel {
        background-color: #898CE5;
    }
`;