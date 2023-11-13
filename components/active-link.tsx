'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import cn from '~/utils/cn'

interface ActiveLinkProps extends LinkProps {
	children: React.ReactNode
	className?: string
	activeClassName?: string
}

export default function ActiveLink({
	children,
	className,
	activeClassName,
	...props
}: ActiveLinkProps) {
	const pathname = usePathname()

	return (
		<Link
			{...props}
			className={cn(
				className,
				pathname === props.href && activeClassName,
			)}
		>
			{children}
		</Link>
	)
}
