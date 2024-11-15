"use client";

import * as React from "react";
import { Combobox } from "./ComboboxDemoTTT";

export function FormContainer() {
  const [formData, setFormData] = React.useState({
    framework: "",
    location: "",
    type: "",
  });

  const frameworks = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
  ];

  const locations = [
    { value: "hostel-1", label: "Hostel 1" },
    { value: "hostel-2", label: "Hostel 2" },
  ];

  const types = [
    { value: "single", label: "Single Room" },
    { value: "shared", label: "Shared Room" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Send data to the endpoint here
  };

  return (
    <div onSubmit={handleSubmit} className="space-y-4">
      <Combobox
        options={frameworks}
        value={formData.framework}
        onChange={(value) => setFormData((prev) => ({ ...prev, framework: value }))}
        placeholder="Select a framework"
      />

      <Combobox
        options={locations}
        value={formData.location}
        onChange={(value) => setFormData((prev) => ({ ...prev, location: value }))}
        placeholder="Select a location"
      />

      <Combobox
        options={types}
        value={formData.type}
        onChange={(value) => setFormData((prev) => ({ ...prev, type: value }))}
        placeholder="Select a room type"
      />

      <button type="submit" onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </div>
  );
}
