import { Model, Schema, model, models } from 'mongoose';

export interface ISeries {
    name: string,
    episode: number,
    salt: number,
    runningDay:number,
    startDay:Date,
    user:string
}

const SeriesSchema = new Schema<ISeries>({},{
    collection : "Series"
});

const Series = models?.Series as Model<ISeries> || model<ISeries>("Series", SeriesSchema);

export default Series;