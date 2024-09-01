
import mongoose, { Schema, Document } from 'mongoose';

interface IImage extends Document {
    title: string;
    url: string;
    userId: number;
}

const ImageSchema: Schema = new Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    userId: { type: Number, required: true }
});

export const Image = mongoose.model<IImage>('Image', ImageSchema);
