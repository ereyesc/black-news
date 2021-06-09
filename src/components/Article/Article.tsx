import React, { useState } from 'react';
import { Row, Col } from "antd";
import { useParams } from "react-router-dom";
import 'tinymce/tinymce';
 import 'tinymce/icons/default';
 import 'tinymce/themes/silver';
 import 'tinymce/plugins/paste';
 import 'tinymce/plugins/link';
 import 'tinymce/plugins/image';
 import 'tinymce/plugins/table';
 import 'tinymce/skins/ui/oxide/skin.min.css';
 import 'tinymce/skins/ui/oxide/content.min.css';
 import 'tinymce/skins/content/default/content.min.css';
import { Editor } from "@tinymce/tinymce-react";
import "./Article.css";

interface ArticleRouteParams {
  articleId: string
}

const Article: React.FC<ArticleRouteParams> = () => {
  let { articleId } = useParams<ArticleRouteParams>();
  const [contentEditor, setContentEditor] = useState<string>('');
   const handleEditorChange = (content: string, editor: any) => {
     console.log('Content was updated:', typeof content, content);
     setContentEditor(content);
   }
  return (
    <Row>
      Article {articleId}
      <Editor
         initialValue="<p>This is the initial content of the editor</p>"
         init={{
           skin: false,
           content_css: false,
           height: 500,
           menubar: false,
           plugins: [
             'link image',
             'table paste'
           ],
           toolbar:'undo redo | styleselect | forecolor | bold italic backcolor | alignleft aligncenter alignright alignjustify | outdent indent | link image'
         }}
         value={contentEditor}
         onEditorChange={handleEditorChange}
      />
      <div dangerouslySetInnerHTML={{ __html: contentEditor }} />
    </Row>
  );
};

export default Article;
