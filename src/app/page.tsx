import Hero from "@/components/Hero/page";
import MoreStories from "@/components/MoreStories/page";

export default function Home() {
  return (
   <>
    <Hero />
    <MoreStories title="Artificial Intelligence" />
    <MoreStories title="Technology" />
    <MoreStories title="Design" />
    <MoreStories title="More Stories" />
   </>
  );
}

