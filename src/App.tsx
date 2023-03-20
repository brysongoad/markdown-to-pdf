import { useState } from 'react';
import Previewer from './components/Previewer';
import defaultStyle from './assets/defaultStyle.css?inline';
import defaultMarkdown from './assets/defaultMarkdown';

const MARKDOWN_VIEW = 0;
const CSS_VIEW = 1;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [css, setCss] = useState(defaultStyle);
  const [editorView, setEditorView] = useState(MARKDOWN_VIEW);
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    editorView === MARKDOWN_VIEW ? setMarkdown(event.target.value) : setCss(event.target.value);
  }

  return (
    <div className="h-full">
      <div className="grid grid-cols-2 h-full">
        <div className="h-full flex flex-col">
          <div className="border-b-2 border-gray-400">
            <button
              onClick={() => setEditorView(MARKDOWN_VIEW)}
              className="bg-white border-r-2 border-gray-400 p-2 w-fit flex-none disabled:bg-fuchsia-100"
              disabled={editorView === MARKDOWN_VIEW}
            >
              Markdown
            </button>
            <button
              onClick={() => setEditorView(CSS_VIEW)}
              className="bg-white border-r-2 border-gray-400 p-2 w-fit flex-none disabled:bg-fuchsia-100"
              disabled={editorView === CSS_VIEW}
            >
              CSS
            </button>
          </div>
          <textarea
            className="flex-initial basis-full resize-none p-2 focus:outline-none"
            onChange={handleChange}
            value={editorView === MARKDOWN_VIEW ? markdown : css}
          />
        </div>
        <div className="h-full flex flex-col">
          <div className="border-b-2 border-gray-400 flex-none ">
            <button
              onClick={() => {
                const iframe = document.getElementById("previewFrame");
                if (iframe) (iframe as HTMLIFrameElement).contentWindow?.print();
              }}
              className="border-l-2 border-gray-400 p-2 bg-white w-fit float-right"
            >
              Export
            </button>
          </div>
          <div className="flex-initial basis-full">
            <Previewer markdownContent={markdown} cssContent={css} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
