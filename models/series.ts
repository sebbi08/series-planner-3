import { InferSchemaType, Model, Schema, model, models } from 'mongoose';



const SeriesSchema = new Schema({
    name: { type: String, required: true },
    episode: { type: Number, required: true },
    season: { type: Number, required: true },
    runningDay: { type: Number, required: true },
    startDay: { type: Date, required: true },
    user: { type: String, required: true },
}, {
    collection: "Series"
});

export type ISeries = InferSchemaType<typeof SeriesSchema>;

const Series = models?.Series as Model<ISeries> || model<ISeries>("Series", SeriesSchema);

export default Series;