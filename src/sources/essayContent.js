export const essay_content = [
	// Add essays here, e.g.:
	{
		id: "thoughts-on-the-safe-bots-act",
		title: "Thoughts on the SAFE BOTS Act",
		date: "March, 2026",
		content: `The newly introduced bill for online child safety includes the SAFE BOTS Act, which covers what chatbot providers—those who offer chatbots for business purposes—must do to comply with and commit to online child safety. Given that kids are vulnerable to delusional spirals—a phenomenon in which people develop or experience worsening psychosis [1, 3]—through interactions with chatbots, it is necessary to require chatbot providers to take actions to mitigate them. The bill focuses on three areas: (1) not impersonating licensed professionals (e.g., doctors), (2) disclosing potential impacts to covered users, and (3) providing policies and procedures that ensure covered users can break immersion.

I argue that the act should be improved given the way chatbots are created. First, the impact of a chatbot on users depends on how its persona is designed so AI disclosure might not effectively work as breaking points. When a chatbot is designed to impersonate a specific realistic person or fictional characters and uses similar linguistic cues, their speech is likely to affect people—even if users recognize it as AI-generated—by producing false memories [2]. Developers design chatbot to keep considering previous chat history and user feedback. They are programmed to learn from positive feedback from users. However, current provisions treat chatbots as finished products rather than as constructed entities that evolve through interactions. Technology companies currently strongly emphasize AI disclosure to reduce misinformation (e.g., Meta AI-generated content label [5]), disclosure may not be an effective solution for mitigating complex harms, rather solutionist logics especially in the case of chatbots [4].

Second, current provisions that require platforms to have ‘reasonable’ policies do not consider the pitfalls of the training dataset for a chatbot model. Chatbot’s answers are generated based on probabilities calculated by its parameters. The scale of the training dataset decides the quality of the chatbot's answer, but training dataset is not always affordable and structured based on engineer’s views. If the training dataset is skewed toward specific populations or does not reflect cultural minorities, the chatbot’s responses may fail to represent diverse points of view. Without addressing data voids in training datasets, chatbots may generate stereotypical answers that primarily reflect dominant populations in the data [6]. Reasonably, platforms would make policies and procedures in a way for users to comply with their rules, rather than their model inside. This may leave more accountability to users, especially when they are easy to overrely on AI.

Disclaimer: For this assignment, I used Gemini to correct grammar (prompt: check grammar). Working with GenAI helped me refine my wordings in this critique.


[1] Hill, K., & Freedman, D. (2025). Chatbots Can Go Into a Delusional Spiral. Here's How It Happens. International New York Times, NA-NA.
[2] Pataranutaporn, P., Archiwaranguprok, C., Chan, S. W., Loftus, E., & Maes, P. (2025, March). Slip through the chat: Subtle injection of false information in llm chatbot conversations increases false memory formation. In Proceedings of the 30th International Conference on Intelligent User Interfaces (pp. 1297-1313).
[3] Chatbot psychosis. Wikipedia. https://en.wikipedia.org/wiki/Chatbot_psychosis (Accessed: Mar-19-2026)
[4] Angel, M. P., & Boyd, D. (2024, March). Techno-legal solutionism: Regulating children's online safety in the United States. In Proceedings of the 2024 Symposium on Computer Science and Law (pp. 86-97).
[5] Clegg, N. (2024). Labeling AI-generated images on Facebook, Instagram and Threads. Meta, 6.
[6] Golebiewski, M., & Boyd, D. (2019). Data voids: Where missing data can easily be exploited.
`,
	},
	{
		id: "thoughts-hate-speech",
		title: "Hate Speech Moderation",
		date: "March, 2026",
		content: ` Disclaimer: This is a incomplete note written for Trust and Safety on Platform course. For this assignment, I used Gemini to correct grammar (prompt: check grammar). Working with GenAI helped me refine my wordings in this critique.

		The article by Wilson and Land, “Hate Speech on Social Media: Content Moderation in Context,” emphasizes the importance of considering the context of hate speech in evidence-based policies. When I first read this article, I wondered whether contextualized moderation had already been a well-established topic of discussion in HCI research back in 2021 (isn’t this claim too trivial?). However, I realized that the authors have a concrete target audience: platform policymakers and legal communities. The paper was published as a law review article and explains how current legal frameworks may overlook important issues without empirical findings. In this sense, I began to think that there may be not only a research gap among scholars within the same field, but also an understanding gap between different fields when it comes to building governance for advanced technologies. This reminded me of our in-class case study exercise, where we provided feedback on one another’s case studies while role-playing different stakeholders (e.g., regulators, mothers). When I practiced that, I was struggling to simulate a regulator. Following this thought, I wondered what kinds of approaches could help bridge these fields. One possible approach would be developing a shared glossary for the specific cases between policymakers, HCI researchers, and AI developers, like glossary in T&S curriculums.

Going back to the authors’ claim, I agree with their point and believe that laws can be improved by a better understanding of social and cultural norms. Platform users do not simply operate within static normative ethics; they continually revise their standards based on the communities they trust and the beliefs shaped by their lived experiences. However, as the authors note, these expectations can be demanding from the platforms’ perspective. Amid the current flood of AI-generated “slop” on social media, it is unrealistic to expect platforms to slowly shift from automated approaches to human-driven moderation. Also, with the LLM approaches, perhaps, automating contextualized moderation may not be an unrealistic goal. However, at the same time, what is important here might be whether this might introduce another form of discrimination that neglects low-resource languages and indigenous cultures in training models, and how the lens of agents to view context is designed. The context should be dissected by multiple points of view, not judging the context at once, so that humans can oversee and take accountability for their actions. 


`,
	},
];
