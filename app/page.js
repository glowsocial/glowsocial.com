import { getAllBlogPosts } from "@/lib/posts";
import HomeClient from "./components/HomeClient";

export default function HomePage() {
  // Fetch the 3 most recent blog posts to pass down for SSR link generation
  const allPosts = getAllBlogPosts() || [];
  const recentPosts = allPosts.slice(0, 3);

  return <HomeClient posts={recentPosts} />;
}
