export default function Board({getQuestion, question}){
  return (
    <div className="Board">
      <button onClick={getQuestion}>Get Question</button>
      <h2>Category: <span>{question.category.title}</span></h2>
      <h3>Points: <span>{question.value}</span></h3>
      <h3>Question: <span>{question.question}</span></h3>
    </div>
  );
}