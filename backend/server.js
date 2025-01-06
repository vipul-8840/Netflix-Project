
import cookieParser from "cookie-parser";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./db.js";
import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import express from "express";
import path from "path";
import { protectRoute } from "./middleware/protectRoute.js";
import searchRoutes from "./routes/search.route.js"
const app  = express();
const PORT = ENV_VARS.PORT || 3000;
const __dirname = path.resolve();
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie",protectRoute, movieRoutes);
app.use("/api/v1/tv",protectRoute,tvRoutes);
app.use ("/api/v1/search",protectRoute,searchRoutes)
if (ENV_VARS.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}
app.listen(PORT, () => {
    console.log("Server started at http://localhost:" + PORT)
    connectDB();
})