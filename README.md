# Sentiment Analysis for Amazon Food Reviews

This project focuses on sentiment analysis for Amazon Food comments, categorizing them into positive, neutral, or negative sentiments. Two distinct models have been employed for this purpose:

## Models:
### 1. VADER Bag-Of-Words Approach

The first approach utilizes the [VADER](https://github.com/cjhutto/vaderSentiment) sentiment analysis tool in conjunction with a Bag-Of-Words methodology. This approach provides a baseline for sentiment classification based on lexicon and rule-based analysis.

### 2. T5 Transformers Model Approach

The second approach involves the use of the [Text-to-Text (T5)](https://huggingface.co/transformers/model_doc/t5.html) transformer model. We fine-tuned it on sentiment analysis task on Amazon Food comments. This approach leverages the power of transformer-based architectures for contextual understanding and captures more complex relationships within the data compared to the Bag-Of-Words.
<img src="https://github.com/MayssaJaz/Sentiment-Analysis-Amazon-Food-Reviews/blob/main/images/T5.png">

## Microservice  integration:
This project integrates the fine-tuned T5 (Text-To-Text Transfer Transformer) model for sentiment analysis. The purpose is to analyze user-provided text, typically reviews, and classify them as positive, negative or neutral. The system is implemented using FastAPI for the backend and ReactJS for the frontend to provide a user-friendly interface for predicting sentiments.

### 1. Setup:

1. **Environment Configuration:**

   Create an `.env` file inside the `back` directory and specify the following variables:

   ```env
   EXTRACTED_MODEL_PATH=/path/to/extracted/model
   MODEL_NAME="t5-base"
   ```
   Replace /path/to/extracted/model with the actual path where the fine-tuned T5 model is   stored.
   
2. **Launch application:**

    In the project root directory, where the docker-compose.yml file is located, run the following command:
   ```bash
     docker-compose up --build
   ```
     This command will build and start the Docker containers for both the FastAPI backend and ReactJS frontend.

3. **Access the Application:**

   Open your web browser and go to http://localhost:3000 to access the ReactJS frontend.

### 2. Results:

#### 1. Positive Sentiment:
![Positive Result](https://github.com/MayssaJaz/Sentiment-Analysis-Amazon-Food-Reviews/blob/main/images/positive_result.jpeg)

#### 2. Negative Sentiment:
![Negative Result](https://github.com/MayssaJaz/Sentiment-Analysis-Amazon-Food-Reviews/blob/main/images/negative_result.jpeg)

#### 3. Neutral Sentiment:
![Neutral Result](https://github.com/MayssaJaz/Sentiment-Analysis-Amazon-Food-Reviews/blob/main/images/neutral_result.jpeg)


