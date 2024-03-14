import css from './Feedback.module.css';

export default function Feedback({ feedbacks, total }) {
  const stats = Math.round(
    ((feedbacks.good + feedbacks.neutral) / total) * 100
  );

  return (
    <ul>
      <li>Good: {feedbacks.good}</li>
      <li>Neutral: {feedbacks.neutral}</li>
      <li>Bad: {feedbacks.bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {stats}%</li>
    </ul>
  );
}
