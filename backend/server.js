require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");
const helpRequestRoutes = require("./routes/helpRequests");
const sheltersRoutes = require("./routes/Shelter");
const volunteers = require("./routes/Volunteers");
const users = require("./routes/Users");
const victimRoutes = require("./routes/Victims.js"); // ✅ Added Victim Routes

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// Adding routes
app.use("/api/help-requests", helpRequestRoutes);
app.use("/api/shelters", sheltersRoutes);
app.use("/api/volunteers", volunteers);
app.use("/api/users", users);
app.use("/api/victims", victimRoutes); // ✅ Added Victim API routes
// app.use("/api/victims", victimRoutes);


// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// WebSocket Connection
io.on("connection", (socket) => {
  console.log("User Connected:", socket.id);

  socket.on("send_help_request", (data) => {
    io.emit("receive_help_request", data); // Broadcast to all volunteers
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
  });
});

app.get("/", (req, res) => {
  res.send("Disaster Relief API Running...");
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
