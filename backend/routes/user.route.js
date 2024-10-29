import express from "express";
import {
  allUsers,
  login,
  logout,
  signup,
} from "../controllers/user.controller.js";

import secureRoute from "../middlewares/secureRoute.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/allusers", secureRoute, allUsers);

export default router;