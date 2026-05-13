# 🌾 Santhe-Connect

## 🌟 Local Flavor Discovery Platform for Heritage Tourism

Santhe-Connect is a location-based web application that helps tourists discover **local Santhe (weekly markets)**, **authentic eateries**, and **small hospitality businesses** that are often missing from mainstream travel platforms.

It bridges the gap between travelers and local micro-entrepreneurs by digitally mapping hidden cultural and food experiences.

---

## 🚀 Problem Statement

Tourists visiting heritage towns often struggle to find:

* Local weekly markets (Santhes)
* Authentic food spots
* Home-based or small-scale eateries

These places are usually known only to locals and lack digital visibility on major travel platforms.

---

## 💡 Solution

Santhe-Connect provides:

* 🗺️ Interactive map of local Santhe and food spots
* 📍 GPS-based location addition
* 🏷️ Specialty-tagged places (food, crafts, etc.)
* 📅 Day-wise Santhe filtering (e.g., Sunday markets)
* ⭐ User reviews and community feedback
* 🤖 AI-generated descriptions for places

---

## 🧰 Tech Stack

### Frontend

* React (Vite)
* React-Leaflet (Maps)
* Leaflet.js

### Backend / Database

* Firebase Firestore

### APIs Used

* Geoapify API (geocoding & location services)
* Custom AI endpoint (for generating place descriptions)

### Other

* Browser Geolocation API
* OpenStreetMap tiles

---

## 🗺️ Key Features

### 📍 Interactive Map

* Displays all Santhe and food locations
* Custom markers for different categories

### ➕ Add New Locations

Users can add:

* Name
* Latitude & Longitude (or GPS auto-fill)
* Category (Food / Santhe)
* Specialty tags
* Day of operation (for Santhe)

### 📅 Santhe Calendar Filter

* Shows only active Santhe for the current weekday

### 🤖 AI Description Generator

* Automatically generates short descriptions for locations

### ⭐ Reviews System

* Users can add and view reviews for each location

### 📡 GPS Integration

* “Use My Location” feature for quick coordinate capture

---

## 🧠 APIs & Services

### Geoapify

Used for geocoding and location-based services.

Example:

* Convert place name → coordinates
* Reverse geocoding support

🔗 [https://www.geoapify.com/](https://www.geoapify.com/)

---

### Firebase Firestore

Used for:

* Storing locations
* Fetching real-time updates
* Saving user-added places

---

## 📁 Project Structure

```
src/
│
├── App.jsx              # Main application logic
├── firebase.js          # Firebase configuration
├── components/          # (optional future expansion)
└── styles/
```

---

## ⚙️ How It Works

1. Default Santhe & food locations are loaded
2. Firebase adds dynamic user-generated locations
3. Data is displayed on an interactive map
4. Users can:

   * Add new locations
   * Filter by current day (Santhe)
   * View details and reviews
5. AI generates descriptions for better UX

---

## 🔥 Current Status

✔ Map integration complete
✔ Firebase Firestore integration complete
✔ GPS location capture working
✔ Add location feature working
✔ Santhe day filtering implemented
✔ Reviews system implemented
✔ AI description generation integrated
✔ Geoapify API configured

---

## 🧪 Future Improvements

* 📱 Android version using Kotlin + Coil
* 🧭 Route navigation to locations
* 📷 Image uploads for food/stalls
* 🎤 Voice reviews
* 🧑‍🤝‍🧑 User authentication
* 🔍 Search and autocomplete using Geoapify

---

## 📌 Impact

* Promotes **vocal for local**
* Supports **small food vendors and markets**
* Enhances **cultural tourism experience**
* Encourages **sustainable travel**

---

## 👨‍💻 Developer Notes

This project was built as part of an **Android App Development using GenAI** initiative.
The current implementation is a fully functional web prototype demonstrating core system design and features.

---

---

## 📜 License

This project is for educational and demonstration purposes.

---
