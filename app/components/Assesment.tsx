// QuestionGenerator.js


import styles from "./Assesment.module.css";

import { useState } from 'react';

const QuestionGenerator = ({ language }) => {
  const [question, setQuestion] = useState('');

  const generateQuestion = async () => {
    try {
      const response = await fetch('YOUR_OPENAI_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_OPENAI_API_KEY',
        },
        body: JSON.stringify({
          model: 'YOUR_MODEL_NAME',
          prompt: `Generate a question related to ${language}.`,
          max_tokens: 100,
        }),
      });

      const data = await response.json();
      setQuestion(data.choices[0].text);
    } catch (error) {
      console.error('Error fetching question:', error);
    }
  };

  return (
    <div>
      <button onClick={generateQuestion}>Generate Question</button>
      <p>{question}</p>
    </div>
  );
};

export default QuestionGenerator;
