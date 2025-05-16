console.clear();
import { API_KEY } from './config.js';


async function gpt(prompt) {
    

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [{role: "user", content: prompt}],
                temperature: 0 // deterministic output
            })
        });
    const result = await response.json();
    return result.choices[0].message.content;
}


//getting url
document.getElementById('btn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const url = tabs[0].url;
        console.log(url)
    });
});





const result = await gpt("what is 1+1");
console.log(result)
document.getElementById('news_source').value = result;
document.getElementById('article').value = result;