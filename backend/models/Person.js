import mongoose from "mongoose";

const personSchema = new mongoose.Schema(
    
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

        gotra: {
            type: String,
            required: true
        },
        
        spouseId: { type: mongoose.Schema.Types.ObjectId, ref: "Person" },
        childrenIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Person" }]
    },
    {
        timestamps: true
    }
);

// specifing collection name in the end (earlier mongoose does that automatically)
export const Person = mongoose.model("Person", personSchema, "people")