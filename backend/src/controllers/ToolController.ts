import { Request, response, Response } from 'express';
import Tool from '../models/Tools';

class ToolController {
    async findTools (req: Request, res: Response) {
        const { tag, all } = req.query;

        let tools = {};

        if(tag === undefined) {
            if(all === undefined) {
                tools = await Tool.find({});
            }
            else{
                tools = await Tool.find({
                    "$or": [
                        {"title": new RegExp(String(all)),},
                        {"description": new RegExp(String(all)),},
                        {"link": new RegExp(String(all)),}
                    ]
                });
            }
        }
        else{
            tools = await Tool.find({"tags": new RegExp(String(tag))});
        }

        res.status(200).json(tools);
    }

    async newTool (req: Request, res: Response) {
        const { title, link, description, tags } = req.body;

        if(title === null || title === ""){
            res.status(400).json({"error": "Title is required."});
        }
        if(link === null || link === ""){
            res.status(400).json({"error": "Link is required."});
        }
        if(description === null || description === ""){
            res.status(400).json({"error": "Description is required."});
        }

        const existTool = await Tool.findOne({'link': link});
        
        if(existTool){
           res.status(400).json({"error": "This tool already exist."});    
        }
        else{
            const newTool = new Tool({
                title,
                link,
                description,
                tags
            });
    
            await newTool.save();
    
            res.status(201).json(newTool);
        }
    }

    async deleteTool (req: Request, res: Response) {
        const { id } = req.body;

        if(id === null) {
            res.status(400).json({"error": "Id is required."});
        }

        const existTool = await Tool.findOne({'_id': id});

        if(!existTool) {
            res.status(400).json({"error": "This tool does not exist."});
        }
        else{
            await Tool.deleteOne({"_id": id});

            res.status(201).json({"success": "This tool was deleted."});
        }
    }
}

export { ToolController };