import { createOpenAI } from "@ai-sdk/openai";
import type { LanguageModelV2, EmbeddingModelV2 } from "@ai-sdk/provider";

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const models: {
  chat: LanguageModelV2;
  embeddings: EmbeddingModelV2<string>;
} = {
  chat: openai("gpt-4o-mini"),
  embeddings: openai.textEmbeddingModel("text-embedding-3-small"),
};
