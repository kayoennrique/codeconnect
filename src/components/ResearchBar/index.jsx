import { useState } from "react";
import "./styles.css";

export default function ResearchBar() {
  const [termResearch, setTermResearch] = useState("");
  return (
    <input
      type="search"
      placeholder="Digite o que você procura"
      className="slash-search"
      value={termResearch}
      onChange={(e) => setTermResearch(e.target.value)}
    />
  );
}
