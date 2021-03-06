const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const dotenv = require("dotenv");

const app = express();

// Get the config
dotenv.config({ path: "./config/config.env" });

// Set the routers
const homepageEventsRoute = require("./routes/homepageEvents.js");

// Body parsers
app.use(fileUpload({ createParentPath: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Get the PORT
const PORT = process.env.PORT || 5000;

// Get the Api Routes
app.use("/api/v1/events", homepageEventsRoute);

// If the environment is production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../frontend/build"));

  app.get("*", (request, response) => {
    response.sendFile(
      path.resolve(__dirname, "../frontend", "build", "index.html")
    );
  });
}

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
