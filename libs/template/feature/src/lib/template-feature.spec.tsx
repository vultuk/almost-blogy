import { render } from '@testing-library/react';

import TemplateFeature from './template-feature';

describe('TemplateFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TemplateFeature />);
    expect(baseElement).toBeTruthy();
  });
});
