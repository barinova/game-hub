import { usePosts } from '@/hooks/usePosts.ts';

export const PostList = () => {
  const { posts, error } = usePosts();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {posts?.map(post => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};
