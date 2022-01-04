import React, {useContext} from 'react'
import styled from 'styled-components'
import { DarkThemeContext } from "../App";
import tokens from './Tokens';

const {lightTheme, darkTheme} = tokens

const Header = styled.h1`
text-align: center;
margin: 10px;
color: ${props => props.isDarkMode ? darkTheme.lightGrey : lightTheme.black};
letter-spacing: 10px;
`
export default function H1(props) {
    const {isDarkMode} = useContext(DarkThemeContext)

    return (
        <Header isDarkMode={isDarkMode}>
            {props.children}
        </Header>
    )
}
