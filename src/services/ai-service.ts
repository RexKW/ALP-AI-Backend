import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import { logger } from "../application/logging";

const genAI = new GoogleGenerativeAI("AIzaSyBMS3yjFOSgQWGDeUbyyYHm89s92IFlIt0");

export class AIService {
    static async detectIngredients(imagePath: string): Promise<string[]> {
        const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

        const imageBuffer = fs.readFileSync(imagePath);
        const imageBase64 = imageBuffer.toString("base64");

        const prompt = `
            Analyze this image of food ingredients. 
            Identify the raw ingredients visible (e.g. chicken, egg, onion).
            Return ONLY a raw JSON array of strings in English. 
            Do not include markdown formatting like \`\`\`json. 
            Example output: ["chicken", "tomato", "garlic"]
        `;

        const imagePart = {
            inlineData: {
                data: imageBase64,
                mimeType: "image/jpeg", 
            },
        };

        try {
            const result = await model.generateContent([prompt, imagePart]);
            const response = await result.response;
            const text = response.text();

            const cleanText = text.replace(/```json|```/g, "").trim();
            
            logger.info("AI Response: " + cleanText);

            const ingredients: string[] = JSON.parse(cleanText);
            return ingredients;
        } catch (error) {
            logger.error(error);
            throw new Error("Failed to identify ingredients from image");
        }
    }
}
