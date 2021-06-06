from fastapi import FastAPI, Form, File, UploadFile
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
import aiofiles
import shutil
import os
from fer import FER
import matplotlib.pyplot as plt

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/", response_class=HTMLResponse)
async def getRoot():
    async with aiofiles.open("templates/index.html", mode="r") as f:
        data = await f.read()
    return data
@app.get("/user", response_class=HTMLResponse)
async def getUser():
    async with aiofiles.open("templates/user.html", mode="r") as f:
        data = await f.read()
    return data

@app.get("/login", response_class=HTMLResponse)
async def getlogin():
    async with aiofiles.open("templates/login.html", mode="r") as f:
        data = await f.read()
    return data

@app.get("/signup", response_class=HTMLResponse)
async def getlogin():
    async with aiofiles.open("templates/sign-up.html", mode="r") as f:
        data = await f.read()
    return data

@app.get("/photo", response_class=HTMLResponse)
async def getPhoto():
    async with aiofiles.open("templates/capture.html", mode="r") as f:
        data = await f.read()
    return data
    
@app.get('/detect', response_class=HTMLResponse)
async def proceed():
    async with aiofiles.open("templates/emotions.html", mode="r") as f:
        data = await f.read()
    return data

@app.get("/questionnaire", response_class=HTMLResponse)
async def getQuestionnaireHome():
    async with aiofiles.open("templates/ques_index.html", mode="r") as f:
        data = await f.read()
    return data


@app.get("/questionnaire/q", response_class=HTMLResponse)
async def getQuestionnaire():
    async with aiofiles.open("templates/q_index.html", mode="r") as f:
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
    anxietyScore = int((sum([ord(x) - ord('a') for x in [question0, question1,
                       question2, question3, question4, question5, question6]])/7)*5)
    stressScore = int((sum([ord(x) - ord('a') for x in [question7, question8,
                      question9, question10, question11, question12, question13]])/7)*5)
    depressionScore = int((sum([ord(x) - ord('a') for x in [question14, question15,
                          question16, question17, question18, question19, question20]])/7)*5)

    anxietyLabel = "Low" if anxietyScore <= 10 / \
        3 else "Medium" if anxietyScore <= 20/3 else "High"
    stressLabel = "Low" if stressScore <= 10 / \
        3 else "Medium" if stressScore <= 20/3 else "High"
    depressionLabel = "Low" if depressionScore <= 10 / \
        3 else "Medium" if depressionScore <= 20/3 else "High"

    async with aiofiles.open("templates/result.html", mode="r") as f:
        data = await f.read()
    return data.replace('<!-- anxiety-score -->', anxietyLabel).replace('<!-- stress-score -->', stressLabel).replace('<!-- depression-score -->', depressionLabel)


@app.get("/questionnaire/selfHelpAnxiety", response_class=HTMLResponse)
async def getanxiety():
    async with aiofiles.open("templates/anxiety.html", mode="r") as f:
        data = await f.read()
    return data


@app.get("/questionnaire/selfHelpDepp", response_class=HTMLResponse)
async def getdepression():
    async with aiofiles.open("templates/depression.html", mode="r") as f:
        data = await f.read()
    return data


@app.get("/questionnaire/selfHelpStress", response_class=HTMLResponse)
async def getstress():
    async with aiofiles.open("templates/stress.html", mode="r") as f:
        data = await f.read()
    return data


@app.get("/vent", response_class=HTMLResponse)
async def getVent():
    async with aiofiles.open("templates/ventoutwall.html", mode="r") as f:
        data = await f.read()
    return data


@app.get("/gethelp", response_class=HTMLResponse)
async def gethelp():
    async with aiofiles.open("templates/counsel_index.html", mode="r") as f:
        data = await f.read()
    return data


@app.get("/about", response_class=HTMLResponse)
async def getabout():
    async with aiofiles.open("templates/about.html", mode="r") as f:
        data = await f.read()
    return data

@app.post("/upload")
def upload_save(image: UploadFile = File(...)):
    save_file(image, path="temp/", save_as="temp")
    return{"text": "File Uploaded Successfully"}


@app.post("/predict")
def emotions():
    img = plt.imread("temp/temp.jpg")
    detector = FER(mtcnn=True)
    key_value = detector.detect_emotions(img)[0]['emotions']
    emo = {}
    sorted_keys = sorted(key_value, key=key_value.get, reverse=True)
    for w in sorted_keys:
        emo[w] = key_value[w]
    emotions = list(emo.keys())[0:3]
    return {"emo": emotions}


def save_file(uploaded_file, path=".", save_as="default"):
    extension = os.path.splitext(uploaded_file.filename)[-1]
    temp_file = os.path.join(path, save_as + extension)
    with open(temp_file, "wb") as buffer:
        shutil.copyfileobj(uploaded_file.file, buffer)
    return temp_file