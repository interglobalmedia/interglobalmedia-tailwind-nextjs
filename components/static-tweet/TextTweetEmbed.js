import StaticTextTweet from './StaticTextTweet'

const TextTweetEmbed = (textTweetEmbedProps) => {
	const props = {
		...textTweetEmbedProps,
	}
	return <StaticTextTweet {...props} />
}

export default TextTweetEmbed
