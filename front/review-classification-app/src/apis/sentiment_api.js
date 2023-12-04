const fetch_sentiment = async (text, setLoading) => {
    try {
        setLoading(true);
        const response = await fetch('http://localhost:8000/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: text
            }),
        });
        const result = await response.json();
        return (result.sentiment);
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
};

export default fetch_sentiment;