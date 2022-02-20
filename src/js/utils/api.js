class GhostClient {
  constructor() {
    this.apiKey = ghostSearchApiKey || '';
    this.apiURL = null;
    this.ghostClient = null;

    if (ghostHost) {
      this.apiURL = ghostHost.includes('http')
        ? ghostHost
        : `http:${ghostHost}`;
    }
    this.init();
  }
  init() {
    if (this.apiKey && this.apiURL) {
      this.ghostClient = new window.GhostContentAPI({
        url: this.apiURL,
        key: this.apiKey,
        version: 'v4',
      });
    } else {
      console.error(
        `Can't initialzize Ghost client with missing api key or url.`
      );
    }
  }

  async getPosts(params) {
    try {
      const posts = await this.ghostClient.posts.browse(params);

      return posts;
    } catch (error) {}
  }

  async getTags(params) {
    try {
      const tags = await this.ghostClient.tags.browse(params);

      return tags;
    } catch (error) {}
  }
}

export default new GhostClient();
