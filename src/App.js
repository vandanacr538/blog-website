import React from "react";
import Blog from "./components/Blog/Blog";
import BlogProvider from "./store/BlogProvider";

function App() {
  return (
    <BlogProvider>
      <Blog />
    </BlogProvider>
  );
}

export default App;
