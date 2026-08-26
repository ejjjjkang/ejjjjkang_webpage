import { Button, Stack, Typography, Skeleton, Box } from "@mui/material";
import CardWrapper from "./CardWrapper";
import ThumbnailWrapper from "./ThumbnailWrapper";
import ButtonWrapper from "./ButtonWrapper";
import {
	ConferenceChipWrapper,
	KeywordChipWrapper,
	MethodChipWrapper,
} from "./WordChipWrapper";

/**
 * One publication / course-project card.
 * Shared by the Publications and Non-archival Studies sections so both stay in sync.
 *
 * `entry` fields: title, conference, author[], img, methods[], keywords[],
 *                 abs, link_doi, link_pdf, published
 */
const PublicationCardWrapper = ({
	entry,
	index,
	activeIndex,
	handleClick,
	setActiveIndex,
}) => {
	return (
		<CardWrapper>
			<Stack direction={{ md: "row", xs: "column" }} spacing={{ xs: "3" }}>
				{entry.img ? (
					<ThumbnailWrapper>{entry.img}</ThumbnailWrapper>
				) : (
					<Skeleton variant="rectangular" width="100%" height={150} />
				)}
				<Stack direction={"column"} alignItems={"flex-start"} sx={{ p: 2 }}>
					<Box variant="span" sx={{ lineHeight: "150%", pb: 1 }}>
						{entry.conference ? (
							<ConferenceChipWrapper>{entry.conference}</ConferenceChipWrapper>
						) : null}
						{entry.title}
					</Box>
					<Box variant="span">
						{entry.author.map((author) => (
							<Typography key={author} sx={{ display: "inline", pr: 1 }}>
								{author === "Eun Jeong Kang" ? (
									<strong style={{ color: "#bf55cf" }}>{author}</strong>
								) : (
									author
								)}
							</Typography>
						))}
					</Box>
					{(entry.methods && entry.methods.length > 0) ||
					(entry.keywords && entry.keywords.length > 0) ? (
						<Box variant="span">
							{(entry.methods || []).map((method) => (
								<MethodChipWrapper key={method}>{method}</MethodChipWrapper>
							))}
							{(entry.keywords || []).map((keyword) => (
								<KeywordChipWrapper key={keyword}>{keyword}</KeywordChipWrapper>
							))}
						</Box>
					) : null}
					<Stack
						direction={"column"}
						sx={{ pt: 1 }}
						justifyContent={"flex-start"}
					>
						<Stack direction={"row"}>
							{entry.published ? (
								<>
									<ButtonWrapper
										abs={entry.abs}
										index={index}
										handleClick={handleClick}
										setActiveIndex={setActiveIndex}
										activeIndex={activeIndex}
										text="Abs"
									/>
									<ButtonWrapper link={entry.link_doi} text="Doi" />
									<ButtonWrapper link={entry.link_pdf} text="PDF" />
								</>
							) : (
								<Stack sx={{ mr: 1, mt: 2 }}>
									<Button variant="outlined" disabled>
										To appear
									</Button>
								</Stack>
							)}
						</Stack>
						{index === activeIndex ? (
							<Box
								sx={{
									border: "1px  #6fc5c971 solid",
									backgroundColor: "#ffffff",
									p: 3,
									mt: 1,
									fontSize: "0.9em",
									lineHeight: "150%",
									fontWeight: 400,
									borderRadius: "10px",
								}}
							>
								{entry.abs}
							</Box>
						) : null}
					</Stack>
				</Stack>
			</Stack>
		</CardWrapper>
	);
};

export default PublicationCardWrapper;
