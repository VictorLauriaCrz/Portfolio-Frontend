import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MinhaMarca</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Sobre</a>
          <a href="#" className="hover:underline">Serviços</a>
          <a href="#" className="hover:underline">Contato</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="text-center py-20 bg-white">
        <h2 className="text-4xl font-bold mb-4">Bem-vindo ao nosso site</h2>
        <p className="text-gray-600 mb-6">
          Criamos soluções modernas para o seu negócio crescer na internet.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700">
          Começar agora
        </button>
      </section>

      {/* SERVIÇOS */}
      <section className="py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-10">Nossos Serviços</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="font-bold text-lg mb-2">Desenvolvimento Web</h4>
            <p className="text-gray-600">Sites modernos e responsivos.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="font-bold text-lg mb-2">UI/UX Design</h4>
            <p className="text-gray-600">Experiência do usuário otimizada.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="font-bold text-lg mb-2">Marketing Digital</h4>
            <p className="text-gray-600">Aumente suas vendas online.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2026 MinhaMarca - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
