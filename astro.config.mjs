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
          collapsed: true,
        },
        {
          label: "Lo que hacemos",
          items: [
            { label: "Que hacemos", slug: "02-what-we-do/what_we_do_results" },
          ],
          collapsed: true,
        },
        {
          label: "Valores",
          items: [{ label: "Valores", slug: "03-values/values_results" }],
          collapsed: true,
        },
        {
          label: "Posicionamiento",
          items: [
            {
              label: "Posicionamiento",
              slug: "04-positioning/positioning_results",
            },
          ],
          collapsed: true,
        },
        {
          label: "Esencia/Personalidad",
          items: [
            {
              label: "Personalidad",
              slug: "05-personality/personality_results",
            },
          ],
          collapsed: true,
        },
        {
          label: "Concepto creativo",
          items: [
            {
              label: "Concepto creativo",
              slug: "06-creative-concept/creative-concept_results",
            },
          ],
          collapsed: true,
        },
        {
          label: "Logo",
          items: [{ label: "Logotipo", slug: "07-logo/logo_results" }],
          collapsed: true,
        },
        {
          label: "Tipografía",
          items: [
            { label: "Tipografía", slug: "08-typography/typography_results" },
          ],
          collapsed: true,
        },
        {
          label: "Colores",
          items: [
            { label: "Paleta de Color", slug: "09-colors/colors_results" },
          ],
          collapsed: true,
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
          collapsed: true,
        },
        {
          label: "Recursos Gráficos",
          items: [
            {
              label: "Recursos Gráficos",
              slug: "11-graphic-resources/graphic-resources_results",
            },
          ],
          collapsed: true,
        },
        {
          label: "Fotografía",
          items: [
            { label: "Fotografía", slug: "12-photography/photography_results" },
          ],
          collapsed: true,
        },
        {
          label: "Aplicaciones Digitales",
          items: [
            {
              label: "Aplicaciones Digitales",
              slug: "13-digital-applications/digital-applications_results",
            },
          ],
          collapsed: true,
        },
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" },
        // },
      ],
    }),
  ],
});
