import { render } from '@testing-library/react';

import BlogPostFeature from './blog-post-feature';

describe('BlogPostFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogPostFeature />);
    expect(baseElement).toBeTruthy();
  });
});
