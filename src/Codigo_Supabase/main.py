import baseDatos
import requests
import json
import time 

respuesta_completa = ""
#We ask the llama api about information
response = requests.post(
    "http://localhost:11434/api/generate",
    json={
        "model": "llama3.2",
        "prompt": "Un filete de carne? dame la lista de ingredientes en el siguiente formato lista python: [ingrediente1,ingrediente2,ingrediente3,... ]--> dame solo los ingredientes, nada más, no me respondas nada textual, solo ingredientes",
        "stream": True
    },
    stream=True  # <- esto es clave
)


print("\n\nRespuesta modelo LLM:")
time.sleep(5)
for line in response.iter_lines():
    if line:
        data = json.loads(line.decode("utf-8"))
        chunk = data.get("response", "")
        print(chunk, end="", flush=True)
        respuesta_completa += chunk


#Processing the data
import ast
ingredientes = ast.literal_eval(respuesta_completa)

#Stock
print("\n\nElementos en stock y su información:")
print(baseDatos.data[baseDatos.data["name"].isin(ingredientes)])


