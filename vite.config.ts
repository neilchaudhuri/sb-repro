import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"
import libInjectCss from './libInjectCss'

const path = require("path")
import eslint from "@rollup/plugin-eslint"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [reactRefresh(), eslint(), libInjectCss()],
	build: {
		cssCodeSplit: false,
		minify: false,
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			name: "react-component-library",
			fileName: format => `components.${format}.js`,
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: [
				"@chakra-ui/react",
				"@chakra-ui/theme",
				"@chakra-ui/theme-tools",
				"cleave.js",
				"date-fns",
				"downshift",
				"framer-motion",
				"react",
				"react-datepicker",
				"react-datepicker/dist/react-datepicker.css",
				"react-dropzone",
				"react-icons",
				"react-icons/md",
				"react-virtual",
			],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					"@chakra-ui/react": "chakra",
					"@chakra-ui/theme": "chakraTheme",
					"@chakra-ui/theme-tools": "chakraThemeTools",
					"cleave.js": "Cleave",
					"date-fns": "dateFns",
					"downshift": "downshift",
					"framer-motion": "framerMotion",
					"react": "React",
					"react-datepicker": "ReactDatepicker",
					"react-dropzone": "reactDropzone",
					"react-icons": "reactIcons",
					"react-icons/md": "reactIconsMd",
					"react-virtual": "reactVirtual",
				},
			},
		},
	},
})
