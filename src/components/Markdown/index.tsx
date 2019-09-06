import * as React from "react";
import markdown from "../../../readme.md";

// if (process.env.NODE_ENV === "production") {
//   console.log("Welcome to production");
// } else {
//   console.log("Welcome to development");
//   console.log(process.env);
// }

const Markdown = () => {
  return (
    <div
      className="markdown"
      dangerouslySetInnerHTML={{ __html: markdown }}
    ></div>
  );
};

export default Markdown;
