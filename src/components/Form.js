import React from "react"

export default function Form(){
    const [formData, setformData] = React.useState({
        email: "",
        password: "",
        confirm_password: "",
        newsletter: false,
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
        event.preventDefault();
        console.log("Handle submit")
        if (formData.password === formData.confirm_password) {
            console.log("Password matched")
        }
        else{
            console.log("Password not matched")
            return
        }
        if (formData.newsletter ){
            console.log("Thanks for join the newsletter")
        }
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}> 
            <input 
                type="text"
                name="email"
                value={formData.email}
                placeholder="type your email"
                onChange={handleChange}/>
                <br />
             <input 
                type="password"
                name="password"
                value={formData.password}
                placeholder="type your password"
                onChange={handleChange}/>
                <br />
             <input 
                type="text"
                name="confirm_password"
                value={formData.confirm_password}
                placeholder="type your confirm password"
                onChange={handleChange}/>
                <br />

            <input 
                type="checkbox"
                name="newsletter"
                id="newsletter"
                value={formData.newsletter}
                onChange={handleChange}/>

            <label htmlFor="newsletter">I want to join the newsletter</label>
           
            <button>Sign Up</button>

        </form>
    )
}