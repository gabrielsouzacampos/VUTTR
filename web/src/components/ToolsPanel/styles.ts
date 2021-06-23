import styled from 'styled-components';

export const Container = styled.div`
    margin: 1rem 0rem;
    padding: 0.5rem 1rem;

    display: flex;
    flex-direction: column;

    background: white;

    p {
        margin-top: 0.7rem;
        color: black;
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    button {
        border: 0;
        outline: 0;
        padding: 0.3rem 1rem;
    }
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 0.7rem;

    span {
        margin-right: 0.4rem;
        color: black;
    }
`;