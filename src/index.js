import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3100;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
