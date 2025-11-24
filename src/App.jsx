import React from "react";
import StudentDataViewer from "./components/StudentDataViewer";
import Product from "./components/Product";

function App() {
  return (
  <>
    {/* <StudentDataViewer /> */}
    <Product title="Laptop" price={1299.99} inStock={true} category={["Electronics,Computers, Gaming"]}/>
</>
  )
}

export default App;
