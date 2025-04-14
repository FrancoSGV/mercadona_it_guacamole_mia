import requests

API_KEY = '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'
API_URL = 'https://openrouter.ai/api/v1/chat/completions'

headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

def chat(user_prompt):
    data = {
        "model": "deepseek/deepseek-chat:free",
        "messages": [{"role": "user", "content": user_prompt}]
    }

    response = requests.post(API_URL, json=data, headers=headers)

    if response.status_code == 200:
        result = response.json()
        return result['choices'][0]['message']['content']
    else:
        print("Failed to fetch data from API. Status Code:", response.status_code)
        print("Response:", response.text)
        return None

if __name__ == "__main__":
    user_prompt = "Give me only the ingredients of a simple paella, but make the answer in the next format: [ingredient1, ingredient2...]"
    reply = chat(user_prompt)
    if reply:
        print("DeepSeek response:\n", reply)
