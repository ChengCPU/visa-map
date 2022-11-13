import styles from '../styles/Table.module.css';
import TablePassport from '../components/Table/TablePassport';
interface Props {
	selectArray:null | string[];
}

const Table:React.FC<Props> = ({ selectArray }) => {

  return (
	<>
	<br />
	<br />
	<br />
	<div className={styles.container}>
    <table cellSpacing="0" cellPadding="0">
			<tbody>
				<tr>
					<th><TablePassport selectArray={selectArray} num={0}/></th>
					<th><TablePassport selectArray={selectArray} num={1}/></th>
					<th><TablePassport selectArray={selectArray} num={2}/></th>
					<th><TablePassport selectArray={selectArray} num={3}/></th>
					<th><TablePassport selectArray={selectArray} num={4}/></th>
					<th><TablePassport selectArray={selectArray} num={5}/></th>
					<th><TablePassport selectArray={selectArray} num={6}/></th>
					<th><TablePassport selectArray={selectArray} num={7}/></th>
					<th><TablePassport selectArray={selectArray} num={8}/></th>
					<th><TablePassport selectArray={selectArray} num={9}/></th>
				</tr>
				<tr className={styles.subRow}>
					<td className={styles.text}>text 1</td>
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td className={styles.text}>text 1</td>
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td className={styles.text}>text 1</td>
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td className={styles.text}>text 1</td>
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td className={styles.text}>text 1</td>
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td className={styles.text}>text 1</td>
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td className={styles.text}>text 1</td>
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td className={styles.text}>text 1</td>
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td className={styles.text}>text 1</td>
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td className={styles.text}>text 1</td>
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td className={styles.text}>text 1</td>
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td className={styles.text}>text 1</td>
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td className={styles.text}>text 1</td>
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td className={styles.text}>text 1</td>
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td className={styles.text}>text 1</td>
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td className={styles.text}>text 1</td>
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td className={styles.text}>text 1</td>
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
			</tbody>
	</table>
	</div>
    </>
  )
}

export default Table