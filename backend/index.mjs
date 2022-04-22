import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;
import router from "./router/index.mjs";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(cors());
app.use("/", (req, res) => {
  res.status(404).json({
    message: "404 Page Not Found!",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
