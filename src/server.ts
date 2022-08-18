import { app } from "./app";

const PORT = process.env.PORT || 3001;

app
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })
  .on("error", (err) => {
    console.log(err);
  });
