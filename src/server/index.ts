import morgan from "morgan";
import app from "./app";
import PingController from "../features/ping/controller/PingController";
import pingRouter from "../features/ping/router/PingRouter";
import express from "express";

const pingController = new PingController();

app.use(express.json());
app.use(morgan("dev"));

app.use("/", pingRouter);
