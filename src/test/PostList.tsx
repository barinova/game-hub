import { usePosts } from '@/hooks/usePosts.ts';
import { useState } from 'react';
import { Button, HStack, List, ListItem } from '@chakra-ui/react';

export const PostList = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const { posts, error, isLoading } = usePosts({ page, pageSize });

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <List spacing="10px" paddingLeft="10px">
        {posts?.map(post => (
          <ListItem key={post.id}>
            <h3>{post.title.toUpperCase()}</h3>
            <p>{post.body}</p>
          </ListItem>
        ))}
      </List>

      <HStack spacing="20px" paddingTop="20px" paddingLeft="10px">
        <Button
          className="btn btn-primary"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </Button>
        <Button className="btn btn-primary" onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </HStack>
    </>
  );
};
