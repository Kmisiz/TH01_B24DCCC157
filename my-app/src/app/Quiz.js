import { useState } from "react";

const questions = [
  {
    text: "ReactJS dùng để làm gì?",
    options: ["Mobile App", "Web UI", "Hệ điều hành", "Cơ sở dữ liệu"],
    correct: "Web UI",
  },
  {
    text: "Props trong React là gì?",
    options: ["Trạng thái", "Thuộc tính truyền vào", "API", "CSS"],
    correct: "Thuộc tính truyền vào",
  },
  {
    text: "State dùng để ?",
    options: [
      "Quản lí dữ liệu thay đổi",
      "Định nghĩa component",
      "Kết nối backend",
      "trang trí giao diện",
    ],
    correct: "Quản lí dữ liệu thay đổi",
  },
];

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleClick = (option) => {
    if (option === questions[current].correct) {
      setScore(score + 1);
    }
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>
      <h2>Quiz game</h2>
      {!showResult ? (
        <>
          <p>{questions[current].text}</p>
          <ul>
            {questions[current].options.map((option, idx) => (
              <li key={idx}>
                <button onClick={() => handleClick(option)}>{option}</button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Bạn được {score}/{questions.length} điểm!</p>
      )}
    </div>
  );
}

export default Quiz;