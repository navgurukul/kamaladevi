
import Disqus from 'disqus-react';

export default class EnglishDiscussionEmbed extends Disqus.DiscussionEmbed {
  getDisqusConfig(config) {
       return function () {
           this.page.identifier = config.identifier;
           this.page.url = config.url;
           this.page.title = config.title;
           this.language = 'en'
           this.callbacks.onNewComment = [
               config.onNewComment,
           ];
       };
   }
}
