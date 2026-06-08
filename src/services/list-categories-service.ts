import { repositoryPodcast } from "../repositories/podcasts-repository";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";

export const serviceListCategories = async (): Promise<any> => {
  let responseFormat: any = {
    statusCode: 0,
    body: [],
  };

  const data = await repositoryPodcast();

  // Extrai todas as categorias e remove duplicatas
  const allCategories = data.flatMap((podcast) => podcast.categories);
  const uniqueCategories = [...new Set(allCategories)];

  responseFormat.statusCode = uniqueCategories.length > 0 ? StatusCode.OK : StatusCode.NoContent;
  responseFormat.body = uniqueCategories;

  return responseFormat;
};
