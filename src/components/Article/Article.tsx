import React, { useState } from "react";
import { Row, Col } from "antd";
import { useParams } from "react-router-dom";
import NewArticle from "./NewArticle";
import "./Article.css";

interface ArticleRouteParams {
  articleId: string;
}

const Article: React.FC<ArticleRouteParams> = () => {
  let { articleId } = useParams<ArticleRouteParams>();
  const [title, setTitle] = useState<string>("");
  const [subtitle, setSubtitle] = useState<string>("");
  const [contentEditor, setContentEditor] = useState<string>("");
  const imgStyle = {
    backgroundImage: `url("https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amF2YXNjcmlwdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80")`,
    backgroundPosition: "center center no-repeat",
    backgroundSize: "cover",
    minHeight: "600px",
  };
  const handleTitleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTitle((event.target as HTMLInputElement).value);
  };
  const handleSubtitleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSubtitle((event.target as HTMLInputElement).value);
  };
  return (
    <>
      <NewArticle
        contentEditor={contentEditor}
        setContentEditor={setContentEditor}
        title={title}
        handleTitleChange={handleTitleChange}
        subtitle={subtitle}
        handleSubtitleChange={handleSubtitleChange}
      />
      <Row className="article-content">
        <Col xs={22} md={18} lg={14}>
          <Col span={20}>
            <h1>{title}</h1>
          </Col>
          <Col>
            <h2>{subtitle}</h2>
          </Col>
          <Col id="article-img" style={imgStyle}></Col>
          <Col>
            <div dangerouslySetInnerHTML={{ __html: contentEditor }} />
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Article;
