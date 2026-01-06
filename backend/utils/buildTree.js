// utils/buildTree.js
import { Person } from "../models/Person.js";

/**
 * Build lineage tree recursively using DFS
 */
export async function buildTree(personId, visited = new Set()) {
  if (!personId) return null;

  // Prevent infinite loops (cycles / bad data)
  if (visited.has(personId.toString())) return null;
  visited.add(personId.toString());

  // Fetch the person
  const person = await Person.findById(personId);
  if (!person) return null;

  // Fetch spouse (optional)
  let spouse = null;
  if (person.spouseId) {
    spouse = await Person.findById(person.spouseId);
  }

  // Fetch children (array)
  let children = [];
  if (person.childrenIds?.length) {
    children = await Promise.all(
      person.childrenIds.map(childId =>
        buildTree(childId, visited)
      )
    );

    // remove null children (in case of missing data)
    children = children.filter(c => c !== null);
  }

  // Return structured JSON node
  return {
    id: person._id,
    name: person.name,
    gender: person.gender,
    gotra: person.gotra,
    spouse: spouse
      ? {
          id: spouse._id,
          name: spouse.name,
          gender: spouse.gender,
          gotra: spouse.gotra
        }
      : null,
    children
  };
}
