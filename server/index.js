import express from "express";
import path from 'path'
import { fileURLToPath } from 'url';
const PORT = process.env.PORT || 3001;

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});