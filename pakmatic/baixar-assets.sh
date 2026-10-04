#!/usr/bin/env sh
# Baixa os assets do design do Figma (PAKMATIC, node 6060:9) para ./assets.
# As URLs da API do Figma expiram em ~7 dias (gerado em 2026-10-04); depois disso,
# exporte os mesmos layers pelo Figma (Dev Mode) com os nomes abaixo.
set -e
cd "$(dirname "$0")"
mkdir -p assets
BASE="https://www.figma.com/api/mcp/asset/09431313-e16d-4b63-b445-70e72b5de100"

baixar() { curl -fsSL -o "assets/$2" "$BASE/$1" && echo "ok  $2"; }

baixar 04be1.png fundo-hero.png              # 6001:2393 foto do galpão
baixar 5e729.png gradiente-superior.png      # 6001:2403
baixar 4cb81.png gradiente-inferior.png      # 6001:2398
baixar 3ab2a.svg mascara-hero.svg            # máscara do fundo
baixar c419e.svg faixa.svg                   # 6001:2407
baixar 4ec9e.svg logo-pakmatic.svg           # 6060:2
baixar 78db3.svg botao-assistencia.svg       # 6001:2486
baixar ef355.svg icone-whatsapp-contorno.svg # 6001:2488
baixar 9794c.svg icone-whatsapp-fone.svg     # 6001:2489
baixar 3b9d0.svg botao-trabalhe.svg          # 6001:2490
baixar 9f64c.svg icone-usuario-circulo.svg   # 6001:2492
baixar 3ec46.svg icone-usuario.svg           # 6001:2493
baixar 918dd.svg idioma-ativo.svg            # 6001:2494
baixar 8b8d3.svg botao-veja.svg              # 6001:2408
