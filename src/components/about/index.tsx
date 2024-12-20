import Image from "next/image";
import React from "react";
import Cards from "../cards";

const About = () => {
  return (
    <div>
      <h2 className="text-4xl font-extrabold text-[#E61B40] uppercase text-center py-16">
        Quem Somos
      </h2>

      <div className="max-w-screen-lg mx-auto flex gap-2 flex-wrap justify-center lg:justify-normal lg:flex-nowrap p-4">
        <div>
          <div className="prose">
            <p className="text-sm font-normal text-[#41464C] text-justify">
              <span className="float-left text-5xl font-normal leading-none mr-2 text-white flex items-center justify-center w-[60px] h-[60px] bg-[#D31748]">
                F
              </span>
              undado em 2007 por Ulisses Cardinot – empreendedor que, anos
              depois, criaria diversas Soluções Educacionais de alcance
              internacional -, o Polegar nasceu com a missão de oferecer uma
              Educação alicerçada em princípios e valores, mas que nunca
              deixasse de ser permeada pela excelência e pela modernidade em
              cada detalhe.
            </p>
          </div>

          <p className="text-sm font-normal py-4 text-[#41464C] text-justify">
            Desde então, temos nos mantido fiéis a essa premissa, evoluindo
            diariamente e sempre buscando os mais avançados recursos
            tecnológicos e os mais renomados parceiros para que cada aula se
            torne uma experiência inesquecível.
          </p>

          <p className="text-sm font-normal py-4 text-[#41464C] text-justify">
            Em nosso DNA estão a prática do verdadeiro sociointeracionismo, a
            certeza de que o aluno precisa ser o protagonista do processo de
            ensino-aprendizagem e a crença de que os bons projetos pedagógicos
            são aqueles que ultrapassam as fronteiras da sala de aula. 
          </p>
          <p className="text-sm font-normal text-[#41464C] text-justify">
            Nos últimos anos, investimos solidamente em diversas bandeiras e
            tornamo-nos pioneiros em áreas que, tempos depois, foram abraçadas
            pelas escolas que buscam manter-se significativas no Século XXI.
          </p>
        </div>

        <Image
          src="/10.jfif"
          width={539}
          height={388}
          alt="Imagem de demosntração de crianças aprendendo com tecnologia!"
        />
      </div>

      <div className="max-w-screen-lg mx-auto flex gap-2 flex-wrap justify-center lg:justify-normal lg:flex-nowrap p-4">
        <Image
          src="/1.jfif"
          width={224}
          height={175}
          alt="Imagem de demosntração de crianças aprendendo com tecnologia!"
        />
        <div>
          <div className="prose">
            <p className="text-sm font-normal text-[#41464C] text-justify">
              <span className="float-left text-5xl font-normal leading-none mr-2 text-[#D31748] flex items-center justify-center px-2 ">
                E
              </span>
              sses e muitos outros pilares – como o uso de tecnologia como
              recurso pedagógico, o desenvolvimento de projetos exclusivos, a
              atuação de uma equipe multidisciplinar – culminaram em 2018 com a
              nossa certificação na Rede PEA-UNESCO.
            </p>
          </div>

          <p className="text-sm font-normal py-4 text-[#41464C] text-justify">
            O Polegar foi a primeira escola de Campos dos Goytacazes/RJ a ser
            oficialmente certificada por esta Rede mundial que abriga apenas
            instituições que prezam pelos pilares da UNESCO em sua prática
            pedagógica. Para alcançar tal honraria, nossos projetos foram
            relatados e analisados por uma comissão internacional em Paris. O
            recebimento da certificação ocorreu no Encontro Nacional PEA-UNESCO
            em Salvador.
          </p>
        </div>
      </div>

      <Cards />
    </div>
  );
};

export default About;
