import { NextResponse } from "next/server";
import OpenAI from "openai";
import { env } from "@/lib/env";

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY || "",
});

export async function POST(request: Request) {
  try {
    const { name, attributes } = await request.json();

    if (!name) {
      return NextResponse.json({ error: "Plant name is required" }, { status: 400 });
    }

    const prompt = `Write a high-end, editorial-style, botanical description for a plant named "${name}". 
    Consider these attributes: ${attributes || "none provided"}. 
    The tone should be sophisticated, organic, and evocative. 
    Keep it within 3-4 sentences.`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 200,
    });

    const description = response.choices[0]?.message?.content?.trim();

    return NextResponse.json({ description }, { status: 200 });
  } catch (error: any) {
    console.error("OpenAI Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
