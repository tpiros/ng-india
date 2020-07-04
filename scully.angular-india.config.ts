import { ScullyConfig, registerPlugin } from '@scullyio/scully';
const StoryblokClient = require('storyblok-js-client');

let Storyblok = new StoryblokClient({
  accessToken: ''
});

function getAllArticles(route) {
  return Storyblok.getAll('cdn/stories').then(stories => {
    const r = stories.map(story => {
      return ({
        route: `/articles/${story.slug}`
      });
    });
    return r;
  });
}

const validator = async () => [];
registerPlugin('router', 'getAllArticles', getAllArticles, validator);

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "angular-india",
  outDir: './dist/static',
  routes: {
    '/articles/:slug': {
      type: 'getAllArticles'
    }
  }
};

