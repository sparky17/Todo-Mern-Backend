// const zod = require('zod');
import zod from 'zod';
// import mongoose from 'mongoose';

const createTodo=zod.object({
    title:zod.string(),
    description:zod.string()
})

const updateTodo=zod.object({
    id:zod.string(),
})

export {
    createTodo,
    updateTodo
}