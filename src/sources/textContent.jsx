export const project_keywords = [
	"Human Relationship through AI",
	"Future of Social Computing",
	"Trust and Safety",
];

export const project_content = [
	{
		title:
			"Remix Culture as a Lens for Governing Derivative AI Models: A Hatsune Miku Case Study",
		img: "/thumbnails/miku.png",
		link_doi: "/miku.pdf",
		author: ["Eun Jeong Kang", "Waki Kamino", "Susan Fussell", "Malte Jung"],
		keywords: ["Future of Social Computing", "Trust and Safety"],
		conference: "CHI 2026 workshop",
		published: true,
	},
	{
		title:
			"Can Fans Build Parasocial Relationships through Idols’ Simulated Voice Messages?: \
			A Study of AI Private Call Users’: Perceptions, Cognitions, and Behaviors",
		link_doi: "https://dl.acm.org/doi/abs/10.1145/3711111",
		img: "/thumbnails/fanAI02.png",
		author: [
			"Eun Jeong Kang",
			"Haesoo Kim",
			"Hyunwoo Kim",
			"Susan Fussell",
			"Juho Kim",
		],
		keywords: ["Human Relationship through AI"],
		conference: "CSCW 2025",
		published: true,
	},
	{
		title:
			"Proxona: Leveraging LLM-Driven Personas to Enhance Creators' Understanding of Their Audience",
		link_doi: "https://doi.org/10.1145/3706598.3714034",
		img: "/thumbnails/proxona01.png",
		author: [
			"Yoonseo Choi",
			"Eun Jeong Kang",
			"Seulgi Choi",
			"Min Kyung Lee",
			"Juho Kim",
		],
		keywords: ["Human Relationship through AI", "Future of Social Computing"],
		conference: "CHI 2025",
		published: true,
	},
	{
		title:
			"Creator-friendly Algorithms: Behaviors, \
            Challenges, and Design Opportunities in Algorithmic Platforms",
		abs: "In many creator economy platforms, algorithms significantly impact creators’ practices and decisions about their creative expression and monetization. Emerging research suggests that the opacity of the algorithm and platform policies often distract creators from their creative endeavors. To study how algorithmic platforms can be more ‘creator-friendly,’ we conducted a mixed-methods study: interviews (N=14) and a participatory design workshop (N=12) with YouTube creators. \
		Through the interviews, we found how creators’ folk theories of the curation algorithm impact their work strategies — whether they choose to work with or against the algorithm — and the associated challenges in the process. In the workshop, creators explored solution ideas to overcome the aforementioned challenges, such as fostering diverse and creative expressions, achieving success as a creator, and motivating creators to continue their job. Based on these findings, we discuss design opportunities for how algorithmic platforms can support and motivate creators to sustain their creative work.",
		link_doi: "https://doi.org/10.1145/3544548.3581386",
		img: "/thumbnails/creator01.png",
		author: ["Yoonseo Choi", "Eun Jeong Kang", "Min Kyung Lee", "Juho Kim"],
		keywords: ["Future of Social Computing"],
		conference: "CHI 2023",
		published: true,
	},

	{
		title:
			"The Future of Conferences Is Unconferences: \
        Exploring a Decentralized Network of Regional Meetups",
		link_doi: "https://doi.org/10.1145/3612939",
		img: "/thumbnails/NEworkshop.png",
		abs: "This forum is dedicated to exploring the notion of meaningfulness in design processes, \
		taking the perspectives of community groups, nongovernmental organizations, \
		and those who are marginalized in society as starting points. Authors will reflect conceptually and methodologically on practical engagements. \
		--- Rosanna Bellini and Angelika Strohmayer, Editors",
		author: [
			"Soya Park",
			"Eun Jeong Kang",
			"Karen Joy",
			"Rosanna Bellini",
			"Jérémie Lumbroso",
			"Danaë Metaxa",
			"Andrés Monroy-Hernández",
		],
		keywords: [],
		conference: "Interactions",
		published: true,
	},
	{
		title:
			"When AI Meets the K-Pop culture: A case study of fans' perception of AI Private Call",
		img: "/thumbnails/fanAI01.jpeg",
		abs: "In this position paper, we investigate K-Pop fans’ perception of AI synthesized\
voices imitating their favorite idols’ voices. Using ‘AI Private Call’ as a case study,\
in which fans listen to an idol’s voice messages created by AI voice technology, we\
interviewed 15 real users who have experienced the service. Results show that the\
use of AI voices and the mechanics of the service conflicted with the fan culture\
where idols’ contributions and social presence are highly valued. Moreover, fans\
were worried about the potential online harassment towards idols, which may be\
caused by users’ inappropriate use, and data infringement of idols. Based on our\
findings, we discuss how the application of AI affects fan cultures, and how AI can\
be potentially designed for bridging the fan-idol relationship.",
		link_doi:
			"https://ai-cultures.github.io/papers/when_ai_meets_the_k_pop_cultur.pdf",
		author: ["Eun Jeong Kang", "Haesoo Kim", "Hyunwoo Kim", "Juho Kim"],
		keywords: ["Human Relationship through AI", "Trust and Safety"],
		conference: "Neurips 2022 Workshop",
		published: true,
	},
];

/**
 * Non-archival studies — coursework and other unpublished studies, shown in their own section
 * below Publications. Same card template as `project_content`.
 *
 * TEMPLATE — copy this block for the next one:
 * {
 * 	title: "",
 * 	img: "/thumbnails/<name>.png",   // page-1 render works well; omit for a grey placeholder
 * 	link_pdf: "/<name>.pdf",         // file lives in public/, served from the root
 * 	link_doi: "",                    // usually none for non-archival work; omit to hide the button
 * 	author: ["Eun Jeong Kang"],      // exact string "Eun Jeong Kang" is what highlights your name
 * 	methods: [],                     // methodology chips (teal), e.g. "Controlled experiment"
 * 	keywords: [],                    // pick from project_keywords above
 * 	conference: "",                  // optional purple chip, e.g. "INFO 6940, Cornell"; omit to hide
 * 	abs: "",                         // shown by the Abs button; omit to hide the button
 * 	published: true,                 // false renders a disabled "To appear" button instead
 * },
 */
export const study_content = [
	{
		title:
			"The Impact of the Researcher’s Social Presence on Synchronous Remote Usability Testing",
		img: "/thumbnails/social-presence.png",
		link_pdf: "/social-presence-usability.pdf",
		author: ["Eun Jeong Kang", "Xin Chen", "Xianyi Li"],
		methods: ["Controlled experiment"],
		keywords: ["Human Relationship through AI"],
		abs: "Synchronous remote usability testing is widely used by HCI researchers and UX designers to investigate users’ thoughts about prototypes. Researchers can host online meetings to conduct one-on-one interviews or usability tests conveniently. Although remote usability testing offers convenience to both researchers and participants, recent research shows that participants can be influenced by the experimental mode. \
		To understand how varied usability test settings affect participants as well as test results, we conducted a comparison study of three researcher presence modes, focusing on the researcher’s social presence. In a between-subjects experiment with 32 participants, we compared three conditions — (1) Camera, (2) Avatar, and (3) No-camera. The results show that there was no significant difference in usability test results. However, we found that participants tended to ask more questions and complete tasks more quickly in the camera setting. Based on these results, we discuss which setting would be beneficial for researchers in remote usability tests and how the avatar setting could be applied to user studies as an alternative.",
		published: true,
	},
	{
		title:
			"Are LLMs Leading to an HCI Winter? A Comparison of Sponsorship Trends in HCI and NLP Conferences During the LLM Era",
		img: "/thumbnails/hci-winter-sponsorship.png",
		link_pdf: "/hci-winter-sponsorship.pdf",
		author: ["Eun Jeong Kang"],
		methods: ["Quantitative trend analysis"],
		keywords: ["Future of Social Computing"],
		published: true,
	},
	{
		title:
			"Establishing Trustworthiness of AI-Driven Content on Social Media: Practices and Considerations",
		img: "/thumbnails/ai-content-trustworthiness.png",
		link_pdf: "/ai-content-trustworthiness.pdf",
		author: ["Eun Jeong Kang"],
		methods: ["Critical discourse analysis"],
		keywords: ["Trust and Safety", "Future of Social Computing"],
		abs: "Social media platforms have faced the challenge of effectively ensuring the trustworthiness of AI-driven content (e.g., synthetic content, altered content) spread in their spaces to the public. While community principles to handle AI-driven content have been suggested, platforms’ general approaches to and considerations for these emerging topics, as the authorities that implement governance, remain unclear. This study explores the procedures platforms use to ensure trustworthiness of AI-driven content and identifies the factors that enable platforms to establish AI-driven content principles. \
		Through critical discourse analysis of content outlining policies, we identified that platforms are guided by their existing guidelines to distinguish and moderate AI-driven content from general content. Additionally, user spontaneity and the integration of stakeholder values into decision-making are essential for effectively fostering trust in content among users. We underscore the significance of designing user experiences that encourage social media users to take ownership of creating trustworthy AI-driven content.",
		published: true,
	},
];

export const story_content = [
	{
		title: "When emotions become form vol.2",
		img: "/thumbnails/vol2.png",
		content:
			"Artifact that uses AI generated images created based on Korea tradition abstract painting dataset",
		altContent: "",
		credits: "",
		link: "https://vimeo.com/385763280",
	},
	{
		title: "A Piece of Peace",
		img: "/thumbnails/apop.png",
		content: "Micrsoft Imagine Cup 2021 second place in Game area",
		altContent: "",
		credits: "",
		link: "https://youtu.be/uO8FNzCvZFA?si=pb6NqBdCj4Q2onpE",
	},
	{
		title: "FanARea",
		img: "/thumbnails/walldol.png",
		content:
			"Social AR application that enables K-Pop fans to form physical social communities",
		altContent: "",
		credits: "",
		link: "https://vimeo.com/628308451",
	},
	{
		title: "Partti",
		img: "/thumbnails/partti.png",
		content: "Collaborative K-Pop dance video tutorial",
		altContent: "",
		credits: "",
		link: "https://vimeo.com/670820074",
	},
	{
		title: "The Place Without Space",
		img: "/thumbnails/theplacewithoutspace.png",
		content: "VR artwork showcase",
		altContent: "",
		credits: "",
		link: "https://vimeo.com/310008502",
	},
];

export const news_content = [
	{
		date: "July, 2026",
		content:
			"My paper studying open model marketplace got accepted to AIES 2026!",
		featureds: true,
	},
	{
		date: "June, 2026",
		content:
			"I passed my A-exam. I will investigate the accountability of AI remixers as intermediaries in the AI supply chain.",
		featureds: true,
	},
	{
		date: "June, 2026",
		content: "Will be attending FAccT 2026 Doctoral Consortium",
		featureds: true,
	},
	{
		date: "April, 2026",
		content: (
			<>
				Attending CHI 2026! I will attend a workshop
				<a
					href="https://sites.google.com/tilburguniversity.edu/democratizationgenai-chi26/home?authuser=0"
					target="_blank"
					rel="noreferrer"
				>
					Democratization of AI
				</a>
			</>
		),
		featureds: true,
	},
	{
		date: "Oct, 2025",
		content: "Will be attending CSCW 2025!",
		featureds: true,
	},
	{
		date: "April, 2025",
		content:
			"Will be attending CHI 2025! I will present a poster and my collaborator will present a paper.",
		featureds: true,
	},
	{
		date: "Nov 11, 2024",
		content: "Will be attending CSCW 2024!",
		featureds: true,
	},
	{
		date: "Sep 24, 2024",
		content: "The paper I worked at KIXLAB has been accepted to CSCW 2025",
		featureds: true,
	},
	{
		date: "Jan 17, 2023",
		content:
			"The paper I worked as a collaborator has been accepted to CHI 2023🎉🎉",
		featureds: false,
	},
];
