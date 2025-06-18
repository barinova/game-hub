import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostQuery {
  page: number;
  pageSize: number;
}

export const usePosts = (query: PostQuery) => {
  const postsList = (query: PostQuery) =>
    axios
      .get<Post[]>('http://jsonplaceholder.typicode.com/posts', {
        params: {
          _start: (query.page - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then(res => res.data);

  const {
    data: posts,
    error,
    isLoading,
  } = useQuery<Post[], Error>({
    queryKey: ['posts', query],
    queryFn: () => postsList(query),
    staleTime: 1000 * 10,
    placeholderData: prev => prev,
  });

  return {
    posts,
    isLoading,
    error,
  };
};
