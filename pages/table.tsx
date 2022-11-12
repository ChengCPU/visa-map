import styles from '../styles/Table.module.css';
import Passport from '../components/Selector/Passport';
import unitedStates from '/public/passports/unitedStates.webp';
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
    <table>
			<tbody>
				<tr className={styles.mainRow}>
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
					<td>Test 1</td>
					<td>Test 2</td>
					<td>Test 3</td>
					<td>Test 4</td>
					<td>Test 5</td>
					<td>Test 6</td>
					<td>Test 7</td>
					<td>Test 8</td>
					<td>Test 9</td>
					<td>Test 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td>Test 1</td>
					<td>Test 2</td>
					<td>Test 3</td>
					<td>Test 4</td>
					<td>Test 5</td>
					<td>Test 6</td>
					<td>Test 7</td>
					<td>Test 8</td>
					<td>Test 9</td>
					<td>Test 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td>Test 1</td>
					<td>Test 2</td>
					<td>Test 3</td>
					<td>Test 4</td>
					<td>Test 5</td>
					<td>Test 6</td>
					<td>Test 7</td>
					<td>Test 8</td>
					<td>Test 9</td>
					<td>Test 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td>Test 1</td>
					<td>Test 2</td>
					<td>Test 3</td>
					<td>Test 4</td>
					<td>Test 5</td>
					<td>Test 6</td>
					<td>Test 7</td>
					<td>Test 8</td>
					<td>Test 9</td>
					<td>Test 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td>Test 1</td>
					<td>Test 2</td>
					<td>Test 3</td>
					<td>Test 4</td>
					<td>Test 5</td>
					<td>Test 6</td>
					<td>Test 7</td>
					<td>Test 8</td>
					<td>Test 9</td>
					<td>Test 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td>Test 1</td>
					<td>Test 2</td>
					<td>Test 3</td>
					<td>Test 4</td>
					<td>Test 5</td>
					<td>Test 6</td>
					<td>Test 7</td>
					<td>Test 8</td>
					<td>Test 9</td>
					<td>Test 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td>Test 1</td>
					<td>Test 2</td>
					<td>Test 3</td>
					<td>Test 4</td>
					<td>Test 5</td>
					<td>Test 6</td>
					<td>Test 7</td>
					<td>Test 8</td>
					<td>Test 9</td>
					<td>Test 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td>Test 1</td>
					<td>Test 2</td>
					<td>Test 3</td>
					<td>Test 4</td>
					<td>Test 5</td>
					<td>Test 6</td>
					<td>Test 7</td>
					<td>Test 8</td>
					<td>Test 9</td>
					<td>Test 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td>Test 1</td>
					<td>Test 2</td>
					<td>Test 3</td>
					<td>Test 4</td>
					<td>Test 5</td>
					<td>Test 6</td>
					<td>Test 7</td>
					<td>Test 8</td>
					<td>Test 9</td>
					<td>Test 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td>Test 1</td>
					<td>Test 2</td>
					<td>Test 3</td>
					<td>Test 4</td>
					<td>Test 5</td>
					<td>Test 6</td>
					<td>Test 7</td>
					<td>Test 8</td>
					<td>Test 9</td>
					<td>Test 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td>Test 1</td>
					<td>Test 2</td>
					<td>Test 3</td>
					<td>Test 4</td>
					<td>Test 5</td>
					<td>Test 6</td>
					<td>Test 7</td>
					<td>Test 8</td>
					<td>Test 9</td>
					<td>Test 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td>Test 1</td>
					<td>Test 2</td>
					<td>Test 3</td>
					<td>Test 4</td>
					<td>Test 5</td>
					<td>Test 6</td>
					<td>Test 7</td>
					<td>Test 8</td>
					<td>Test 9</td>
					<td>Test 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td>Test 1</td>
					<td>Test 2</td>
					<td>Test 3</td>
					<td>Test 4</td>
					<td>Test 5</td>
					<td>Test 6</td>
					<td>Test 7</td>
					<td>Test 8</td>
					<td>Test 9</td>
					<td>Test 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td>Test 1</td>
					<td>Test 2</td>
					<td>Test 3</td>
					<td>Test 4</td>
					<td>Test 5</td>
					<td>Test 6</td>
					<td>Test 7</td>
					<td>Test 8</td>
					<td>Test 9</td>
					<td>Test 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td>Test 1</td>
					<td>Test 2</td>
					<td>Test 3</td>
					<td>Test 4</td>
					<td>Test 5</td>
					<td>Test 6</td>
					<td>Test 7</td>
					<td>Test 8</td>
					<td>Test 9</td>
					<td>Test 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td>Test 1</td>
					<td>Test 2</td>
					<td>Test 3</td>
					<td>Test 4</td>
					<td>Test 5</td>
					<td>Test 6</td>
					<td>Test 7</td>
					<td>Test 8</td>
					<td>Test 9</td>
					<td>Test 10</td>
				</tr>
				<tr className={styles.subRow}>
					<td>Test 1</td>
					<td>Test 2</td>
					<td>Test 3</td>
					<td>Test 4</td>
					<td>Test 5</td>
					<td>Test 6</td>
					<td>Test 7</td>
					<td>Test 8</td>
					<td>Test 9</td>
					<td>Test 10</td>
				</tr>
			</tbody>
	</table>
	</div>
    </>
  )
}

export default Table