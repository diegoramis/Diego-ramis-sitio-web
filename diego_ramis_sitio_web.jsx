export default function DiegoRamisWebsite() {
  const services = [
    {
      title: "Consultoría Estratégica",
      description:
        "Acompaño empresas, emprendedores y organizaciones en la definición de estrategias de crecimiento, posicionamiento y transformación comercial.",
    },
    {
      title: "Desarrollo de Negocios",
      description:
        "Diseño oportunidades de expansión, alianzas, nuevos modelos de ingresos y planes de ejecución para convertir ideas en resultados concretos.",
    },
    {
      title: "Transformación Comercial",
      description:
        "Impulso procesos de ventas, propuestas de valor, canales y experiencias de cliente para fortalecer la competitividad de cada proyecto.",
    },
  ];

  const strengths = [
    "Visión estratégica y comercial",
    "Experiencia en desarrollo de negocios",
    "Conocimiento del mercado hondureño",
    "Enfoque en resultados y ejecución",
    "Capacidad para generar alianzas",
    "Perfil profesional, cercano y confiable",
  ];

  const sectors = [
    "Consultoría empresarial",
    "Innovación y crecimiento",
    "Proyectos de expansión",
    "Alianzas estratégicas",
    "Desarrollo comercial",
    "Transformación organizacional",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-cyan-400/10 to-transparent" />
        <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-sky-700/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-sm text-cyan-200">
                Consultor y Desarrollador de Negocios en Honduras
              </p>
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">
                Diego Ramis
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                Impulso empresas, proyectos y oportunidades de negocio con una visión estratégica,
                comercial y orientada a resultados. Mi enfoque combina análisis, ejecución y desarrollo de alianzas para generar crecimiento sostenible.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg transition hover:scale-[1.02]"
                >
                  Hablemos
                </a>
                <a
                  href="#servicios"
                  className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
                >
                  Ver servicios
                </a>
              </div>
            </div>

            <div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                    <p className="text-sm text-slate-400">Perfil</p>
                    <p className="mt-2 text-xl font-semibold">Estratégico</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                    <p className="text-sm text-slate-400">Enfoque</p>
                    <p className="mt-2 text-xl font-semibold">Crecimiento</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                    <p className="text-sm text-slate-400">Mercado</p>
                    <p className="mt-2 text-xl font-semibold">Honduras</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                    <p className="text-sm text-slate-400">Valor</p>
                    <p className="mt-2 text-xl font-semibold">Ejecución real</p>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5 text-cyan-100">
                  Ayudo a convertir visión, oportunidades y relaciones estratégicas en planes accionables y resultados medibles.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Sobre mí</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Un perfil profesional enfocado en crear valor</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Soy Diego Ramis, profesional orientado a la consultoría, la estrategia comercial y el desarrollo de negocios.
              Trabajo con una visión práctica: identificar oportunidades, estructurar soluciones y acompañar su implementación.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Mi propuesta de valor se basa en comprender el contexto de cada organización, fortalecer su posicionamiento y construir rutas claras de crecimiento, especialmente en entornos donde las alianzas, la innovación y la ejecución marcan la diferencia.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Áreas clave</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {sectors.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Servicios</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Cómo puedo aportar a su organización</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-7 shadow-xl transition hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Fortalezas</p>
            <h2 className="mt-3 text-3xl font-bold">Lo que me distingue</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              {strengths.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-slate-900 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Propuesta</p>
            <h2 className="mt-3 text-3xl font-bold">Una mirada integral al crecimiento</h2>
            <p className="mt-6 leading-8 text-slate-300">
              Combino pensamiento estratégico, desarrollo comercial y capacidad de articulación para ayudar a empresas y proyectos a crecer con dirección, claridad y enfoque.
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              Ya sea en la creación de nuevas oportunidades, la estructuración de alianzas o la definición de una hoja de ruta comercial, mi objetivo es aportar soluciones serias, viables y alineadas con resultados.
            </p>
          </div>
        </div>
      </section>

      <section id="contacto" className="border-t border-white/10 bg-slate-900/80">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Contacto</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Conectemos para construir nuevas oportunidades</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Estoy abierto a colaborar con empresas, organizaciones y proyectos que busquen crecimiento, desarrollo estratégico y nuevas oportunidades de negocio en Honduras.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:diego.ramis@iot2latam.com"
                className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
              >
                diego.ramis@iot2latam.com"
              </a>
              <a
                href="https://www.linkedin.com/in/diegoramiscaffiro/"
                className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
