export default function AboutUs() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Acerca de Nosotros
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Inspiramos innovación y conectamos al mundo a través de valores sólidos y un compromiso con la excelencia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Nuestra Filosofía
            </h3>
            <p className="text-gray-600 text-lg mb-4">
              Creemos en la importancia de fusionar innovación y propósito, trabajando para simplificar la vida de las personas con soluciones únicas y efectivas.
            </p>
            <p className="text-gray-600 text-lg">
              Con un enfoque en la sostenibilidad y el impacto positivo, buscamos no solo cumplir expectativas, sino superarlas constantemente, inspirando confianza y pasión en cada acción que emprendemos.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Nuestros Valores
            </h4>
            <ul className="space-y-4 text-gray-600 text-lg">
              <li className="flex items-start">
                <span className="block w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3"></span>
                Innovación constante para redefinir lo posible.
              </li>
              <li className="flex items-start">
                <span className="block w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3"></span>
                Diseño que une estética y funcionalidad.
              </li>
              <li className="flex items-start">
                <span className="block w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3"></span>
                Compromiso con un futuro sostenible.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              Innovación
            </h4>
            <p className="text-gray-600">
              Redefinimos lo posible con ideas que transforman vidas.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              Diseño
            </h4>
            <p className="text-gray-600">
              Creando experiencias que combinan simplicidad y belleza.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              Sostenibilidad
            </h4>
            <p className="text-gray-600">
              Comprometidos con un mundo más verde y responsable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
