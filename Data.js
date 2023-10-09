const data = require("./data/DreamDictionary.json")

module.exports = {
    BlogHeader: data.BlogHeader,
    BlogDetail: data.BlogDetail
}

// fetch(data)
//     .then(res => res.json())
//     .then(data => console.log(data))