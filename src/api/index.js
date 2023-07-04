//archivo madre api interna

import express from "express";
import { _mock } from "./_mocks/_mock.js";

const app = express();

app.get("/api/users/:index", (req, res) => {
  const { index } = req.params;

  setTimeout(() => {
    res.status(200).json(_mock(index));
  }, 2300);
  console.log("API INTERNA FUNCIONANDO 🚀");
  console.log(_mock(index));
});
app.listen(3000);

export default app;
