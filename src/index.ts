//DEPENDENCIES, etc
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

//if there is not port to find, exit the application
if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTES

//SERVER LISTENER
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
