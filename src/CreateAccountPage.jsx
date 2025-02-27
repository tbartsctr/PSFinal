import React, {useState} from "react";
import axios from "axios";
import Layout from "./Layout";
import "./CreateAccount.css";


function CreateAccountPage(){
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

         console.log(user);

        try{
            const response = await axios.post('http://localhost:5000/api/users', user);
            console.log ("User created:", response.data);
        } catch (err) {
            console.error("Error creating account", err);
            if (err.response && err.response.data) {
                setError(err.response.data.message || "Error creating account");
            } else {
                setError("Error creating account");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteAccount = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);
    
        try {
          const response = await axios.post("http://localhost:5000/api/users/delete", user); 
          
          setMessage("Account deleted successfully!");
          console.log("Account deleted:", response.data);
        } catch (err) {
          console.error("Error deleting account", err);
          if (err.response && err.response.data) {
            setError(err.response.data.message || "Error deleting account");
          } else {
            setError("Error deleting account");
          }
        } finally {
          setLoading(false);
        }
      };

    return (
            <div className="createAccountContainer">
                <h1 id="createAccountTxt">Create Account</h1>
                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                    />
                    </div>

                    <div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button id="createAccountBtn" type="submit" disabled={loading}>
                        {loading ? "Creating account..." : "Create Account"}
                    </button>
                    <button
                        id="deleteAccountBtn"
                        type="button"
                        onClick={handleDeleteAccount}
                        disabled={loading}
          >
                    {loading ? "Deleting account..." : "Delete Account"}
          </button>
                </form>
            </div>
        
    );

}

export default CreateAccountPage;