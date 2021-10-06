import React, { useEffect, useState } from "react"
import { Button } from "../Button"

export default {
	title: "Button",
	component: Button,
}

interface ButtonStoryProps {
	onClick: () => void
}

export const DefaultMediumPrimaryButton = (args: ButtonStoryProps) => {
	const [count] = useState(0)
	useEffect(() => {
		console.log(`You clicked ${count} times. Oh and don't worry about the warning.`)
	}, [count])

	return <Button onClick={args.onClick}>Primary</Button>
}


export const TryItOut = (args: any) => {
	return <Button {...args}>{args.children}</Button>
}
TryItOut.args = { children: "Try It Out" }
TryItOut.argTypes = {
	buttonIcon: { control: { disable: true } },
	onClick: { action: "clicked" },
}
