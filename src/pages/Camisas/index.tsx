import CardProduto from "components/CardProduto";
import camisa1 from "assets/images/camisaEngComputacao.png";

import "./styles.scss";

function Camisas() {
  return (
    <main className="container-camisas">
      <CardProduto
        image={camisa1}
        price={30.0}
        title="CAMISA ENGENHARIA DE COMPUTAÇÃO"
      />
    </main>
  );
}

export default Camisas;
