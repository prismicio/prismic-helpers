import { defineSirocConfig } from "siroc";

export default defineSirocConfig({
	hooks: {
		"build:extendRollup": (_, build) => {
			// Enforce ESM output for `.js` files
			build.rollupConfig = build.rollupConfig.reduce<typeof build.rollupConfig>(
				(acc, current) => {
					if (
						typeof current.input === "string" &&
						!Array.isArray(current.output) &&
						typeof current.output?.entryFileNames === "string" &&
						current.output?.entryFileNames.endsWith(".js")
					) {
						current.output.format = "es";
					}

					acc.push(current);

					return acc;
				},
				[],
			);
		},
	},
	rollup: {
		output: {
			sourcemap: true,
		},
	},
});
