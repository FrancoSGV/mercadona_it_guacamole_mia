import baseDatos

import requests
import json

respuesta_completa = ""

response = requests.post(
    "http://localhost:11434/api/generate",
    json={
        "model": "llama3.2",
        "prompt": "Como hago una paella? dame la lista de ingredientes en el siguiente formato lista python: [ingrediente1,ingrediente2,ingrediente3,... ]--> dame solo los ingredientes, nada más, no me respondas nada textual, solo ingredientes",
        "stream": True
    },
    stream=True  # <- esto es clave
)

for line in response.iter_lines():
    if line:
        data = json.loads(line.decode("utf-8"))
        chunk = data.get("response", "")
        print(chunk, end="", flush=True)
        respuesta_completa += chunk

print("\n\nRespuesta completa guardada en variable:")
print(respuesta_completa)

'''
#AI prompt and reply
request = "Paella"
reply = ["Arroz", "Sal", "Patatas"]

#Data management
stock = baseDatos.get_column_values(baseDatos.data, "name")


available = []
for element in stock:
    if element in reply:
        available.append(element)

print(available)

result_info = baseDatos.data[baseDatos.data["name"] in available]

print(result_info)
'''