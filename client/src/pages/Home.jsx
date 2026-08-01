import { useEffect } from "react";
import Hero from "../components/Hero/Hero";
function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return <Hero />;
}
export default Home;