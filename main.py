from fastapi import FastAPI, Form
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
async def getPhoto():
    async with aiofiles.open("public/photo/index.html", mode="r") as f:
        data = await f.read()
    return data

@app.get("/questionnaire", response_class=HTMLResponse)
async def getQuestionnaireHome():
    async with aiofiles.open("public/questionnaire/index.html", mode="r") as f:
        data = await f.read()
    return data


@app.get("/questionnaire/q", response_class=HTMLResponse)
async def getQuestionnaire():
    async with aiofiles.open("public/questionnaire/q/index.html", mode="r") as f:
        data = await f.read()
    return data

@app.post("/questionnaire/q", response_class=HTMLResponse)
async def postQuestionnaire(
    question0: str = Form(...),
    question1: str = Form(...),
    question2: str = Form(...),
    question3: str = Form(...),
    question4: str = Form(...),
    question5: str = Form(...),
    question6: str = Form(...),
    question7: str = Form(...),
    question8: str = Form(...),
    question9: str = Form(...),
    question10: str = Form(...),
    question11: str = Form(...),
    question12: str = Form(...),
    question13: str = Form(...),
    question14: str = Form(...),
    question15: str = Form(...),
    question16: str = Form(...),
    question17: str = Form(...),
    question18: str = Form(...),
    question19: str = Form(...),
    question20: str = Form(...),
):
    anxietyScore = int((sum([ ord(x) - ord('a') for x in [question0, question1, question2, question3, question4, question5, question6]])/7)*5)
    stressScore = int((sum([ ord(x) - ord('a') for x in [question7, question8, question9, question10, question11, question12, question13]])/7)*5)
    depressionScore = int((sum([ ord(x) - ord('a') for x in [question14, question15, question16, question17, question18, question19, question20]])/7)*5)

    anxietyLabel = "low" if anxietyScore <= 10/3 else "medium" if anxietyScore <= 20/3 else "high"  
    stressLabel = "low" if stressScore <= 10/3 else "medium" if stressScore <= 20/3 else "high"  
    depressionLabel = "low" if depressionScore <= 10/3 else "medium" if depressionScore <= 20/3 else "high"  

    async with aiofiles.open("public/questionnaire/q/result.html", mode="r") as f:
        data = await f.read()
    return data.replace('<!-- anxiety-score -->', anxietyLabel).replace('<!-- stress-score -->', stressLabel).replace('<!-- depression-score -->', depressionLabel)

@app.get("/vent", response_class=HTMLResponse)
async def getVent():
    async with aiofiles.open("public/vent/index.html", mode="r") as f:
        data = await f.read()
    return data

@app.get("/gethelp", response_class=HTMLResponse)
async def gethelp():
    async with aiofiles.open("public\counsellor\index.html", mode="r") as f:
        data = await f.read()
    return data

@app.get("/about", response_class=HTMLResponse)
async def gethelp():
    async with aiofiles.open("public/about/index.html", mode="r") as f:
        data = await f.read()
    return data