export default function Answer({question, reveal, setReveal}){
  const answer = question.answer.replace("<i>", "").replace("</i>", "");
  return (
    <div className='Answer'>
    {reveal ? <h2>{answer}</h2>: <></>}
      <h3><button onClick={() => setReveal(true)}>Reveal Answer</button></h3>
    </div>
  );
}