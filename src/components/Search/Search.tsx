import { Row, Col } from "antd";
import { useParams } from "react-router-dom";
import "./Search.css";

interface SearchRouteParams {
  query: string
}

const Search: React.FC<SearchRouteParams> = () => {
  let { query } = useParams<SearchRouteParams>();
  console.log('query', query);
  return (
    <Row>
      Search {query}
    </Row>
  );
};

export default Search;
