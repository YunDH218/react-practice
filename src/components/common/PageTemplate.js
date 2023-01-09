import styled from "styled-components";
import palette from "../../lib/styles/palette";
import {Link} from "react-router-dom";

const PageTemplateBlock = styled.div`
  width: 80vw;
  height: 80vh;
  margin: 5rem auto;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .3);
  border-radius: 0 0 1rem 1rem;
  display: flex;
  .children {
    position: relative;
    padding: 2rem 4rem;
    flex-grow: 1;
    h1 {
      margin: 0 0 2rem;
    }
  }
`;
const PageList = styled.div`
  width: 12rem;
  border-right: solid 1px ${palette.gray[4]};
  padding: 2rem 2rem;
  .page {
    display: block;
    font-size: 1.5rem;
    font-weight: 600;
    color: ${palette.gray[5]};
    margin-bottom: 2rem;
  }
  .focused {
    color: ${palette.red[6]};
  }
`;

const PageTemplate = props => {
    return (
        <PageTemplateBlock>
            <PageList>
                <Link to="/" className={props.type === "todo" ? "page focused" : "page"}>Todo List</Link>
                <Link to="/weather" className={props.type === "weather" ? "page focused" : "page"}>Weather</Link>
            </PageList>
            <div className="children">
                <h1>{props.type === "todo" ? `Todo List` : `Weather`}</h1>
                {props.children}
            </div>
        </PageTemplateBlock>
    )
};

export default PageTemplate;