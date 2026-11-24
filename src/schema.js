// Shared data contract between the AI layer (Person A) and the UI (Person B).
// Both sides must follow this shape.
export const exampleIncident = {
  incident: {
    title: "Example incident title",
    summary: "Short plain-language summary of what happened.",
    source: "Name of the official report and link",
  },
  links: [
    {
      id: 1,
      layer: "Training", // Training / Oversight / Equipment / Procedure
      hole: "What was missing in this layer?",
      prevention: "What would have prevented the accident here?",
    },
  ],
  outcome: "How did the accident happen?",
};