import React, { useEffect, useState } from "react";
import axios from "axios";

const VictimsPage = () => {
  const [victims, setVictims] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVictims = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/victims"); // Update your API URL
        setVictims(response.data);
      } catch (err) {
        setError("Failed to fetch victims.");
      } finally {
        setLoading(false);
      }
    };

    fetchVictims();
  }, []);

  return (
    <div className="container">
      <h2 className="my-4">Victims List</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      {!loading && !error && (
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {victims.map((victim) => (
              <tr key={victim._id}>
                <td>{victim.name}</td>
                <td>{victim.location}</td>
                <td>{victim.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VictimsPage;
