import React from "react"
function Article() {

    const [contact, setContact] = React.useState({
        firstName: 'Sathish',
        lastName: 'Test',
        phone: '+61-23202323234',
        email: 'abc.gmail.com',
        isFavorite: false
    })
    let star = contact.isFavorite ? "Gold start" : "Silver star"

    function togglefavortite(){
        console.log("toggle")
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite : !prevContact.isFavorite
            }
        })
    }

    return (
        <main >
            <card_info>
                <h3>{contact.firstName}</h3>
                <h3>{contact.lastName}</h3>
                <h3>{contact.email}</h3>
                <h3>{contact.phone}</h3>
                <h3 onClick={togglefavortite}>{star}</h3>
            </card_info>
        </main>
    )
}

export default Article;