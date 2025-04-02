import s from "./Feedback.module.css";

export default function Feedback({ votingData, totalFeedback, positiveFeedback }) {
    return (
        <div>
            <ul className={s.ul}>
                <li className={s.li}>Good: <span className={s.value}>{votingData.good}</span> </li>
                <li className={s.li}>Neutral: <span className={s.value}>{votingData.neutral}</span> </li>
                <li className={s.li}>Bad: <span className={s.value}>{votingData.bad}</span> </li>
                <li className={s.li}>Total: <span className={s.value}>{totalFeedback}</span></li>
                <li className={s.li}>Positive: <span className={s.value}>{positiveFeedback}%</span></li>
            </ul>
        </div>
    )
}