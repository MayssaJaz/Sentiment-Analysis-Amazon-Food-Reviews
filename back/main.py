from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from transformers import T5Tokenizer, T5ForConditionalGeneration
from services.sentiment_analyser import analyse_sentiment_handler
import os


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

load_dotenv()
model = T5ForConditionalGeneration.from_pretrained(
    os.getenv("EXTRACTED_MODEL_PATH"))
tokenizer = T5Tokenizer.from_pretrained(os.getenv("MODEL_NAME"))


class MessageInput(BaseModel):
    message: str


@app.post("/review")
async def analyse_sentiment(message_input: MessageInput):
    sentiment = await analyse_sentiment_handler(message_input.message, model, tokenizer)
    return {"sentiment": sentiment}