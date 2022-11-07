import styles from '../../styles/Table.module.css';
import TableSVG from './TableSVG';

const Table:React.FC = () => {
  return (
		<div className={styles.container}>
    <table>
			<tbody>
				<tr>
					<th><TableSVG /></th>
					<th><TableSVG /></th>
					<th><TableSVG /></th>
					<th><TableSVG /></th>
					<th><TableSVG /></th>
					<th><TableSVG /></th>
					<th><TableSVG /></th>
					<th><TableSVG /></th>
					<th><TableSVG /></th>
					<th><TableSVG /></th>
				</tr>
				<tr>
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
				<tr>
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
  )
}

export default Table