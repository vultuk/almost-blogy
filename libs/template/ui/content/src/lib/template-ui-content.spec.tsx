import { render } from '@testing-library/react';

import TemplateUiContent from './template-ui-content';

describe('TemplateUiContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TemplateUiContent />);
    expect(baseElement).toBeTruthy();
  });
});
