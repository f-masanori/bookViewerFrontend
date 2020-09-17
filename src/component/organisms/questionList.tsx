import React from 'react';

/* このquestionListを使って質問を表示 */
export const QuestionList: React.FC<any> = ({ questionList }): JSX.Element => {
  console.log(questionList);

  return (
    <div style={{ backgroundColor: '#FF8A80', padding: '20px' }}>
      itemList
      <div>hoge</div>
    </div>
  );
};
