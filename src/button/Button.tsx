import { Button as ChakraButton, Box } from "@chakra-ui/react"
import * as React from "react"
import { InputIcon } from "../utils/Icon"

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "full"

export type ButtonVariant = "primary" | "secondary"

const rightIconSupportingButtons: ButtonSize[] = ["md", "lg", "xl", "xxl"]

export type ButtonProps<T = HTMLButtonElement> = {
	variant?: ButtonVariant
	size?: ButtonSize
	children: React.ReactNode
	buttonIcon?: InputIcon
} & Omit<React.ButtonHTMLAttributes<T>, "css"> &
	React.RefAttributes<T>

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(p, ref) {
	const { size, variant, buttonIcon, disabled, children, ...button } = p
	const isLeftIcon = buttonIcon?.alignment === "left"
	const isRightIcon = buttonIcon?.alignment === "right"
	const supportsRightIcon = rightIconSupportingButtons.includes(size ?? "md")

	return (
		<ChakraButton
			{...button}
			ref={ref}
			size={size ?? "md"}
			variant={variant ?? "primary"}
			pl={isLeftIcon ? 12 : 20}
			pr={isRightIcon ? 12 : 20}
			rightIcon={supportsRightIcon && buttonIcon?.alignment === "right" ? icon(buttonIcon) : undefined}
			leftIcon={buttonIcon?.alignment === "left" ? icon(buttonIcon) : undefined}
			isDisabled={disabled}>
			<Box flex="1 1 0" lineHeight="1.2">
				{children}
			</Box>
		</ChakraButton>
	)
})

const icon = (i: InputIcon) => <Box as={i.mdIcon} boxSize="iconMd" color={i.iconColor} />
