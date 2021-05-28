# ![image](https://drive.google.com/uc?export=view&id=<16HpbjoiCcyzxfcot3RiLg6qEQ1apUfcw>)

# WebApp
<table>
<tr>
<td>
A webapp using FastAPI to help diagnosing the mental health of a person. It helps quantifying the mental health among three parameters: stress, anxiety and depression, with the help of a specially desgined questionnaire conainig questions related to the defined paramters. Emotion detection is implemented to get an overview of the person's emotions in real time. A user will first have to register on the website after which they will be eligible for taking the questionnaire and emtional detection functionalities. A vent out wall is implemented on the website on which any person can share there thoughts with the community anonymously. 
</td>
</tr>
</table>

# Installation Guide:
1. python3 -m venv venv . Then activate your virtual environment(OS specific). (If you don't have venv, install it) [optional]
2. python3 -m pip install -r requirements.txt
3. uvicorn main:app --reload
