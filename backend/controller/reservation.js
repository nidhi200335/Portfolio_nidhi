// controller/reservation.js
import { Reservation } from "../models/reservation.js";

const send_reservation = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Create a new form entry
    const newReservation = new Reservation({
      name,
      email,
      subject,
      message,
    });

    // Save the form entry to the database
    const form = await newReservation.save();

    // Send a success response
    res.status(200).json(form);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

export default send_reservation;
