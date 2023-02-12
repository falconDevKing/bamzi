import { error, success } from "utils/response.js";

export default function handler(req, res) {
  let reservation = new Reservation({
    name: req.body.name,
    email: req.body.email,
    industry: req.body.industry,
    designation: req.body.designation,
  });
  reservation
    .save()
    .then((response) => {
      res.json({
        message: "Reservation successfully!",
      });
    })
    .catch((error) => {
      const errorResponse = error();
      res.json({
        message: "An error occurred!",
      });
    });
}
