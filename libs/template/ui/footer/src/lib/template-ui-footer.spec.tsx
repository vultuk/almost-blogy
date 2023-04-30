import { render } from '@testing-library/react';

import TemplateUiFooter from './template-ui-footer';

describe('TemplateUiFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TemplateUiFooter />);
    expect(baseElement).toBeTruthy();
  });
});
