import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

function DocumentViewer() {
  const docs = [
    {
      uri: "https://url-to-my-pdf.pdf",
      fileType: "docx",
      fileName: "demo.docx",
    },
  ];

  return (
    <div>
      <h1>Document viewer</h1>

      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    </div>
  );
}

export default DocumentViewer;
