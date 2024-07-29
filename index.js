import express from 'express';
const app=express();
import { Todo } from './db/db.js';
import { Schema } from 'zod';
import { createTodo,updateTodo } from './types/types.js';
import cors from 'cors';

app.use(express.json());
app.use(cors({}));


// body - title:String , description:String 
app.post("/todo",async (req,res)=>{
    const createPayload =req.body;
    const parsedPayload= createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You send the wrong payload"
        })
        return;
    }
    // Put in mongo db using Schema 
    await Todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"Added"
    })
})
    
app.get("/todos",async (req,res)=>{
    const Todos=await Todo.find();
    res.json({
        Todos
    })
})

app.put("/completed",async (req,res)=>{
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You send the wrong payload"
        })
        return;
    }
    await Todo.updateOne({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"Todo updates succesfully"
    })
})

app.listen(3000);

console.log("app is listing on port 3000")