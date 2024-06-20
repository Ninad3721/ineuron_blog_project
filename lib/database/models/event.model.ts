import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: { _id: string, name: string }
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
})

const Event = models.Event || model('Event', EventSchema);

export default Event;