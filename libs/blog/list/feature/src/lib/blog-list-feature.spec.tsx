import { render } from '@testing-library/react';

import BlogListFeature from './blog-list-feature';

describe('BlogListFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogListFeature />);
    expect(baseElement).toBeTruthy();
  });
});
