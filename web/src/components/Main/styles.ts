import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
`;

export const SearchInput = styled.input`
    margin-right: 12px;
    padding: 7.5px 8px;

    background: #fff;
    color: #000;

    font-size: 14px;
    
    border: none;
    outline: none;
    border-radius: 5px;
`;

export const  CheckBoxInput = styled.input`
    margin-right: 0.3rem;
`;

export const  AddButton = styled.button`
    border: 0;
    outline: 0;
    padding: 0.3rem 1rem;

    &:hover {
        background: #df8d13;
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 2rem;
`;

export const Tool = styled.div`
    margin-top: 1rem;
`;
