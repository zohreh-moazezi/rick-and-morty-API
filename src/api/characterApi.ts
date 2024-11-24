import { Characters } from "interface/character";
import axiosInstance from "./axiosInstance";

export const fetchCharacter = async (
  newChar: number[]
): Promise<Characters[]> => {
  try {
    const requests = newChar.map(async (id) => {
      try {
        const characterResponse = await axiosInstance.get(`/character/${id}`);

        const episodeRequest = characterResponse.data.episode.map(
          (episodeUrl: "string") => {
            const episodeId = episodeUrl.split("/").pop();
            return axiosInstance.get(`/episode/${episodeId}`);
          }
        );

        const episodeResponses = await Promise.all(episodeRequest);

        return {
          ...characterResponse.data,
          episodes: episodeResponses.map(
            (episodeResponse) => episodeResponse.data.name
          ),
        };
      } catch (characterError) {
        console.error(
          `Error fetching character with ID ${id}:`,
          characterError
        );
        return null;
      }
    });

    const responses = await Promise.all(requests);
    const validResponses = responses.filter(
      (response) => response !== null
    ) as Characters[];
    return validResponses;
  } catch (generalError) {
    console.error("Error fetching characters:", generalError);
    return [];
  }
};
