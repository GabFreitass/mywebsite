import "./styles.scss";
import { StarOutlined, ShoppingCartOutlined } from "@ant-design/icons";

interface CardProdutoProps {
  image: string;
  title: string;
  price: string | number;
  rate?: number;
}

function CardProduto({ image, title, price, rate }: CardProdutoProps) {
  return (
    <section className="container-cardProduto">
      <img src={image} alt={image} />
      <div>
        <h2>{title}</h2>
        <h2 style={{ color: "#ff8418" }}>R$ {price}</h2>
      </div>
      <div className="container-cardProduto__icons">
        <ul>
          <li>
            <StarOutlined />
          </li>
          <li>
            <StarOutlined />
          </li>
          <li>
            <StarOutlined />
          </li>
          <li>
            <StarOutlined />
          </li>
          <li>
            <StarOutlined />
          </li>
        </ul>
        <ShoppingCartOutlined />
      </div>
    </section>
  );
}

export default CardProduto;
