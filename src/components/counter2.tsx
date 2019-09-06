import * as React from "react";
import { greeting } from "../libs/functions";

export interface StandardComponentProps {
  title: string;
}

if (process.env.NODE_ENV === "production") {
  console.log("Welcome to production");
} else {
  console.log("Welcome to development");
  console.log(process.env);
}

export default function StandardComponent({ title }: StandardComponentProps) {
  const greetingVar = greeting("Test for TypeScript");
  // const greetingVar = greeting(1221);
  return (
    <div>
      {title} - {greetingVar}
    </div>
  );
}
