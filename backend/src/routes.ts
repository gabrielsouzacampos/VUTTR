import { Router } from 'express';
import { ToolController } from "./controllers/ToolController";

const router = Router();
const toolController = new ToolController();

router.get("/tools", toolController.findTools);

router.post("/newTool", toolController.newTool);

router.delete("/deleteTool", toolController.deleteTool);

export { router };
