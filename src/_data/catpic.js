const axios = require("axios");

module.exports = async () => {
    try {
        const result = await axios.get("https://api.thecatapi.com/v1/images/search");
        return result.data[0].url;
    } catch {
        return "https://upload.wikimedia.org/wikipedia/commons/1/18/Dog_Breeds.jpg";
    }
};
