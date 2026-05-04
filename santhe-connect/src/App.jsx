import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

function App() {
  const [showToday, setShowToday] = useState(false);

  const [locations, setLocations] = useState([
    {
      id: "1",
      name: "Sunday Santhe - Mysore",
      lat: 12.97,
      lng: 77.59,
      day: "Sunday",
      category: "santhe",
      description: "A lively weekly market with local crafts and fresh produce."
    },
    {
      id: "2",
      name: "Thatte Idli Corner",
      lat: 12.96,
      lng: 77.58,
      category: "food",
      description: "A famous spot for soft thatte idlis and chutney."
    }
  ]);

  const [name, setName] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [day, setDay] = useState("");
  const [category, setCategory] = useState("food");

  const today = new Date().toLocaleString("en-US", {
    weekday: "long"
  });

  const filteredLocations = showToday
    ? locations.filter(
        (loc) =>
          loc.category === "santhe" &&
          loc.day?.toLowerCase() === today.toLowerCase()
      )
    : locations;

  // 🤖 AI call (to backend)
  const generateDescription = async (name) => {
    try {
      const res = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
      });

      const data = await res.json();
      return data.text;
    } catch (err) {
      console.error(err);
      return "Local place with authentic experience.";
    }
  };

  // ➕ Add location with AI
  const addLocation = async () => {
    if (!name || !lat || !lng) return;

    const description = await generateDescription(name);

    const newLoc = {
      id: uuidv4(),
      name,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      day: category === "santhe" ? day : undefined,
      category,
      description
    };

    setLocations([...locations, newLoc]);

    setName("");
    setLat("");
    setLng("");
    setDay("");
  };

  // 📍 GPS
  const getMyLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLat(pos.coords.latitude.toString());
      setLng(pos.coords.longitude.toString());
    });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f5f5f5" }}>
      <h1 style={{ textAlign: "center", padding: "10px" }}>
        🌾 Santhe-Connect
      </h1>

      {/* Controls */}
      <div
        style={{
          background: "white",
          padding: "15px",
          margin: "10px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <button
            onClick={() => setShowToday(!showToday)}
            style={{
              padding: "10px 15px",
              background: "#ff9800",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            {showToday ? "Show All" : "Show Today's Santhe"}
          </button>
        </div>

        {/* Form */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center"
          }}
        >
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Latitude"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Longitude"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
            style={inputStyle}
          />

          <select
            onChange={(e) => setCategory(e.target.value)}
            style={inputStyle}
          >
            <option value="food">Food</option>
            <option value="santhe">Santhe</option>
          </select>

          {category === "santhe" && (
            <input
              placeholder="Day (Sunday...)"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              style={inputStyle}
            />
          )}

          <button onClick={addLocation} style={addBtn}>
            ➕ Add
          </button>

          <button onClick={getMyLocation} style={gpsBtn}>
            📍 Use My Location
          </button>
        </div>
      </div>

      {/* Map */}
      <MapContainer
        center={[12.9716, 77.5946]}
        zoom={6}
        style={{
          height: "75vh",
          margin: "10px",
          borderRadius: "10px",
          overflow: "hidden"
        }}
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {filteredLocations.map((loc) => (
          <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={customIcon}>
            <Popup>
              <b>{loc.name}</b>
              <br />
              {loc.category}
              <br />
              <i>{loc.description}</i>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

// 🎨 Styles
const inputStyle = {
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const addBtn = {
  background: "#4CAF50",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: "6px",
  cursor: "pointer"
};

const gpsBtn = {
  background: "#2196F3",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: "6px",
  cursor: "pointer"
};

export default App;


/////////////////////////////////working version////////////////////////
