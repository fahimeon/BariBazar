import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || 'FAKE_API_KEY_FOR_DEVELOPMENT' });

export const getPropertyAdvice = async (
  query: string, 
  history: { role: string; parts: { text: string }[] }[]
) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      history: history,
      config: {
        systemInstruction: `You are BariBazar AI, an expert real estate consultant for Dhaka, Bangladesh. 
        Your goal is to help users find flats, land, or commercial spaces.
        
        Key Knowledge Areas:
        - Locations: Gulshan, Banani, Dhanmondi, Bashundhara R/A, Uttara, Mirpur, Mohammadpur.
        - Pricing: Be realistic about BDT prices per sqft in Dhaka.
        - Advice: Offer tips on legal verification, Rajuk approval, and registration costs.
        
        Tone: Professional, concise, helpful, and slightly witty. 
        Formatting: Use bullet points for lists. Keep answers under 150 words.
        
        If the user asks for listings, generate 2-3 fictional but realistic examples with approximate prices in BDT.`,
      },
    });

    const result = await chat.sendMessage({ message: query });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the property network right now. Please try again later.";
  }
};