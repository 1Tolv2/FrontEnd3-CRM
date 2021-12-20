import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { CustomerContext } from '../App'


export default function CustomerDetailPage() {
    let params = useParams()
    const {customerList} = useContext(CustomerContext)
    const customer = customerList[params.id]
    console.log(customer)

    return (
        <div>
           {customer && 
            <>
            <h3>{customer.name}</h3>
            {/* <u><i>Ta bort kund</i></u> */}
            <ul>
                
                <li>{customer.organisationNr}</li>
                <li>{customer.vatNr}</li>
                <li>{customer.reference}</li>
                <li>{customer.paymentTerm} days</li>
                <li>{customer.website}</li>
                <li>{customer.email}</li>
                <li>{customer.phoneNumber}</li>
            </ul>
            <ul>
                <li>VG: Lägg till en knapp så att användaren kan ta bort en kund (HTTP Method Delete på /api/v1/customers/id/). Användaren ska därefter navigera tillbaka till "Hemskärmen"</li>
                <li>VG: Ge användaren möjlighet att ändra kundens information (PUT/PATCH)</li>
            </ul>
            </>
            }
        </div>
    )
}
