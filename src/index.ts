// main starting point
import express, { Request, Response } from "express";
const app = express();
const port = 3000;

// Middleware for parsing JSON request bodies
app.use(express.json());

// Example Route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello TypeScript with Express! Enjoy");
});
export const getExample = (req: Request, res: Response) => {
  res.json({ message: "This is a sample endpoint" });
};
// Example Route to test a controller
app.get("/example", getExample);

// Start the server
export default app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
