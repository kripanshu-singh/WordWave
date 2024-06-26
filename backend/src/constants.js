import dotenv from "dotenv";

dotenv.config({
    path: "./.env",
});

export const DB_NAME = "MERNblog";
export const port = process.env.PORT || 8000;
