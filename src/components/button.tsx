import React, { ReactElement } from 'react'
import styled from 'styled-components'
import {themes} from '../theme'

const StyledButton = styled.button`
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    font-weight: 600;
    border: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    cursor: pointer;
    padding: 1rem 2rem;
`

interface ButtonProps {
    onClick? : () => void
    value: string;
}

const Button = ({ onClick, value } : ButtonProps) : ReactElement => {
    return <StyledButton onClick={onClick}>{value}</StyledButton>
}

export {Button}