import { useQuery } from "@tanstack/react-query";
import { Characters } from "../interface/character";
import { fetchCharacter } from "../api/characterApi";

export const UseCharacter = (characterIds: number[]) => {
  return useQuery<Characters[], Error>({
    queryKey: ["characters", characterIds],
    queryFn: ({ queryKey }) => {
      const [, ids] = queryKey;
      return fetchCharacter(ids as number[]);
    },
    enabled: characterIds.length > 0,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 3,
  });
};
