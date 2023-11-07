import createKeccakHash from "keccak"

export default function getHash(data) {
	if (typeof data !== "string") data = JSON.stringify(data, null, 2)
	const hash = createKeccakHash("keccak256").update(data).digest("hex")
	return hash
}
