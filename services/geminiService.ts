import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const getShoeRecommendation = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "لطفاً کلید API را تنظیم کنید تا بتوانم به شما کمک کنم.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert sneaker stylist and running shoe consultant for a store called "AirStride". 
      The user is speaking Farsi. 
      Analyze their need: "${userQuery}".
      Recommend a type of shoe (Running, Lifestyle, Basketball, Hiking) and explain why in 2 short sentences in Farsi.
      Be enthusiastic and cool.`,
    });
    
    return response.text || "متاسفانه مشکلی در ارتباط پیش آمد. لطفاً دوباره تلاش کنید.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "در حال حاضر سیستم پاسخگو نیست. لطفاً بعدا تلاش کنید.";
  }
};