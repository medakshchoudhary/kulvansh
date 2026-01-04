import mongoose from "mongoose";

const personSchema = new mongoose(
    
    {
        name: { type: String, required: true },

        gender: { 
            type: String,
            // enum states only one of the mentioned can be used else error (validation type)
            enum: ["male","female"],
        },

        birthDate: Date,
        deathDate: Date,

        fatherId: { type: mongoose.Schema.Types.ObjectId, ref: "Person" },
        motherId: { type: mongoose.Schema.Types.ObjectId, ref: "Person" },

        spouseId: { type: mongoose.Schema.Types.ObjectId, ref: "Person" },
        childrenIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Person" }]
    },
    {
        timestamps: true
    }
);

export const Person = mongoose.model("Person", personSchema)