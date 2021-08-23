import styles from './styles.module.scss';
import { CheckboxProps } from './types';

export default function Checkbox({
	id,
	label,
	value,
	onChange
}: CheckboxProps): JSX.Element {
	return (
			<div className={styles.checkboxContainer}>
				<input
					id={id}
					type="checkbox"
					className={styles.checkboxInput}
					value={value === true || value === false ? String(value) : undefined}
					onChange={onChange}
				/>
				<label
					htmlFor={id}
					className={styles.checkbox}
				>
					<span>
						<svg width="12px" height="10px">
							<svg className={styles.checkboxSymbol}>
								<polyline
									points="1.5 6 4.5 9 10.5 1"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</svg>
					</span>
					<span>
						{label}
					</span>
				</label>
			</div>
	);
}
