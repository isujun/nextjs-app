interface DocsProps {
	params: {
		slug: string[]
	}
}
export default function Docs({ params }: DocsProps) {

	let title
	if (params.slug?.length === 1) {
		title = `Feature ${params.slug[0]} Concept ${params.slug[0]}`
	}
	if (params.slug?.length === 2) {
		title = `Feature ${params.slug[0]} Concept ${params.slug[1]}`
	}
	if (params.slug?.length === 3) {
		title = `Feature ${params.slug[0]} Concept ${params.slug[1]} Example ${params.slug[3]}`
	}

	if (!params.slug) {
		title = "Docs Page"
	}
	return (
		<>
			<h4>Catch All Segments</h4>
			<p>{title}</p>
		</>
	)
}
