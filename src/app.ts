import "reflect-metadata";
import "express-async-errors";
import express from "express";
import usersRoute from "./routes/users_routes";
import productsRoute from "./routes/products_routes";
import purchaseOrdersRoute from "./routes/orders_routes";
import purchaseOrdersItemsRoute from "./routes/orders_items_routes";
import { globalError } from "./errors/error";
import swaggerUi from "swagger-ui-express";
import swaggerrDocs from "./swagger.json";


const app = express();
app.use(express.json());

app.use("/users", usersRoute);
app.use("/products", productsRoute);
app.use("/orders", purchaseOrdersRoute);
app.use("/orders/items", purchaseOrdersItemsRoute);

app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerrDocs))

app.use(globalError);

export default app;
