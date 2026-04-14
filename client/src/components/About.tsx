export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-gradient-to-b from-sky-100 to-sky-50">
      <div className="container">
        <div className="bg-white/70 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-lg">
          <div className="flex flex-col items-center mb-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
              <img
                src="/foto.jpg"
                alt="Foto de Eden Lustosa Nogueira"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800">
              Sobre mim
            </h1>
          </div>

          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed text-justify">
              Sou acadêmico graduando, apaixonado pela área da Saúde e pelo uso da tecnologia como ferramenta de transformação social, com interesse em metodologias inovadoras e no uso da Inteligência Artificial em processos de cuidado, gestão e promoção da saúde.
            </p>
            <p className="text-lg leading-relaxed text-justify">
              Desenvolvo o projeto integrador <strong>SISTOQUE</strong>, um sistema de controle de estoque criado para pequenos comércios e adaptável às Secretarias de Saúde, com o objetivo de organizar e controlar a entrada e saída de materiais, contribuindo para maior eficiência, organização e transparência na gestão administrativa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
