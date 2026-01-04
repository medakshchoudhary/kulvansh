import { Person } from "../models/Person.js"

export const createPerson = async (req,res) => {
    try {
        const person = await Person.create(req.body);
        res.json(person);
    }
    catch (err) {
        console.error(err.message)
    }
} 

export const getPersons = async (req,res) => { 
    try {
        const people = await Person.find();
        res.json(people);
    }
    catch (err) {
        console.error(err.message);
    }
}

export const getPerson = async (req,res) => { 
    try {
        const person = await Person.findById(req.params.id);
        res.json(person);
    }
    catch (err) {
        console.error(err.message);
    }
}

export const updatePerson = async (req,res) => {
    try {
        const person = await Person.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(person);
    }
    catch (err) {
        console.error(err.message);
    }
}

export const deletePerson = async (req,res) => {
    try {
        const person = await Person.findByIdAndDelete(req.params.id);
        res.json({ message: "Person deleted"});
    }
    catch (err) {
        console.error(err.message);
    }
}
