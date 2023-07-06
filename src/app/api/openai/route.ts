import { AxiosResponse } from "axios";
import { NextResponse } from "next/server";
import { Configuration, CreateChatCompletionResponse, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { title, role } = await req.json();

    const aiResponse: AxiosResponse<CreateChatCompletionResponse, any> =
      await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            //content: `Create small blog post with html tages based on this title: ${title}`,
            // smaller response due to vercel timeout
            content: `Create small 3 line post with html tages based on this title: ${title}`,
          },
          {
            role: "system",
            content: `${
              role || "I am a helpful assistant"
            }, Write with html tags`,
          },
        ],
      });

    return NextResponse.json(
      {
        content: aiResponse.data.choices[0].message?.content,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("request error", error);
    NextResponse.json({ error: "error updating post" }, { status: 50 });
  }
}
