import React, { useEffect, useState } from "react"
import { Button, ButtonProps } from "../Button"
import { Box, DarkMode } from "@chakra-ui/react"
import { MdArrowForwardIos, MdDateRange } from "react-icons/md"

export default {
	title: "Button",
	component: Button,
}

interface ButtonStoryProps {
	onClick: ButtonProps["onClick"]
}

export const DefaultMediumPrimaryButton = (args: ButtonStoryProps) => {
	const [count, setCount] = useState(0)
	useEffect(() => {
		console.log(`You clicked ${count} times. Oh and don't worry about the warning.`)
	}, [count])
	const onClick = () => {
		setCount(count + 1)
	}

	return <Button onClick={args.onClick ?? onClick}>Primary</Button>
}

export const SmallPrimaryButton = () => (
	<Button size="sm" onClick={() => console.log("Click")}>
		Primary
	</Button>
)

export const LargePrimaryButton = () => (
	<Button size="lg" onClick={() => console.log("Click")}>
		Primary
	</Button>
)

export const ExtraLargePrimaryButton = () => (
	<Button size="xl" onClick={() => console.log("Click")}>
		Primary
	</Button>
)

export const ExtraExtraLargePrimaryButton = () => (
	<Button size="xxl" onClick={() => console.log("Click")}>
		Primary
	</Button>
)

export const ExtraExtraExtraLargePrimaryButton = () => (
	<Button size="xxxl" onClick={() => console.log("Click")}>
		Primary
	</Button>
)

export const FullPrimaryButton = () => (
	<Button size="full" onClick={() => console.log("Click")}>
		Primary
	</Button>
)

export const LeadingIconPrimaryButton = () => (
	<Button buttonIcon={{ mdIcon: MdDateRange, alignment: "left" }} onClick={() => console.log("Click")}>
		Primary
	</Button>
)

export const TrailingIconPrimaryButton = () => (
	<Button buttonIcon={{ mdIcon: MdArrowForwardIos, alignment: "right" }} onClick={() => console.log("Click")}>
		Primary
	</Button>
)

export const DarkPrimaryButton = (args: ButtonStoryProps) => (
	<DarkMode>
		<Box bg="primary" w="100%" p={4}>
			<Button onClick={args.onClick}>Primary</Button>
		</Box>
	</DarkMode>
)

export const DisabledPrimaryButton = () => <Button disabled>Primary</Button>

export const PrimaryButtonWithIcon = () => (
	<Button size="lg" buttonIcon={{ mdIcon: MdDateRange, alignment: "right" }}>
		Trailing Icon
	</Button>
)

export const DarkDisabledPrimaryButton = () => (
	<DarkMode>
		<Box bg="primary" w="100%" p={4}>
			<Button disabled>Primary</Button>
		</Box>
	</DarkMode>
)

export const DefaultSecondaryButton = (args: ButtonStoryProps) => (
	<Button variant="secondary" onClick={args.onClick}>
		Secondary
	</Button>
)

export const DisabledSecondaryButton = () => (
	<Button variant="secondary" disabled>
		Secondary
	</Button>
)

export const DarkSecondaryButton = () => (
	<DarkMode>
		<Box bg="primary" w="100%" p={4}>
			<Button variant="secondary" onClick={() => console.log("Click")}>
				Secondary
			</Button>
		</Box>
	</DarkMode>
)

export const DarkDisabledSecondaryButton = () => (
	<DarkMode>
		<Box bg="primary" w="100%" p={4}>
			<Button variant="secondary" disabled onClick={() => console.log("Click")}>
				Secondary
			</Button>
		</Box>
	</DarkMode>
)

export const TryItOut = (args: any) => {
	return <Button {...args}>{args.children}</Button>
}
TryItOut.args = { children: "Try It Out" }
TryItOut.argTypes = {
	buttonIcon: { control: { disable: true } },
	onClick: { action: "clicked" },
}
