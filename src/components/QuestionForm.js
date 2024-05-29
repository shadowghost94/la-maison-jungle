import { useState } from "react";

import React from 'react';

const QuestionForm = () => {
    const [inputValue, setInputValue] = useState("Posez votre question")
    return (
        <div>
            <textarea 
                value={inputValue}
                name="input_textarea" 
                id="text_area" 
                onChange={ (e)=> {setInputValue(e.target.value); }} 
            />
            {console.log(inputValue)}
        </div>
    );
};

export default QuestionForm;