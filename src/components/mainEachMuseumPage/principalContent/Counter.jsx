import { useState } from "react";
import styled from "styled-components";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

export default function Counter() {
  const [likeCount, setLikeCount] = useState(0);
  const [visitCount, setVisitCount] = useState(1300);

  const handleClickLIkeButton = () => {
    if (!likeCount) {
      setLikeCount((prev) => prev + 1);
    } else setLikeCount((prev) => prev - 1);
  };
  return (
    <CounterStyled>
      <span className="visits">{visitCount} Visite(s)</span>
      <span className="likes">
        {likeCount} J'aime(s){" "}
        {likeCount ? (
          <AiOutlineDislike
            onClick={handleClickLIkeButton}
            className="icon-dislike"
          />
        ) : (
          <AiOutlineLike
            onClick={handleClickLIkeButton}
            className="icon-like"
          />
        )}
      </span>
    </CounterStyled>
  );
}

const CounterStyled = styled.div`
  margin-bottom: 10px;
  .likes,
  .visits {
    font-size: 16px;
    font-weight: bold;
    margin-right: 30px;
    cursor: pointer;
    .icon-like {
      color: green;
      font-size: 20px;
    }
    .icon-dislike {
      font-size: 20px;
      color: red;
    }
  }
  @media screen and (max-width: 860px) {
    .likes,
    .visits {
      font-size: 14px;
      .icon-like {
        font-size: 18px;
      }
      .icon-dislike {
        font-size: 18px;
      }
    }
  }
`;
