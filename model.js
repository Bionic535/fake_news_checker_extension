console.clear()
import dotenv from 'dotenv';
import OpenAI from 'openai';
dotenv.config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function check() {
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            {
                role: "user",
                content: "is forbes a legit news source",
            },
        ],
        store: true,
    });

    console.log(completion.choices[0].message.content);
}

check();