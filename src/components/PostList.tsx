import { usePosts } from '@/hooks/usePosts.ts';
import { Button, HStack, List, ListItem } from '@chakra-ui/react';
import React from 'react';

export const PostList = () => {
  const pageSize = 10;
  const { posts, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({
      pageSize,
    });

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <List spacing="10px" paddingLeft="10px">
        {posts.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map(post => (
              <ListItem key={post.id}>
                <h3>{post.title.toUpperCase()}</h3>
              </ListItem>
            ))}
          </React.Fragment>
        ))}
      </List>

      <HStack spacing="20px" paddingTop="20px" paddingLeft="10px">
        <Button
          className="btn btn-primary"
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </Button>
      </HStack>
    </>
  );
};
