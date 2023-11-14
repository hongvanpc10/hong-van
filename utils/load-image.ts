export default function loadImage(fileName: string) {
	return require('~/assets/images/' + fileName).default.src
}
