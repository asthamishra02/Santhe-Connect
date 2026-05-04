import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch"; // IMPORTANT FIX

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Health check route (helps debug quickly)
app.get("/", (req, res) => {
  res.send("Santhe-Connect backend is running 🚀");
});

// AI generate endpoint
app.post("/generate", async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.json({ text: "No place name provided." });
    }

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "user",
              content: `Describe this local place for tourists in 2 lines: ${name}`
            }
          ]
        })
      }
    );

    const data = await response.json();

    const text =
      data?.choices?.[0]?.message?.content ||
      "A beautiful local spot with authentic experience.";

    res.json({ text });
  } catch (err) {
    console.error("❌ Backend Error:", err);

    res.json({
      text: "A local cultural spot loved by visitors for its authentic vibe."
    });
  }
});

// Start server
app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});