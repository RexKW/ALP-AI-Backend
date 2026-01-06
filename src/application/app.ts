
import express from "express";
import { publicRouter } from "../routes/public-router";
import { apiRouter } from "../routes/api"
import cors from 'cors';
import { errorMiddleware } from "../middlware/error-middleware";

const app = express()
app.use(express.json())
app.use(cors())
app.use(publicRouter)
app.use(apiRouter)
app.use(errorMiddleware)

export default app