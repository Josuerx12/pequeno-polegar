import Image from "next/image";
import React from "react";

const PolegarBelives = () => {
  return (
    <div>
      <h2 className="text-4xl font-extrabold text-[#E61B40] uppercase text-center py-16">
        em que o polegar acredita?
      </h2>
      <div className="max-w-screen-lg mx-auto flex gap-2 flex-wrap justify-center items-center lg:justify-normal lg:flex-nowrap p-4">
        <Image
          className="h-[386px]"
          src="/8.png"
          width={500}
          height={386}
          alt="Imagem de demosntração de crianças aprendendo com brinquedos intuitivos!"
        />
        <div>
          <div className="prose">
            <p className="text-sm font-normal text-[#41464C] text-justify">
              <span className="float-left text-5xl font-normal leading-none mr-2 text-[#D31748] flex items-center justify-center px-2 ">
                U
              </span>
              tilizando uma ampla gama de materiais e soluções pedagógicos
              reconhecidos pelo mercado, o Polegar ensina por meio de projetos e
              transforma em prática conceitos que, em muitas outras escolas,
              permanecem apenas na teoria.
            </p>
          </div>

          <p className="text-sm font-normal py-4 text-[#41464C] text-justify">
            Os livros didáticos são apenas fios condutores de um trabalho
            personalizado e cuidadosamente elaborado para atender às demandas do
            Século XXI e formar alunos capazes de dialogar consigo mesmos, com o
            próximo e com o mundo ao seu redor.
          </p>

          <p className="text-sm font-normal py-4 text-[#41464C] text-justify">
            Nossa equipe pedagógica participa de formações contínuas, e nossa
            equipe gestora participa das maiores feiras e congressos da América
            Latina, sempre em busca de novos recursos e metodologias ativas.
          </p>

          <p className="text-sm font-normal py-4 text-[#41464C] text-justify">
            Educamos acreditando que cada aluno possui o seu tempo, os seus
            sonhos e as suas aptidões. Nossa missão é resgatar crianças da
            Educação do Século XX, que as prepara apenas para uma prova, e
            ajudá-las a preparar-se de forma plena e divertida para a vida!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolegarBelives;
