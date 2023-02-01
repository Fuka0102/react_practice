import React from "react";

const onClickButton = () => alert();
const contentStyle = {
  color: "blue",
  fontSize: "24px",
};
const App = () => {
  return (
    <>
      <h1 style={contentStyle}>テスト</h1>
      <p>お元気ですか？</p>
      <button type="button" onClick={onClickButton}>
        ボタン
      </button>
    </>
  );
};

export default App;
