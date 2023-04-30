import { BlogListFeature } from '@almost-bloggy/blog/list/feature';
import { config } from '@almost-bloggy/config';

export function Index() {
  return config().homepageIsBlog ? <BlogListFeature /> : <div>Homepage</div>;
}

export default Index;
