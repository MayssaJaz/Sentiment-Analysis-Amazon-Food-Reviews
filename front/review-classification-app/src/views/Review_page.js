import React, { useState } from 'react';
import { Input, Button, Card, Spin } from 'antd';
import { SmileOutlined, MehOutlined, FrownOutlined } from '@ant-design/icons';
import './Review_page.css';
import fetch_sentiment from '../apis/sentiment_api'

const ReviewPage = () => {
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [negative, setNegative] = useState('negative-inactive')
    const [positive, setPositive] = useState('positive-inactive')
    const [neutral, setNeutral] = useState('neutral-inactive')


    const handleSubmit = async (event) => {
        event.preventDefault();
        const sentiment = await fetch_sentiment(inputValue, setLoading);
        if (sentiment == 'positive') {
            setPositive('positive');
            setNegative('negative-inactive');
            setNeutral('neutral-inactive');
        }
        else if (sentiment == 'neutral') {
            setNeutral('neutral');
            setPositive('positive-inactive');
            setNegative('negative-inactive');
        }
        else {
            setNegative('negative');
            setPositive('positive-inactive');
            setNeutral('neutral-inactive');
        }


    };

    return (
        <div className="my-form-container">
            <h1 className="my-form-title">Sentiment Analyser</h1>
            <form onSubmit={handleSubmit} className="my-form">
                <label className="my-form-label">
                    <div className='text-form-input'> Enter Text:</div>
                    <Input
                        className="my-form-input"
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type something..."
                    />
                </label>
                <Button className="my-form-button" type="primary" htmlType="submit">
                    Submit
                </Button>
            </form>
            <Spin spinning={loading}>
                <div className="button-row">
                    <Card className={positive}
                    >
                        <p><SmileOutlined /> Positive</p>
                    </Card>
                    <Card className={neutral}
                    >
                        <p><MehOutlined /> Neutral</p>
                    </Card>
                    <Card className={negative}
                    >
                        <p><FrownOutlined /> Negative</p>
                    </Card>
                </div>
            </Spin>
        </div>
    );
};

export default ReviewPage;
