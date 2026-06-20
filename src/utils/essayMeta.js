import siteConfig from "../../site.config.json";

export const getEssayDescription = (content, maxLength = 155) => {
	const text = content.replace(/\s+/g, " ").trim();
	if (text.length <= maxLength) return text;
	return `${text.slice(0, maxLength - 3).trim()}...`;
};

export const getEssayUrl = (id) => `${siteConfig.siteUrl}/essay/${id}/`;

export const getEssayImageUrl = (image) => {
	if (!image) return undefined;
	if (/^https?:\/\//.test(image)) return image;
	return `${siteConfig.siteUrl}${image.startsWith("/") ? image : `/${image}`}`;
};
