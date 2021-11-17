import React from "react"
import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import {
	DarkPrimaryButton,
	DefaultMediumPrimaryButton,
	DefaultSecondaryButton,
	DisabledPrimaryButton,
	DisabledSecondaryButton,
	PrimaryButtonWithIcon,
} from "../__stories__/Button.stories"

test("Button primary display works", () => {
	const onClickMock = jest.fn()

	render(<DefaultMediumPrimaryButton onClick={onClickMock} />)

	const button = screen.getByRole("button", { name: "Primary" })

	userEvent.click(button)
	expect(onClickMock).toHaveBeenCalledTimes(1)
})

test("Button primary dark display works", () => {
	const onClickMock = jest.fn()

	render(<DarkPrimaryButton onClick={onClickMock} />)

	const button = screen.getByRole("button", { name: "Primary" })

	userEvent.click(button)
	expect(onClickMock).toHaveBeenCalledTimes(1)
})

test("Button secondary display works", () => {
	const onClickMock = jest.fn()

	render(<DefaultSecondaryButton onClick={onClickMock} />)

	const button = screen.getByRole("button", { name: "Secondary" })

	userEvent.click(button)
	expect(onClickMock).toHaveBeenCalledTimes(1)
})

test("Disabled primary button cannot be clicked", () => {
	render(<DisabledPrimaryButton />)

	const button = screen.getByRole("button", { name: "Primary" })

	expect(button).toBeDisabled()
})

test("Disabled secondary button cannot be clicked", () => {
	render(<DisabledSecondaryButton />)

	const button = screen.getByRole("button", { name: "Secondary" })

	expect(button).toBeDisabled()
})

test("Button trailing icon display works", () => {
	render(<PrimaryButtonWithIcon />)

	const button = screen.getByRole("button", { name: "Trailing Icon" })

	// This is brittle
	expect(button.lastChild?.lastChild?.nodeName).toBe("svg")
})
