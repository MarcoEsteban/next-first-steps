import { Navbar } from "@/components";

/*
 * Las carpetas que estan con nombre '(general)' dentro del parentesis no se toma en cuenta como una ruta. Y nos sirve
 * para Agrupar Carpetas.
 *
 * El { children } es la page que esta dentro de las carpetas ['./about/page.tsx', './pricing/page.tsx', './contact/page.tsx']
 * esto se visualizara dentro del AboutLayout
 */
export default function GeneralLayout(
  { children }: { children: React.ReactNode },
) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24 text-5xl">
        <span className="text-5xl">Hola Mundo</span>
        {children}
      </main>
    </>
  );
}
