const fs = require('fs');
const url = require('url');

class ImageDownloader {
  constructor(page) {
    this.page = page;
    this.count = 0;
  }

  async save(path) {
    this.count += 1;
    const response = await this.page.goto(path);
    const buffer = await response.buffer();
    const ext = url.parse(response.url).pathname.match('.png|.jpg|.jpeg')
    await fs.writeFile('out/' + this.count + ext, buffer);
  }
}

module.exports = ImageDownloader;