import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#C60042] w-full flex flex-col">
      <div className="flex justify-center flex-wrap gap-10 py-10 px-4 ">
        <div className="flex flex-col items-center gap-10">
          <h4 className="font-extrabold text-3xl text-white">Endereço</h4>
          <div className=" w-10/12 flex flex-col justify-end pb-6 items-center gap-4 h-96 rounded-md bg-gradient-to-t from-rose-900 via-rose-900 to-slate-50">
            <p className="text-[#E5E5E5] text-center">
              Rua Dr. Beda, 98 | Parque Rosário Campos dos Goytacazes – RJ CEP:
              28027-817
            </p>

            <a
              href="telto:2299244-0078"
              className="flex gap-2 items-center"
              target="_blank"
            >
              <Image
                src="/Symbol.png"
                width={20}
                height={23}
                alt="Whatsapp icon"
              />
              <span className="text-[#E5E5E5] text-lg font-extrabold">
                (22) 99244-0078
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 w-full max-w-[550px] h-[410px]">
          <h4 className="font-extrabold text-3xl text-white">Como Chegar</h4>
          <iframe
            className="rounded-md w-full max-w-[550px] h-full max-h-[410px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d389.4668945689176!2d-41.32256275665631!3d-21.770412323142846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdd4333fdfcaf5%3A0xdac0932ae5254a26!2sPequeno%20Polegar!5e0!3m2!1spt-BR!2sbr!4v1734908991032!5m2!1spt-BR!2sbr"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className=" bg-[#989898] py-6">
        <div className="flex items-center justify-between max-w-screen-lg mx-auto">
          <h2 className="text-sm text-white">
            © Centro Educacional Pequeno Polegar – Todos os direitos reservados
          </h2>
          <h1 className="text-sm text-white">Produzido por © JCDEV </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
