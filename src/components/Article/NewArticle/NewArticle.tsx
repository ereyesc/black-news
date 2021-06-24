import React from "react";
import { Row, Col, Input, Typography, Upload } from "antd";
import "tinymce/tinymce";
import "tinymce/icons/default";
import "tinymce/themes/silver";
import "tinymce/plugins/paste";
import "tinymce/plugins/link";
import "tinymce/plugins/image";
import "tinymce/plugins/table";
import "tinymce/skins/ui/oxide/skin.min.css";
import "tinymce/skins/ui/oxide/content.min.css";
import "tinymce/skins/content/default/content.min.css";
import { Editor } from "@tinymce/tinymce-react";
import { InboxOutlined } from "@ant-design/icons";
import "./NewArticle.css";

interface NewArticleProps {
  contentEditor: string;
  title: string;
  subtitle: string;
  handleTitleChange(event: React.FormEvent<HTMLInputElement>): void;
  handleSubtitleChange(event: React.FormEvent<HTMLInputElement>): void;
  setContentEditor: (content: string) => void;
}

const Article: React.FC<NewArticleProps> = ({
  contentEditor,
  setContentEditor,
  title,
  handleTitleChange,
  subtitle,
  handleSubtitleChange,
}) => {
  const { Title } = Typography;
  const { Dragger } = Upload;
  const handleEditorChange = (content: string, editor: any) => {
    console.log("Content was updated:", typeof content, content);
    setContentEditor(content.replace("&lt;", "<").replace("&gt;", ">"));
  };
  return (
    <Row className="new-article-container">
      <Col span={20}>
        <Title level={3}>Agregar titulo</Title>
        <Input
          placeholder="Titulo"
          value={title}
          onChange={handleTitleChange}
        />
      </Col>
      <Col span={20}>
        <Title level={3}>Agregar sub-titulo</Title>
        <Input
          placeholder="Subtitulo"
          value={subtitle}
          onChange={handleSubtitleChange}
        />
      </Col>
      <Col span={20}>
        <Title level={3}>Agregar imagen principal</Title>
        <Dragger
          className="new-article-dragger"
          name="files"
          action="/upload.do"
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload.
          </p>
        </Dragger>
      </Col>
      <Col span={20}>
        <Title level={3}>Agregar contenido</Title>
        <Editor
          initialValue=""
          init={{
            skin: false,
            content_css: false,
            height: 500,
            menubar: false,
            plugins: ["link image", "table paste"],
            toolbar:
              "undo redo | styleselect | forecolor | bold italic backcolor | alignleft aligncenter alignright alignjustify | outdent indent | link image",
          }}
          value={contentEditor}
          onEditorChange={handleEditorChange}
        />
      </Col>
    </Row>
  );
};

export default Article;
