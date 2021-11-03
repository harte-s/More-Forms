import React, {useState} from "react";

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const handleFirstName = (e) =>{
        setFirstName(e.target.value)
        //console.log(e.target.value);
    }
    const handleLastName = (e) =>{
        setLastName(e.target.value)
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }
    const handleConfirmPassword = (e) =>{
        setConfirmPassword(e.target.value)
    }

    return (
        <>
        <form>
            <div className="form-group">
                <label htmlFor="">First Name: </label>
                <input onChange = {handleFirstName} type="text" name="firstName" id="" className="form-control"/>
                {
                    firstName.length<2 && firstName.length>0?
                        <p className = "text-danger">First name must be at least 2 characters</p>
                    : ""
                }
            </div>
            <div className="form-group">
                <label htmlFor="">Last Name: </label>
                <input onChange = {handleLastName} type="text" name="lastName" id="" className="form-control"/>
                {
                    lastName.length<2 && lastName.length>0?
                        <p className = "text-danger">Last name must be at least 2 characters</p>
                    : ""
                }
            </div>
            <div className="form-group">
                <label htmlFor="">Email: </label>
                <input onChange = {handleEmail} type="email" name="email" id="" className="form-control"/>
                {
                    email.length<5 && email.length>0?
                        <p className = "text-danger">Email must be at least 5 characters</p>
                    : ""
                }
            </div>
            <div className="form-group">
                <label htmlFor="">Password: </label>
                <input onChange = {handlePassword} type="password" name="password" id="" className="form-control"/>
                {
                    password.length<8 && password.length>0?
                        <p className = "text-danger">Password must be at least 8 characters</p>
                    : ""
                }
            </div>
            <div className="form-group">
                <label htmlFor="">Confirm Password: </label>
                <input onChange = {handleConfirmPassword} type="password" name="confirmPassword" id="" className="form-control"/>
                {
                    confirmPassword==0?null
                    :confirmPassword != password?
                    <p className = "text-danger">Password must match</p>
                    :""
                }
            </div>
            <br />
            <input type="submit" value="Submit" className="btn btn-info" />
        </form>

        <div>
            <p>Name: {firstName} {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
        

        </>
    )
}

export default HookForm;