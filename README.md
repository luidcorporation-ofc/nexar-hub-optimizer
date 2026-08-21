# NEXAR HUB OPTIMIZER

Site oficial e central de downloads do **NEXAR HUB OPTIMIZER 2.2 Stable**.

O NEXAR é um aplicativo nativo para Windows 10/11 que reúne CPU Guard adaptativo, Stream Shield, GPU Guard Stable, RAM Cleaner/Guard, NEXAR HDD Engine, Discord Lite e o novo **NEXAR Sentinel Core 1.0**.

## Versão atual

A versão oficial atual é a **2.2 Stable**:

- Sentinel Core com SHA-256 local, Authenticode, integração AMSI e heurísticas transparentes
- Monitoramento em tempo real de pastas de risco e quarentena reversível
- CPU Guard 2.2 com tendência de carga, prevenção progressiva e recuperação
- Stream Shield para OBS Studio e Streamlabs
- GPU Guard Stable com inventário DXGI e preferência gráfica reversível por jogo
- RAM Guard, RAM Cleaner, HDD Engine, Discord Stable/PTB e navegadores
- Instalador e portátil nativos para x64 e x86

## Downloads

Use somente os arquivos publicados em [Releases](https://github.com/luidcorporation-ofc/nexar-hub-optimizer/releases) e compare o SHA-256 com `SHA256SUMS.txt` antes de executar.

- **x64:** recomendado para Windows 10/11 de 64 bits
- **x86:** para Windows 10 de 32 bits ou necessidade específica de compatibilidade
- Instalador com desinstalador próprio e versão portátil para cada arquitetura
- Pacotes públicos sem código-fonte ou `Source.zip`

## Sentinel Core: limites transparentes

O Sentinel é uma camada de segurança complementar. Ele trabalha em modo de usuário, não instala driver de kernel, não envia arquivos para a nuvem e não substitui uma solução antivírus independente.

A detecção AMSI depende do provedor antimalware disponível no Windows. Uma heurística isolada gera alerta, mas não autoriza quarentena automática nem exclusão. Itens confirmados podem ser isolados em quarentena reversível.

## Histórico

A [2.2 Beta](https://github.com/luidcorporation-ofc/nexar-hub-optimizer/releases/tag/v2.2.0-beta.1) permanece arquivada para testes e foi substituída pela 2.2 Stable. As versões anteriores continuam listadas no site oficial.

## Outros limites

O aplicativo não cria processadores virtuais, não transforma HDD em SSD, não inventa memória RAM, não garante que a CPU nunca chegue a 100% e não promete consumo fixo para Discord ou navegadores. Os resultados dependem do computador e da carga atual.

## Site

Este repositório publica uma página estática por GitHub Pages. Não há rastreamento, cookies analíticos ou coleta de telemetria no site.

O código-fonte do aplicativo é propriedade privada da LuidCorporation. As Releases públicas contêm somente binários compilados, documentação e hashes.

## Créditos

Projeto original: **FIVENVB**  
Produto e publicação: **FIVENVB & LuidCorporation**

Ao divulgar ou redistribuir, preserve os créditos e os avisos de segurança presentes na documentação.
