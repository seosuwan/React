import React from 'react';

const Color = () => (
    <div>
         <form>
        <fieldset>
            <legend>과 티셔츠 설문</legend>
            <p>올해 과 티(T)를 만들려고 합니다. 원하는 색상을 추천해 주세요.</p>
                          
            <label>선호색상 <input type="color" value="#00ff00"/></label>
        </fieldset>
    </form>
        </div>
)

export default Color