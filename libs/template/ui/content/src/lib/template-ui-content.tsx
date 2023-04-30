/* eslint-disable-next-line */
export interface TemplateUiContentProps {
  children: React.ReactNode;
}

export function TemplateUiContent(props: TemplateUiContentProps) {
  return (
    <div className="mx-auto max-w-7xl items-center p-6 lg:px-8">
      {props.children}
    </div>
  );
}

export default TemplateUiContent;
