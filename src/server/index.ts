import morgan from "morgan";
import app from "./app";
import pingRouter from "../features/ping/router/PingRouter";
import express from "express";

app.use(express.json());
app.use(morgan("dev"));

app.use("/", pingRouter);
