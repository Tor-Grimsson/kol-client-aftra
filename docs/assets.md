# Aftra -- Asset Inventory

## Directory Map

```
_a-torg/
  brandguide.pdf              # Brand Identity Guidelines v20250428 (27.6MB, 20+ pages)
  _nav/
    header.svg                # Nav bar mockup, collapsed (1440x96)
    header-expanded.svg       # Nav bar mockup, megamenu open (1440x314)
  site-breakpoints/
    desktop.svg               # Full-page mockup at 1440px
    tablet.svg                # Full-page mockup at 960px
    mobile.svg                # Full-page mockup at 400px
  icons/
    aftra-selection/          # 111 SVGs -- Aftra's custom icon set
      aftra-selection.svg ... aftra-selection-58.svg   (59 files -- utility/UI icons)
      arrows-chevron.svg ... arrows-chevron-11.svg     (12 files -- directional arrows)
      nav.svg ... nav-4.svg                            (5 files -- hamburger, home, etc.)
      set-1.svg ... set-1-38.svg                       (39 files -- UI elements)
    lucide-selection/         # 34 SVGs -- Lucide-style icons
      _Icons-1.svg ... _Icons-1-33.svg

public/svg/
  aftra-logomark.svg          # 32x32, mark only
  aftra-lockup.svg            # 99x32, mark + wordmark
```

## Icon Specs

All icons are **32x32** SVGs with:
- `stroke="#232230"` (Steel 500)
- `stroke-width="2"`
- `stroke-linecap="round"`, `stroke-linejoin="round"`
- `fill="none"` (outline style)

Two sets:
1. **aftra-selection** -- custom icons built for Aftra (utility, arrows, nav, set-1)
2. **lucide-selection** -- curated subset of Lucide icons

The live site uses **Phosphor Icons** (Iconify, `ph` prefix). These local sets may be product-specific or legacy.

## Design Mockups

### Navigation (`_a-torg/_nav/`)
- **Collapsed header**: 1440x96px -- logo left, nav center, CTA right
- **Expanded megamenu**: 1440x314px -- dropdown adds 218px below the header
- Colors in mockups: `#232230` text, `#F0F0F4` panel backgrounds, `#E2E2E9` borders, `#9C9CA2` secondary text

### Breakpoints (`_a-torg/site-breakpoints/`)

| Breakpoint | Width | File height | Notes |
|---|---|---|---|
| Desktop | 1440px | 7130px | 3-column grids, full nav |
| Tablet | 960px | 5783px | Compressed spacing |
| Mobile | 400px | 6746px | Single column, stacked |

Common layout tokens from mockups:
- Header height: **96px** (consistent across all breakpoints)
- Card border radius: **16px**
- Side padding: **32px** (desktop/tablet)
- Featured card: ~552x376px on desktop
- Standard card: ~488x314-340px
