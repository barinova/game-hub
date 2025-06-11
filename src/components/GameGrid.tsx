import { useEffect, useState } from 'react';
import { apiClient } from '@/services/api-client.ts';

interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>('/xgames')
      .then(res => setGames(res.data.results))
      .catch(err => setError(err.message));
  }, []);

  return (
    <>
      {error && <p>Error: {error}</p>}
      {/* Render the list of games */}
      <ul>{games?.map(game => <li key={game.id}>{game.name}</li>)}</ul>
    </>
  );
};
