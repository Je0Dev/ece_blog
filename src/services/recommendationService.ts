import { GoogleGenAI, Type } from "@google/genai";
import { JOURNAL_ENTRIES } from "../data/entries";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export interface RecommendedPost {
  id: string;
  title: string;
  reason: string;
}

export const getAIRecommendations = async (currentPostId: string): Promise<RecommendedPost[]> => {
  const currentPost = JOURNAL_ENTRIES.find(e => e.id === currentPostId);
  if (!currentPost) return [];

  const otherPosts = JOURNAL_ENTRIES.filter(e => e.id !== currentPostId).map(e => ({
    id: e.id,
    title: e.title,
    excerpt: e.excerpt,
    category: e.category,
    tech: e.tech
  }));

  const prompt = `
    You are an expert content recommendation engine for a technical digital garden.
    
    CURRENT POST:
    Title: ${currentPost.title}
    Category: ${currentPost.category}
    Excerpt: ${currentPost.excerpt}
    Tech: ${currentPost.tech.join(", ")}
    
    AVAILABLE POSTS TO RECOMMEND:
    ${JSON.stringify(otherPosts, null, 2)}
    
    TASK:
    Select exactly 3 posts from the AVAILABLE POSTS that are most semantically related to the CURRENT POST.
    Look for deep technical connections (e.g., if current is about FPGA, recommend other hardware or low-level systems posts).
    If the current post is a 'project', prioritize other 'projects' or 'lab-notes' that use similar tech.
    
    For each recommendation, provide a brief "reason" (max 15 words) explaining the specific technical or thematic link.
    Avoid generic reasons like "Both are in the same category". Be specific about the technology or concept.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              title: { type: Type.STRING },
              reason: { type: Type.STRING }
            },
            required: ["id", "title", "reason"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    
    return JSON.parse(text);
  } catch (error) {
    console.error("AI Recommendation Error:", error);
    // Fallback to basic category/tech matching if AI fails
    return JOURNAL_ENTRIES
      .filter(e => e.id !== currentPostId)
      .sort((a, b) => {
        const commonTechA = a.tech.filter(t => currentPost.tech.includes(t)).length;
        const commonTechB = b.tech.filter(t => currentPost.tech.includes(t)).length;
        return commonTechB - commonTechA;
      })
      .slice(0, 3)
      .map(e => ({
        id: e.id,
        title: e.title,
        reason: "Based on shared technology and category."
      }));
  }
};
