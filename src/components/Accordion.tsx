// Componente para acordion de preguntas frecuentes

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { InputEmail } from "./ui/inputEmail";

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-4xl font-semibold leading-7 text-[--redPrimary]">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl text-gray-600">
                Que es Mistery Movie?
              </AccordionTrigger>
              <AccordionContent className="text-xl text-gray-600">
                Es un servicio que ofrece una gran variedad de peliculas, series
                y documentales premiados en casi cualquier pantalla conectada a
                internet.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl text-gray-600">
                Que puedo ver en Mistery Movie?
              </AccordionTrigger>
              <AccordionContent className="text-xl text-gray-600">
                Mistery Movie tiene un amplio catalogo de peliculas, series,
                documentales, animes, originales premiados y mas. Todo lo que
                quieras ver, cuando quieras.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl text-gray-600">
                Donde puedo ver Mistery Movie?
              </AccordionTrigger>
              <AccordionContent className="text-xl text-gray-600">
                Disfruta donde quieras, cuando quieras. Inicia sesión en tu
                cuenta de Mistery Movie para ver contenido al instante desde tu
                computadora personal o en cualquier dispositivo con conexión a
                internet, como smart TV, smartphones, tablets, reproductores
                multimedia y consolas de juegos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl text-gray-600">
                Como cancelo?
              </AccordionTrigger>
              <AccordionContent className="text-xl text-gray-600">
                Mistery Movie es flexible. Sin contratos molestos ni
                compromisos. Cancela la membresía online con solo dos clics. No
                hay cargos por cancelación. Empieza y termina cuando quieras.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 md:text-center mt-6">
          <p className="text-base text-gray-600 mb-6">
            ¿Quieres ver Mistery Movie ya? Ingresa tu email para crear una
            cuenta o reiniciar tu membresía.
          </p>
          <div className="justify-center text-base font-semibold leading-7 text-[--redPrimary] md:flex lg:gap-x-10">
            <InputEmail />
          </div>
        </div>

      </div>
    </div>
  );
}
