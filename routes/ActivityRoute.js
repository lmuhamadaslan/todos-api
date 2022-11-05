import express from "express";
import {
  getActivityGroups,
  getActivityGroupById,
  createActivityGroup,
  deleteActivityGroup,
  updateActivityGroup,
} from "../controllers/ActivityContoller.js";

const router = express.Router();

// GET /activity-groups
router.get("/activity-groups", getActivityGroups);

// GET /activity-groups/:id
router.get("/activity-groups/:id", getActivityGroupById);

// POST /activity-groups
router.post("/activity-groups", createActivityGroup);

// DELETE /activity-groups/:id
router.delete("/activity-groups/:id", deleteActivityGroup);

// PATCH /activity-groups/:id
router.patch("/activity-groups/:id", updateActivityGroup);

export default router;
