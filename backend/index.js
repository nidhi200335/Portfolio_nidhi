import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

app.use(
    cors({
        origin: "http://localhost:3000",
      methods: ["POST"],
      credentials: true,
    })
  );
  const PORT=5000;
  const connectDB =async()=>{
    try{
       const conn= await mongoose.connect(process.env.MONGO_URL);
       console.log(`connected to database ${conn.connection.host}`);
    }
    catch(error){
        console.log(`Error is ${error}`)
    }
}
app.use("/api/v1/reservation", reservationRouter);

connectDB();

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});