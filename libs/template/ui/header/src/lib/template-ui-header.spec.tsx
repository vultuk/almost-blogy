import { render } from '@testing-library/react';

import TemplateUiHeader from './template-ui-header';

describe('TemplateUiHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TemplateUiHeader />);
    expect(baseElement).toBeTruthy();
  });
});
