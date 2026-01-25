import type { ComponentType } from "react";

import PostWhatQuantumComputingCanDoToday from "@/content/posts/what-quantum-computing-can-do-today-and-what-it-absolutely-cannot";

export const postRegistry: Record<string, ComponentType> = {
  "what-quantum-computing-can-do-today-and-what-it-absolutely-cannot":
    PostWhatQuantumComputingCanDoToday,
};
