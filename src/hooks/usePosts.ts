import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const usePosts = (userId: number | undefined) => {
  const postsList = (userId: number) =>
    axios
      .get<Post[]>('http://jsonplaceholder.typicode.com/posts', {
        params: {
          userId,
        },
      })
      .then(res => res.data);

  const {
    data: posts,
    error,
    isLoading,
  } = useQuery<Post[], Error>({
    queryKey: userId ? ['users', userId, 'posts'] : ['posts'], // /users/1/posts
    queryFn: () => postsList(userId),
    staleTime: 1000 * 10,
  });

  return {
    posts,
    isLoading,
    error,
  };
};
