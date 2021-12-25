import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import H1 from '../components/H1'

export default function StartPage() {
    return (
        <Container centered width={400}>
            <H1>iCRM</H1>
            <Link to="/login">Klicka här för att gå till inloggningssidan</Link>
        </Container>
    )
}
