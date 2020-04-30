import wp from 'wpapi'

class Config {
    get postURLPrefix() {
        return 'news'
    }
    get pageURLPrefix() {
        return ''
    }
    get wordpressURL() {
        return'https://67d5a95b8ba3749af290631d8db0203b5b20e2b1.hl-b.getshifter.co/wp-json'
    }
    get wpClient() {
        return new wp({
            endpoint: this.wordpressURL
        })
    }
}

export default new Config()