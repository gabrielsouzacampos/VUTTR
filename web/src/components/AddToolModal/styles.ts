import styled, {keyframes} from 'styled-components';

export const Overlay = styled.div`
    background: rgba(242, 243, 245, 0.8);
    
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    background: white;

    width: 100%;
    max-width: 450px;

    padding: 0.5rem 1rem;
    
    position: relative;
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

    p {
        color: black;
    }
`;

export const Header = styled.header`
    font-size: 1.5rem;
    font-weight: 600;

    padding: 0.5rem 0rem;

`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;

    label {
        color: green;
    }

    p {
        color: red;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    margin-bottom: 1rem;
`;

export const Footer = styled.footer`
    display: flex;
    justify-content: space-evenly;

    padding: 0.5rem 0rem;

    button {
        border: 0;
        background: #F9AA36;
        padding: 0.5rem 0.5rem;
    }

    button:first-child {
        background: red;
        color: white;
    }
`;

export const Input = styled.input`
    margin-right: 12px;
    padding: 7.5px 5px;

    background: #fff;
    color: #000;

    font-size: 14px;
    
    border: 1px solid black;
    outline: none;
    border-radius: 5px;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);

    border-top: 2px solid #F9AA36;
    border-right: 2px solid #F9AA36;
    border-bottom: 2px solid #F9AA36;
    border-left: 3px solid #344955;
    background: transparent;
    width: 24px;
    height: 24px;
    border-radius: 50%;
`;
