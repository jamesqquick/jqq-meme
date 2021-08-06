import Link from 'next/link';
import styled from 'styled-components';

export const StyledContainer = styled.div`
    max-width: ${(props) => props.theme.pageWidth};
    margin: 0 auto;
    width: 100%;
    padding: 25px 60px;
`;

export const StyledButton = styled.button`
    box-shadow: -3px 3px black;
    border: 2px solid black;
    font-family: ${(props) => props.theme.comic};
    font-size: 3rem;
    text-transform: uppercase;
    padding: 0 20px;
    cursor: pointer;
    transition: box-shadow 100ms;

    &:hover {
        box-shadow: -2px 2px black;
    }
`;

export const StrongButton = styled.button`
    background: ${(props) => props.theme.black};
    color: ${(props) => props.theme.cadmiumYellow};
    cursor: pointer;
    display: inline-block;
    text-transform: uppercase;
    font-family: ${(props) => props.theme.badaboom};
    text-decoration: none;
    font-size: 3rem;
    letter-spacing: 3px;
    padding: 20px 25px;
    border: none;
    &:hover {
        background: ${(props) => props.theme.cadmiumYellow};
        color: ${(props) => props.theme.carmineRed};
    }
`;

export const StrongLink = styled.a`
    background: ${(props) => props.theme.black};
    color: ${(props) => props.theme.cadmiumYellow};
    cursor: pointer;
    display: inline-block;
    text-transform: uppercase;
    font-family: ${(props) => props.theme.badaboom};
    text-decoration: none;
    font-size: 3rem;
    letter-spacing: 3px;
    padding: 20px 25px;
    border: none;
    &:hover {
        background: ${(props) => props.theme.cadmiumYellow};
        color: ${(props) => props.theme.carmineRed};
    }
`;
