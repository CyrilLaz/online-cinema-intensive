import classNames from 'classnames'
import { FC } from 'react'

import { IButton } from './form.interface'
import styles from './form.module.scss'

const MyButton: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button className={classNames(styles.button, className)} {...rest}>
			{children}
		</button>
	)
}
export default MyButton
