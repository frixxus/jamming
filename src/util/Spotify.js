let accessToken
const clientId = 'cd64a6acff0b420099091a65cd044f11'
const redirectURI = 'http://localhost:3000/'
const Spotify = {
	getAccessToken() {
		if (accessToken) {
			return accessToken
		}
		const accessTokenMatch =
			window.location.href.match(/access_token=([^&]*)/)
		const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)

		if (accessTokenMatch && expiresInMatch) {
			accessToken = accessTokenMatch[1]
			const expiresIn = expiresInMatch[1]

			window.setTimeout(() => (accessToken = ''), expiresIn * 1000)
			window.history.pushState('Access Token', null, '/')
		} else {
			const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
			window.location(accessURL)
		}
	},
	search() {
		const newPromise = new Promise()
	},
}

export default Spotify
