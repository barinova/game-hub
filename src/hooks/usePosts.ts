import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostQuery {
  pageSize: number;
}

export const usePosts = (query: PostQuery) => {
  const postsList = (pageParam: number) =>
    axios
      .get<Post[]>('http://jsonplaceholder.typicode.com/posts', {
        params: {
          _start: (pageParam - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then(res => res.data);

  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<Post[], Error>({
    queryKey: ['posts', query],
    queryFn: ({ pageParam = 1 }) => postsList(pageParam),
    staleTime: 1000 * 10,
    placeholderData: prev => prev,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });

  return {
    posts,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
  };
};
