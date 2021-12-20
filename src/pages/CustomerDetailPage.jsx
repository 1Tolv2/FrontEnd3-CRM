import React from 'react'

export default function CustomerDetailPage() {
    return (
        <div>
            <ul>
                <li>name</li>
                <li>orgnr</li>
                <li>vatnr</li>
                <li>reference</li>
                <li>paymentTerm</li>
                <li>website</li>
                <li>email</li>
                <li>phoneNumber</li>
            </ul>
            VG:
            <ul>
                <li>Lägg till en knapp så att användaren kan ta bort en kund (HTTP Method Delete på /api/v1/customers/id/). Användaren ska därefter navigera tillbaka till "Hemskärmen"</li>
                <li>Ge användaren möjlighet att ändra kundens information (PUT/PATCH)</li>

            </ul>
        </div>
    )
}
