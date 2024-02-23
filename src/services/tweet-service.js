const {TweetRepository} = require('../repository/index');


class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
    }
    async create(data){
        const content = data.content;
        const hashtags = content.match(/#[a-zA-Z0-9_]+/g); 
        hashtags = hashtags.map(hashtag => hashtag.substring(1));
        console.log(hashtags);
        const tweet = await this.tweetRepository.create(data);
        return tweet;

    }
}

module.exports = TweetService;


/*
    this is my #first tweet
    using the regex to find the hashtag
    /#[a-zA-Z0-9_]+/g
*/