import { useEffect, useState } from "react";
import Story from "./Story";

export default function ReadStory() {
  const [story, setStory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/story").then((response) => {
      response.json().then((story) => {
        setStory(story);
      });
    }, []);
  });
  return <>{story.length > 0 && story.map((story) => <Story {...story} />)}</>;
}
