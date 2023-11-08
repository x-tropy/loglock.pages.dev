const withMDX = require("@next/mdx")()

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions`` to include MDX files
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	webpack: config => {
		config.resolve.alias.canvas = false
		return config
	}
}

const removeImports = require("next-remove-imports")()
module.exports = withMDX(removeImports(nextConfig))
