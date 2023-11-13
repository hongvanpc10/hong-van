import { ButtonHTMLAttributes } from 'react'
import cn from '~/utils/cn'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ className, children, ...props }: ButtonProps) {
	return (
		<button
			className={cn(
				className,
				'py-1.5 px-3 border border-primary-600 font-normal',
			)}
			{...props}
		>
			{children}
		</button>
	)
}
