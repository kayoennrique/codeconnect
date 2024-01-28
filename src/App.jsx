import "./App.css";
import ResearchBar from "./components/ResearchBar";
import Filter from "./components/Filter";
import Ordering from "./components/Ordering";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/kayoennrique/e99b3c9b7037bd62f758b009344b8b3f/raw/a5a55cb6d9f7067f929133a827294290cde8e296/gistfile1.txt"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="container">
      <Sidebar />
      <div>
        <ResearchBar />
        <Filter />
        <Ordering />
        <ul className="list-cards">
          {data
            ? data.map((item, index) => (
                <li key={index}>
                  <Card
                    id={item.id}
                    imageUrl={item.image_cover}
                    title={item.title}
                    summary={item.summary}
                    codelines={item.codelines}
                    shares={item.shares}
                    comments={item.comments}
                    user={item.user}
                  />
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default App;
