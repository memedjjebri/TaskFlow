import React, { useState } from "react";

const Signup = ({ handleSignup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Tous les champs sont requis");
      return;
    }

    try {
      await handleSignup({ username, password });
      setUsername("");
      setPassword("");
    } catch (err) {
      setError("Erreur lors de l'inscription, veuillez réessayer");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl mb-4">Sign Up</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          placeholder="Username"
          className="border border-teal-300 mb-2 px-4 py-2 rounded-md"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-teal-300 mb-4 px-4 py-2 rounded-md"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          type="submit"
          className="bg-teal-500 text-white rounded-md px-4 py-2 hover:bg-teal-600 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
