# ![image](https://drive.google.com/uc?export=view&id=138nk6b--V1jwgADhBTHdJzJWGhOB5PdG)

# WebApp
<table>
<tr>
<td>
A webapp using FastAPI to help diagnosing the mental health of a person. It helps quantifying the mental health among three parameters: stress, anxiety and depression, with the help of a specially desgined questionnaire conainig questions related to the defined paramters. Emotion detection is implemented to get an overview of the person's emotions in real time.  <br><br> A user will first have to register on the website after which they will be eligible for taking the questionnaire and emtoional detection functionalities. A vent out wall is implemented on the website on which any person can share there thoughts and experiences with the community, anonymously.  On the basis of the scores taken from the questionnaire the mental state of the person will be approximated. The results do not guarantee anything and it is easy to generate fake report, therefore we are relying on the user to answer the questionnaire punctually.<br><br>
A user will be classified as one of the following categories:
<ul>
<li>Self help, in this case, it will be known that user is not going through serious mental stress therefore, the user will be suggested few blogs and videos to cheer up.</li>
<li>Needs counselling, in this case, it is felt that the user is holding in a lot of thouhgts which are leading to mental stree and anxiety, the user will therefore be brought in contact with our counsellors, who can contact the user through texts or if user agrees to, through calls.</li>
<li>Therapy, in this case, it is found that the user is going through serious mental problems and it is suggested that he/she should seek professional help. The user will be brought in contact with professionals through the counsellors.</li>
</ul> 
</td>
</tr>
</table>

# Site
### Landing page 
It will contain an overview of all the funcitonalities.
![image](https://drive.google.com/uc?export=view&id=1dtMganqG0e2JRMB4WUP8Unj0PSjPASyC)
### Login page
![image](https://drive.google.com/uc?export=view&id=1MSRqvYl5VXjgXwJsc6m74yUzWVlzdf2o)
### Vent out
This will show our community interaction.
![image](https://drive.google.com/uc?export=view&id=1tKfHlk3FA5d1Cjw7YJ8hkvMAMZqc1Uan)
### Mobile view
The webapp is compatible with devices of all sizes.<br>
![image](https://drive.google.com/uc?export=view&id=1a97T6dKHidCeHRtNDRte8DwIF6nqAYH_)
# Built With
- [FastAPI](https://fastapi.tiangolo.com/) - _FastAPI_ is a modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints.
- [jQuery - Ajax](http://www.w3schools.com/jquery/jquery_ref_ajax.asp) - _jQuery_ simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development.
- [Tensorflow](https://www.tensorflow.org/) - _TensorFlow_ is an end-to-end open source platform for machine learning. It has a comprehensive, flexible ecosystem of tools, libraries and community resources that lets researchers push the state-of-the-art in ML and developers easily build and deploy ML powered applications.
- [OpenCV](https://opencv.org/) - _OpenCV_ provides a real-time optimized Computer Vision library, tools, and hardware.
- [Uvicorn](https://www.uvicorn.org/) - _Uvicorn_ is a lightning-fast ASGI server implementation, using [uvloop](https://github.com/MagicStack/uvloop) and [httptools](https://github.com/MagicStack/httptools).
- [Bootstrap](http://getbootstrap.com/) - Extensive list of components and  Bundled Javascript plugins.
# Installation Guide:
1. python3 -m venv venv . Then activate your virtual environment(OS specific). (If you don't have venv, install it) [optional]
2. python3 -m pip install -r requirements.txt
3. uvicorn main:app --reload
