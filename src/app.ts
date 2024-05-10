import express, { Request, Response } from "express";
import { accountsRouter } from "./controllers/AccountsControllers";
import { resetRouter } from "./controllers/ResetController";
import { eventsRouter } from "./controllers/EventsController";

const port = 5050;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/balance", accountsRouter);
app.use("/reset", resetRouter);
app.use("/event", eventsRouter)

app.listen(port, () => {
    console.log(`Server running at https://localhost:${port}`)
})