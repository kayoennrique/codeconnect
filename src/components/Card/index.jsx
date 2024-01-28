import Code from "./assets/code.svg";
import Chat from "./assets/chat.svg";
import Share from "./assets/share.svg";
import "./styles.css";

export default function Card({
  id,
  imageUrl,
  title,
  summary,
  codelines,
  shares,
  comments,
  user,
}) {
  return (
    <article className="card">
      <div className="card__image">
        <img src={imageUrl} alt="imagem do post" />
      </div>
      <div className="card__content">
        <div className="content__text">
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>

        <div className="content__footer">
          <ul>
            <li>
              <img src={Code} alt="códigos" />
              {codelines}
            </li>
            <li>
              <img src={Share} alt="shares" />
              {shares}
            </li>
            <li>
              <img src={Chat} alt="comentários" />
              {comments}
            </li>
          </ul>

          <div className="footer__user">
            <img src={user.image} alt="imagem do usuário" />
            {user.name}
          </div>
        </div>
      </div>
    </article>
  );
}
