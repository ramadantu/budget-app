import mongoose, { Document, Schema } from 'mongoose'

export interface IIncome extends Document {
  title: string
  amount: number
  type: string
  date: Date
  category: string
  description: string
}

const IncomeSchema: Schema<IIncome> = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    amount: {
      type: Number,
      required: true,
      max: 1_000_000,
      trim: true,
    },
    type: {
      type: String,
      default: 'income',
    },
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxLength: 20,
    },
  },
  { timestamps: true },
)

export default mongoose.model<IIncome>('Income', IncomeSchema)
