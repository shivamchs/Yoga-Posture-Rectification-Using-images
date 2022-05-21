# Yoga-Posture-Detection-And-Rectification

Yoga has become popular throughout the world. Most people, while practicing yoga themselves, face difficulties in finding the incorrect parts of their yoga poses. Performing yoga asanas in an improper way may cause acute injuries and unnecessary pain.\
Yoga-Posture-Rectification is an AI yoga Assistant which detects the pose performed by a person in real-timedraws skeleton and provides the feedback to the user by comparing his pose with the ideal pose.\
We have used tensorflow yoga image dataset consisting of approx. 200 images of each yoga pose for training the model. Movenet is being used to detect the human pose in images and extract the key-points while a neural network model is used to classify the pose. We have used React js for frontend development.

# Program Description

The application consists of two programs, Modules and Practice Session. In the practice session user has to select a particular pose he wish to perform and application will generate the feedback accordingly while in the modules section user has to perform a sequence of poses, when he perform a pose with greater accuracy then automatically it will move to the next pose in module.

## Practice Session

-	Once user clicks on the Practice button a drop-down menu will appear in front of user.
-	User has to select a pose from the lists of poses available in the drop-down   After selecting the pose user can see himself performing pose on the canvas while the image of ideal pose will be right to the canvas.
-	After performing a pose user can go back and select any other pose to practice.
-	Accursed score and feedback can be seen on the top of the canvas.

## Modules

-	Once the user clicks on the module button a window will appear in front of user where he has to click on "start pose" button in order to check his performance.
-	User can see himself performing the pose on the canvas of window while the ideal pose image will be right to the canvas.
-	When user performs a particular pose with a satisfactory accuracy for a fixed time then it will automatically switch to the next pose.
-	Accuracy score and feedback can be seen on the top of the canvas.
