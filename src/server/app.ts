import "dotenv/config";
import express from "express";
import chalk from "chalk";

const app = express();

const port = process.env.PORT ?? 4000;

export const startServer = (port: number) => {
  app.listen(port, () => {
    console.log(chalk.yellow`Listening on http://localhost:${port}`);
  });
};

export default app;