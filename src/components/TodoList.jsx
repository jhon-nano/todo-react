import React from "react";

export default function TodoList({ children }) {
  return (
    <section>
      <ul>{children}</ul>
    </section>
  );
}
