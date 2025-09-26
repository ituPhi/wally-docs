// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catputtcin from "@catppuccin/starlight";
// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Wally",
      plugins: [catputtcin()],
      sidebar: [
        {
          label: "Publico objetivo",
          items: [{ label: "Audiencia", slug: "01-audience/audience_results" }],
        },
        {
          label: "Lo que hacemos",
          items: [
            { label: "Que hacemos", slug: "02-what-we-do/what_we_do_results" },
          ],
        },
        {
          label: "Valores",
          items: [{ label: "Valores", slug: "03-values/values_results" }],
        },
        {
          label: "Posicionamiento",
          items: [
            {
              label: "Posicionamiento",
              slug: "04-positioning/positioning_results",
            },
          ],
        },
        {
          label: "Esencia/Personalidad",
          items: [
            {
              label: "Personalidad",
              slug: "05-personality/personality_results",
            },
          ],
        },
        {
          label: "Concepto creativo",
          items: [
            {
              label: "Concepto creativo",
              slug: "06-creative-concept/creative-concept_results",
            },
          ],
        },
        {
          label: "Logo",
          items: [{ label: "Logotipo", slug: "07-logo/logo_results" }],
        },
        {
          label: "Tipografía",
          items: [
            { label: "Tipografía", slug: "08-typography/typography_results" },
          ],
        },
        {
          label: "Colores",
          items: [
            { label: "Paleta de Color", slug: "09-colors/colors_results" },
          ],
        },
        {
          label: "Sistema Visual",
          items: [
            {
              label: "Sistema Visual",
              slug: "10-visual-system/visual-system_results",
            },
            {
              label: "Aplicaciones",
              slug: "10-visual-system/visual-application_results",
            },
          ],
        },
        {
          label: "Recursos Gráficos",
          items: [
            {
              label: "Recursos Gráficos",
              slug: "11-graphic-resources/graphic-resources_results",
            },
          ],
        },
        {
          label: "Fotografía",
          items: [
            { label: "Fotografía", slug: "12-photography/photography_results" },
          ],
        },
        {
          label: "Aplicaciones Digitales",
          items: [
            {
              label: "Aplicaciones Digitales",
              slug: "13-digital-applications/digital-applications_results",
            },
          ],
        },
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" },
        // },
      ],
    }),
  ],
});
