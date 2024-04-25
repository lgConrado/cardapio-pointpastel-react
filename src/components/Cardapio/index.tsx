import cardapio from "./cardapio.json";

const Cardapio = () => {
  return (
    <>
      {Object.entries(cardapio[0]).map((modulo: any, index) => {
        return (
          <section key={index}>
            <h2>{modulo[0]}</h2>
            {modulo[1].map((opcao: any) => {
              return (
                <span key={index}>
                  <h3>{opcao.titulo}</h3>
                  <h3>{opcao.valor}</h3>
                </span>
              );
            })}
          </section>
        );
      })}
    </>
  );
};

export default Cardapio;
