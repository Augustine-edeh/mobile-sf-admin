import React from 'react'

const Login = () => {
    return (
        <div>
            <h1 className="events-section">Log In</h1>
            <label className="text-white">User Name</label>
            <input
                type="text"
                placeholder="User name"
                className="form-control"
            // value={startData}
            // onChange={e => setStartData(e.target.value)} 
            />
            <label className="text-white">Password</label>
            <input
                type="text"
                placeholder="Password"
                className="form-control"
            // value={startData}
            // onChange={e => setStartData(e.target.value)} 
            />
            <button type="button" className="btn btn-danger btn-sm mt-5">Log In</button>
            <button type="button" className="btn btn-danger btn-sm mt-5">Register</button>

        </div>
    )
}

export default Login