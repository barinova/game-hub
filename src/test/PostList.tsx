import { usePosts } from '@/hooks/usePosts.ts';
import { useState } from 'react';

export const PostList = () => {
  const [selectedUserId, setSelectedUserId] = useState<number>();
  const { posts, error, isLoading } = usePosts(selectedUserId);

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <select
        className="form-select mb-3"
        value={selectedUserId}
        onChange={event => setSelectedUserId(parseInt(event.target.value))}
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul>
        {posts?.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
