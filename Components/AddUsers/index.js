import axios from "axios";
import React, { useState } from "react";

const AddUsers = (props) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');


    const handleChangeName = e => {
        setName(e.target.value)
    }

    const handleChangeUserName = e => {
        setUsername(e.target.value)
    }
    const handleChangeEmail = e => {
        setEmail(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        const user = {
            name,
            username,
            email
        };

        axios.post('https://jsonplaceholder.typicode.com/users', { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{ marginLeft: "10px" }} className="ui left icon input">
                    <i className="users icon"></i>
                    <input type="text" placeholder="User" value={name} name="name" onChange={handleChangeName} />
                </div>
                <div style={{ marginLeft: "10px" }} className="ui left icon input">
                    <i className="user secret icon"></i>
                    <input type="text" placeholder="Username" value={username} name="userName" onChange={handleChangeUserName} />
                </div>
                <div style={{ marginLeft: "10px" }} className="ui left icon input">
                    <i className="user secret icon"></i>
                    <input type="text" placeholder="Email" value={email} name="email" onChange={handleChangeEmail} />
                </div>
                <button style={{ marginLeft: "10px" }} className="positive ui button" type="submit"> Submit</button>
            </form>
        </div>
    )
}

export default AddUsers;