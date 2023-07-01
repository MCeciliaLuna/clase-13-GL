import express from "express";

const app = express();

app.get("/api/students", (_req, res) => {
  console.log("API INTERNA FUNCIONANDO 🚀");
  res.status(200).json({
    students: ["a", "b", "c"],
  });
});
app.listen(3000);

export default app;
