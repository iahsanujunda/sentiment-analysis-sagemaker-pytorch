# SageMaker Deployment Project  
  
The notebook and Python files provided here, once completed, result in a simple web app which interacts with a deployed recurrent neural network performing sentiment analysis on movie reviews taken from IMDB dataset. The RNN model is  
deployed on AWS Sagemaker and can be accessed by publicly accessible API and a simple web page which interacts with the deployed endpoint.  
  
Even though the web app is going to be accessible from public, we are not going to open public access to the sagemaker endpoint. In order to access sagemaker deployed endpoints, our web app will make a request to AWS lambda function that in turn will invoke the sagemaker endpoint and return the prediction result.

![sentiment Analysis Architecture](https://github.com/udacity/sagemaker-deployment/raw/336bb8523266e204f88cbc4041e975b0c845a798/Tutorials/Web%20App%20Diagram.svg)

The diagram above gives an overview of how the various services will work together. On the far right is the model which we trained above and which will be deployed using SageMaker. On the far left is our web app that collects a user's movie review, sends it off and expects a positive or negative sentiment in return.

In the middle is where some of the magic happens. We will construct a Lambda function, which you can think of as a straightforward Python function that can be executed whenever a specified event occurs. This Python function will do the data processing we need to perform on a user submitted review. In addition, we will give this function permission to send and recieve data from a SageMaker endpoint.

Lastly, the method we will use to execute the Lambda function is a new endpoint that we will create using API Gateway. This endpoint will be a url that listens for data to be sent to it. Once it gets some data it will pass that data on to the Lambda function and then return whatever the Lambda function returns. Essentially it will act as an interface that lets our web app communicate with the Lambda function.
The notebook and Python files provided here, once completed, result in a simple web app which interacts with a deployed recurrent neural network performing sentiment analysis on movie reviews.

## Setup Instructions

The notebooks provided in this repository are intended to be executed using Amazon's SageMaker platform. The following is a brief set of instructions on setting up a managed notebook instance using SageMaker, from which the notebooks can be completed and run.

### Log in to the AWS console and create a notebook instance

Log in to the AWS console and go to the SageMaker dashboard. Click on 'Create notebook instance'. The notebook name can be anything and using ml.t2.medium is a good idea as it is covered under the free tier. For the role, creating a new role works fine. Using the default options is also okay. Important to note that you need the notebook instance to have access to S3 resources, which it does by default. In particular, any S3 bucket or objectt with sagemaker in the name is available to the notebook.

### Use git to clone the repository into the notebook instance

Once the instance has been started and is accessible, click on 'open' to get the Jupyter notebook main page. We will begin by cloning the SageMaker Deployment github repository into the notebook instance. Note that we want to make sure to clone this into the appropriate directory so that the data will be preserved between sessions.

Click on the 'new' dropdown menu and select 'terminal'. By default, the working directory of the terminal instance is the home directory, however, the Jupyter notebook hub's root directory is under 'SageMaker'. Enter the appropriate directory and clone the repository as follows.

```bash
cd SageMaker
git clone https://github.com/i-ahsanujunda/sentiment-analysis-sagemaker-pytorch
exit
```

After you have finished, close the terminal window.
