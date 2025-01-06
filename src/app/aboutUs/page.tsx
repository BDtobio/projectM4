import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Acerca de Apple
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Revolucionamos la tecnología a través de diseño innovador, compromiso con la excelencia y una visión que transforma el mundo.
          </p>
        </div>

        {/* Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Nuestra Filosofía
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              En Apple, creemos que la tecnología debe empoderar a las personas para alcanzar su máximo potencial. Nos enfocamos en crear productos que combinan un diseño intuitivo con un rendimiento excepcional.
            </p>
            <p className="text-gray-700 text-lg">
              Nuestra misión es ofrecer experiencias inolvidables que inspiren creatividad y mejoren la vida de nuestros usuarios, siempre guiados por la innovación y la sostenibilidad.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Nuestros Valores
            </h4>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="block w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3"></span>
                Innovación sin límites para transformar el futuro.
              </li>
              <li className="flex items-start">
                <span className="block w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3"></span>
                Compromiso con la privacidad y la seguridad de los usuarios.
              </li>
              <li className="flex items-start">
                <span className="block w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3"></span>
                Sostenibilidad como prioridad en cada producto.
              </li>
            </ul>
          </div>
        </div>

        {/* Key Achievements Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Innovación Icónica
            </h4>
            <p className="text-gray-700">
              Desde el Macintosh hasta el iPhone, transformamos la industria tecnológica.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Diseño Revolucionario
            </h4>
            <p className="text-gray-700">
              Cada producto refleja nuestra pasión por la estética y la funcionalidad.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Compromiso Ambiental
            </h4>
            <p className="text-gray-700">
              Operamos con un enfoque en la neutralidad de carbono y la sostenibilidad.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Nuestro Equipo
          </h3>
          <p className="text-gray-700 text-lg text-center mb-12">
            Desde ingenieros visionarios hasta diseñadores apasionados, cada miembro de Apple comparte un compromiso inquebrantable con la excelencia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src="/images/tim-cook.jpg"
                alt="Tim Cook"
                width={96}
                height={96}
              />
              <h4 className="text-lg font-semibold text-gray-900">Tim Cook</h4>
              <p className="text-gray-700">CEO</p>
            </div>
            <div className="text-center">
              <Image
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src="/images/jony-ive.jpg"
                alt="Jony Ive"
                width={96}
                height={96}
              />
              <h4 className="text-lg font-semibold text-gray-900">Jony Ive</h4>
              <p className="text-gray-700">Ex Chief Designer</p>
            </div>
            <div className="text-center">
              <Image
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src="/images/angela-ahrendts.jpg"
                alt="Angela Ahrendts"
                width={96}
                height={96}
              />
              <h4 className="text-lg font-semibold text-gray-900">Angela Ahrendts</h4>
              <p className="text-gray-700">Ex VP Retail</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
