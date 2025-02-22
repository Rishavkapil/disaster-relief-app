import { useEffect, useState } from "react";
import axios from "axios";

const Shelter = () => {
  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/shelters") // Adjust the URL if needed
      .then((res) => setShelters(res.data))
      .catch((err) => console.error("Error fetching shelters:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Available Shelters</h2>
      <div className="row">
        {shelters.length > 0 ? (
          shelters.map((shelter) => (
            <div key={shelter._id} className="col-md-4">
              <div className="card shadow-sm p-3 mb-4">
                <h4 className="card-title">{shelter.name}</h4>
                <p><strong>Location:</strong> {shelter.location}</p>
                <p><strong>Capacity:</strong> {shelter.capacity}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No shelters available</p>
        )}
      </div>
    </div>
  );
};

export default Shelter;
