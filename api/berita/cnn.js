const axios = require("axios");

module.exports = {
  async cnn() {
    const res = await axios.get(
      "https://api-berita-indonesia.vercel.app/cnn/nasional"
    );
    return res.data.data.posts[0];
  },
};
