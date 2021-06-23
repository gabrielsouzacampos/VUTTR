import { Schema, model } from 'mongoose';

const ToolSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    },
    tags: {
        type: Array,
        require: false
    }
});

export default model('Tool', ToolSchema);
