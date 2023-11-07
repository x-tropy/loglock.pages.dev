const randomPick = (arr, singlePick) => {
	if (singlePick) {
		return arr[Math.floor(Math.random() * arr.length)]
	} else {
		let result = arr.filter(() => Math.random() > 0.5)
		while (result.length < 1) {
			result = arr.filter(() => Math.random() > 0.5)
		}
		return result
	}
}

const virtualResources = [
	`CPU: 2x Intel Xeon, RAM: 1024 MB, SSD: 20 GB RAID`,
	`CPU: 4x Intel Xeon, RAM: 2048 MB, SSD: 40 GB RAID`,
	`CPU: 8x Intel Xeon, RAM: 4096 MB, SSD: 80 GB RAID`,
	`CPU: 16x Intel Xeon, RAM: 8192 MB, SSD: 160 GB RAID`,
	`CPU: 32x Intel Xeon, RAM: 16384 MB, SSD: 320 GB RAID`
]

const dataCategories = [`Questionnaire`, "Polysomnography", "Hypnogram"]

const organizations = [
	"Sleep Research Society",
	"European Academy of Sleep Medicine",
	"University of Freiburg",
	"FZI Forschungszentrum Informatik",
	"Sleep track GmbH",
	"University Hospital Heidelberg",
	"Nordwest Hospital, Frankfurt",
	"University Hospital Rechts der Isar",
	"University Hospital Tübingen",
	"Universitätsklinikum Carl Gustav Carus Dresden",
	"Med Sci Sports",
	"Sleep health foundation"
]

const projectTypes = ["Public (open research)", "Private"]

const projectTitles = [
	"Sleep and circadian rhythms in health and disease",
	"Measure the correlation of age, blood pressure, heart rate and sleep",
	"The corticothalamic system in sleep",
	"Relation of sleep-disordered breathing to cardiovascular disease risk factors",
	"Ambulatory sleep scoring using accelerometers-distinguishing between nonwear and sleep/wake states",
	"Cognitive Performance, Sleepiness, and Mood in Partially Sleep Deprived Adolescents: The Need for Sleep Study",
	"To investigate the effects of sleep restriction on cognitive performance, subjective sleepiness, and mood in adolescents.",
	"Further Validation of Actigraphy for Sleep Studies",
	"Use of home sleep studies for diagnosis of the sleep apnoea/hypopnoea syndrome."
]

const generateProjectAcronym = () => {
	const acronymTypes = ["word", "wordPlusNumber", "initials"]
	const acronymType = acronymTypes[Math.floor(Math.random() * acronymTypes.length)]
	const wordList = ["Sleep", "Track", "Health", "Fast", "Med", "Sci", "Analysis", "Night", "Nite", "G'Nite-", "Data", "Study", "Proj", "Tech"]
	switch (acronymType) {
		case "word":
			// pick 2 words
			const word1 = randomPick(wordList, true)
			const word2 = randomPick(wordList, true)
			if (word1 === word2) {
				return word1.toUpperCase().split("").join(".")
			}
			return `${word1}${word2}`
		case "wordPlusNumber":
			const numbers = [1, 2, 3, 4, 5, 6]
			const pickedNumber = randomPick(numbers, true)
			const pickedWord = randomPick(wordList, true)
			return `${pickedWord}-${pickedNumber}`
		case "initials":
			// pick alphabets
			const alphabets = "abcdefghijklmnopqrstuvwxyz".split("")
			const pickedAlphabets = randomPick(alphabets, false)
			// shuffle the picked alphabets
			pickedAlphabets.sort(() => Math.random() - 0.5)

			if (Math.random() > 0.5) {
				return pickedAlphabets.slice(0, 5).join("").toUpperCase()
			} else {
				return pickedAlphabets.slice(0, 3).join(".").toUpperCase()
			}

		default:
			break
	}
}

const projectAcronyms = Array.from({ length: 100 }, () => generateProjectAcronym())

export { projectAcronyms, virtualResources, dataCategories, organizations, projectTypes, projectTitles, randomPick }
