import { TemplateUiContent } from '@almost-bloggy/template/ui/content';
import { TemplateUiFooter } from '@almost-bloggy/template/ui/footer';
import { TemplateUiHeader } from '@almost-bloggy/template/ui/header';

/* eslint-disable-next-line */
export interface TemplateFeatureProps {
  children: React.ReactNode;
}

export function TemplateFeature(props: TemplateFeatureProps) {
  return (
    <>
      <TemplateUiHeader />
      <TemplateUiContent>{props.children}</TemplateUiContent>
      <TemplateUiFooter />
    </>
  );
}

export default TemplateFeature;
