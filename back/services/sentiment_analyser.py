import torch


async def analyse_sentiment_handler(message, model, tokenizer):

    inputs = tokenizer(message, return_tensors='pt',
                       padding=True, truncation=True)
    input_ids = inputs['input_ids']
    attention_mask = inputs['attention_mask']
    model.eval()
    with torch.no_grad():
        output_ids = model.generate(input_ids=input_ids, attention_mask=attention_mask,
                                    max_length=2, num_beams=5, length_penalty=0.6)
    flat_output_ids = output_ids.flatten().tolist()
    decoded_output = tokenizer.decode(
        flat_output_ids, skip_special_tokens=True)
    return decoded_output