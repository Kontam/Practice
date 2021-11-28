import { Link, useLoaderData } from "remix";
import { getPosts } from "~/post";

export let loader = () => {
  return getPosts();
}

export default function Posts() {
  let posts = useLoaderData();
  console.log(posts)
	return (
		<div>
			<h1>Posts Knat</h1>
      {posts.map((post: any) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
		</div>
	)
}