import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function PasswordReset() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");
  const token = searchParams.get("token");
  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post(
        "localhost:8080/api/webuser/resetPassword",
        {
          userId,
          token,
          newPassword,
        }
      );

      if (response.ok) {
        navigate("/");
      } else {
        throw new Error("Password reset failed");
      }

      // Handle response and success scenario here

      // For example, if the response is successful:
      // Redirect the user to the login page or any other page
      // to indicate that the password has been reset

      // Otherwise, handle the error scenario
      // throw new Error(response.data.message || 'Password reset failed');
    } catch (error) {
      setErrorMessage(error.message);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <h1>Password Reset</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={handlePasswordChange}
        />
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}

export default PasswordReset;
