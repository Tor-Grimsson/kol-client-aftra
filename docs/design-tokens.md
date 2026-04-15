# Aftra -- Design Tokens (Web Implementation Reference)

Quick-reference for translating the brand guide into Tailwind / CSS.

## Breakpoints

| Name | Width | Brand guide source |
|---|---|---|
| mobile | 400px | `site-breakpoints/mobile.svg` |
| tablet | 960px | `site-breakpoints/tablet.svg` |
| desktop | 1440px | `site-breakpoints/desktop.svg` |

## Spacing & Layout

| Token | Value | Source |
|---|---|---|
| Header height | 96px | nav mockups |
| Megamenu expanded | 314px total (96 + 218 dropdown) | `header-expanded.svg` |
| Card border-radius | 16px (`rounded-2xl`) | mockup measurements |
| Page side padding | 32px desktop / tablet | mockup measurements |
| Max content width | ~1376px (1440 - 2*32) | inferred from mockups |

## Color Mapping (brand name -> suggested Tailwind custom)

```css
/* Primary */
--moody-50:  #EFEDFC;
--moody-100: #A8A6F5;
--moody-200: #7E7CED;
--moody-300: #5A4DDE;  /* primary brand */
--moody-400: #342B99;
--moody-500: #211D49;

/* Purple Heart */
--purple-50:  #F4EBFD;
--purple-100: #C9A0EB;
--purple-200: #AA6CE0;
--purple-300: #9533EA;
--purple-400: #5A1299;
--purple-500: #381A52;

/* Neutrals */
--alabaster: #F8F8FA;  /* page bg */
--athens:    #F0F0F4;  /* section bg */
--gainsboro: #E2E2E9;  /* borders */
--gunpowder: #3F3D56;  /* logo, dark text */
--steel:     #232230;  /* headings, near-black */
--iron:      #18181E;  /* darkest bg */

/* Accents */
--circuit-200: #16A374;  /* success */
--gold-100:    #FACC15;  /* warning */
--tabasco-200: #DA481C;  /* error */
--violet-300:  #AC1AD0;  /* info */
```

## Typography

| Role | Font | Weight | Tailwind |
|---|---|---|---|
| Hero headlines | Poppins | 800 (Extra Bold) | `font-extrabold` |
| Section headings | Poppins | 700 (Bold) | `font-bold` |
| Subheadings | Poppins | 600 (Semi Bold) | `font-semibold` |
| Nav items, labels | Poppins | 500 (Medium) | `font-medium` |
| Body copy | Poppins | 400 (Regular) | `font-normal` |
| Captions | Poppins | 300 (Light) | `font-light` |
| Display / editorial | Roboto Slab | 400/700 | -- |

## Logo Sizes

| Context | Min size |
|---|---|
| Digital (favicon, nav) | 48px mark or full lockup |
| Print | 16mm |
| Clearspace | x-height of "a" on all sides |
