import { micromark } from 'micromark';
import baseStyle from '../index.css?inline';

type Props = {
  markdownContent: string,
  cssContent: string
}

function Previewer({ markdownContent, cssContent }: Props): JSX.Element {
  let previewDocument = '<head><title>Document</title><style>' + baseStyle + cssContent + '</style></head>' + micromark(markdownContent);

  return (
    <div className="border-l-2 border-gray-400 bg-gradient-to-t from-gray-50 to-gray-200 absolute top-[42px] bottom-0 left-[50%] right-0 overflow-auto">
      <iframe id="previewFrame" className={"h-full w-[8.5in] origin-top-left scale-100"} srcDoc={previewDocument} />
    </div>
  );
}

export default Previewer
