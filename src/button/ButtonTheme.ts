import defaultTheme from "@chakra-ui/theme"

export const Button = {
	baseStyle: {
		fontSize: "17px",
		fontWeight: "700",
		lineHeight: "1.2",
		cursor: "pointer",
		textAlign: "center",
		borderRadius: 0,
		py: 12,
		transition: "none",
		outlineOffset: 0,
	},
	sizes: {
		sm: { w: "6.25rem", h: "3rem" },
		md: { w: "8.75rem", h: "3rem" },
		lg: { w: "11.25rem", h: "3rem" },
		xl: { w: "15rem", h: "3rem" },
		xxl: { w: "17.25rem", h: "3rem" },
		xxxl: { w: "22.5rem", h: "3rem" },
		full: { w: "100%", h: "3rem" },
	},
	variants: {
		// @ts-ignore
		primary: ({ colorMode }) => ({
			bg: colorMode === "dark" ? "white" : "clickable",
			color: colorMode === "dark" ? "clickable" : "white",
			border: "none",
			_hover: {
				bg: colorMode === "dark" ? "white" : "secondary",
				outlineWidth: "2px",
				outlineStyle: "solid",
				outlineColor: "accent",
			},
			_focus: {
				bg: colorMode === "dark" ? "white" : "secondary",
				outlineWidth: "2px",
				outlineStyle: "solid",
				outlineColor: "accent",
			},
			_active: {
				bg: "primary",
				outlineColor: colorMode === "dark" ? "#95B5E4" : "secondary",
			},
			_disabled: {
				bg: "disabledBackground",
				color: "disabledText",
				cursor: "default",
				outline: "none",
			},
		}),
		// @ts-ignore
		secondary: ({ colorMode }) => ({
			bg: "transparent",
			color: colorMode === "dark" ? "white" : "clickable",
			border: "none",
			outline: colorMode === "dark" ? "2px solid white" : "2px solid #B2B2B2",
			_hover: {
				color: colorMode === "dark" ? "white" : "secondary",
				outlineColor: "accent",
			},
			_focus: {
				color: colorMode === "dark" ? "white" : "secondary",
				outlineColor: "accent",
			},
			_active: {
				color: colorMode === "dark" ? "white" : "primary",
				outlineColor: colorMode === "dark" ? "#95B5E4" : "secondary",
			},
			_disabled: {
				color: colorMode === "dark" ? "#CCCCCC" : "disabledText",
				cursor: "default",
				outlineColor: "#CCCCCC",
			},
		}),
	},
	// The default size and variant values
	defaultProps: {
		size: "md",
		variant: "primary",
	},
}

// @ts-ignore
delete defaultTheme.components.Button
