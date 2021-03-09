from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
import aiofiles

app = FastAPI()

app.mount("/static", StaticFiles(directory="public"), name="static")

@app.get("/", response_class=HTMLResponse)
async def getRoot():
    async with aiofiles.open("public/index.html", mode="r") as f:
        data = await f.read()
    return data

@app.get("/photo", response_class=HTMLResponse)
async def getRoot():
    async with aiofiles.open("public/photo/index.html", mode="r") as f:
        data = await f.read()
    return data

@app.get("/questionnaire", response_class=HTMLResponse)
async def getRoot():
    async with aiofiles.open("public/questionnaire/index.html", mode="r") as f:
        data = await f.read()
    return data

@app.get("/questionnaire/q", response_class=HTMLResponse)
async def getRoot():
    async with aiofiles.open("public/questionnaire/q/index.html", mode="r") as f:
        data = await f.read()
    return data

@app.get("/vent", response_class=HTMLResponse)
async def getRoot():
    async with aiofiles.open("public/vent/index.html", mode="r") as f:
        data = await f.read()
    return data