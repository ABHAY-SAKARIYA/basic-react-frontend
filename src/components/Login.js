import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export default function Login() {
    const [cred, setCred] = useState({
        username: "",
        password: ""
    });

    const API_URL = "https://basic-api-z0e9.onrender.com/";

    const [resp,setResp] = useState(null);

    let history = useNavigate();
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        let Data = {
            username: cred.username,
            password: cred.password
        }
        const response = await axios({
            url: `${API_URL}auth/login`,
            method: "POST",
            data: Data
        });

        // console.log(response.data)
        setResp(response.data)

        if (response.data.type === "success"){
            localStorage.setItem("token",response.data.authToken);
            history("/crud");
        }
    }

    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value });
    }

    const titleStyle = {
        fontSize: 2 + "rem",
        fontWeight: 600
    }
    return (
        <>
        {resp!==null && resp.type==="danger" &&
            <div className="alert alert-danger" role="alert">
                {resp.error}
            </div>  
}
            <div className="container my-4" style={{ height: 100 + "vh" }}>
                <div style={titleStyle}>Login</div>
                <form className='my-4 mx-6' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" value={cred.username} name='username' onChange={onChange} className="form-control" id="username" aria-describedby="usernameHelp" minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" value={cred.password} name='password' onChange={onChange} className="form-control" id="password" minLength={8} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}
