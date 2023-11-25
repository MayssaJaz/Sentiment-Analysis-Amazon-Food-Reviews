# Sentiment Analysis for Amazon Food Reviews

This project focuses on sentiment analysis for Amazon Food comments, categorizing them into positive, neutral, or negative sentiments. Two distinct models have been employed for this purpose:

## 1. VADER Bag-Of-Words Approach

The first approach utilizes the [VADER](https://github.com/cjhutto/vaderSentiment) sentiment analysis tool in conjunction with a Bag-Of-Words methodology. This approach provides a baseline for sentiment classification based on lexicon and rule-based analysis.

## 2. T5 Transformers Model Approach

The second approach involves the use of the [Text-to-Text (T5)](https://huggingface.co/transformers/model_doc/t5.html) transformer model. We fine-tuned it on sentiment analysis task on Amazon Food comments. This approach leverages the power of transformer-based architectures for contextual understanding and captures more complex relationships within the data compared to the Bag-Of-Words.
