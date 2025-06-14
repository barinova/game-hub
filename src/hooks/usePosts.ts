import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const usePosts = () => {
  const postsList = () =>
    axios
      .get<Post[]>('http://jsonplaceholder.typicode.com/posts')
      .then(res => res.data);

  const {
    data: posts,
    error,
    isLoading,
  } = useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: postsList,
    staleTime: 1000 * 10,
  });

  return {
    posts,
    isLoading,
    error,
  };
};
