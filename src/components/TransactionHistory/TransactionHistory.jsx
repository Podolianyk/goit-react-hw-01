import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.tableTitle}>Type</th>
          <th className={css.tableTitle}>Amount</th>
          <th className={css.tableTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.tableList} key={id}>
            <td className={css.tableBody}>{type}</td>
            <td className={css.tableBody}>{amount}</td>
            <td className={css.tableBody}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
