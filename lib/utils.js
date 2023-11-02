import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// merge tailwind classes with clsx
export function cn(...inputs) {
	return twMerge(clsx(inputs))
}
