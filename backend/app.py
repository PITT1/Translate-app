from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import translators as ts

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Texto(BaseModel):
    texto: str
    idioma_destino: str

@app.post("/traducir")
async def traducir_texto(texto: Texto):
    try:
        traduccion = ts.translate_text(texto.texto, 'google', 'auto', texto.idioma_destino)
        return {"traduccion": traduccion}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app)