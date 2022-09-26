import React from "react"

export default function Form(){
    const [formData, setformData] = React.useState({
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: ""
    })

    console.log(formData)
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setformData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked: value
            }
        })
    }

    function handleSubmit(event){
        // event.preventDefault();
        console.log("Handle submit")
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}> 
            <input 
                type="text"
                name="firstName"
                value={formData.firstName}
                placeholder="type your first name"
                onChange={handleChange}/>
                <br />
             <input 
                type="text"
                name="lastName"
                value={formData.lastName}
                placeholder="type your last name"
                onChange={handleChange}/>
                <br />
             <input 
                type="text"
                name="contact"
                value={formData.contact}
                placeholder="type your contact"
                onChange={handleChange}/>
                <br />
             <input 
                type="text"
                name="email"
                value={formData.email}
                placeholder="type your email"
                onChange={handleChange}/>
                <br />
            <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
            />
            <br />
            <input 
                type="checkbox"
                name="isFriendly"
                id="isFriendly"
                value={formData.isFriendly}
                onChange={handleChange}/>

            <label htmlFor="isFriendly">Are you firendly</label>
            <fieldset>
                <legend> Current employment status </ legend>
                <input 
                type="radio"
                name="employment"
                id="unemployed"
                value="unemployed"
                checked={formData.employment === "unemployed"}
                onChange={handleChange}/>

                <label htmlFor="unemployed">Unemployed</label>

                <input 
                    type="radio"
                    name="employment"
                    id="employed"
                    value="employed"
                    checked={formData.employment === "employed"}
                    onChange={handleChange}/>
                <label htmlFor="employed">Employed</label>
            </fieldset>
            <br />
            <label htmlFor="favColor">Choose the favorite color</label>
            <select
                id="favColor"
                name="favColor"
                value={formData.favColor}
                onChange={handleChange}
            >
                <option value="">--Choose color--</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
            <br />
            <br />
            <button>submit</button>

        </form>
    )
}