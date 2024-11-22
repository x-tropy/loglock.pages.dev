const withMDX = require("@next/mdx")()

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions`` to include MDX files
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	async rewrites() {
		return {
			beforeFiles: [
				// These rewrites are checked after headers/redirects
				// and before all files including _next/public files which
				// allows overriding page files
				{
					source: "/home",
					destination: "/home/introduction"
				}
			]
		}
	}
}

const removeImports = require("next-remove-imports")()
module.exports = withMDX(removeImports(nextConfig))
