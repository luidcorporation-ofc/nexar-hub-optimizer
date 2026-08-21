# Segurança

Baixe o NEXAR HUB OPTIMIZER somente pela página oficial de Releases deste repositório.

Antes de executar, calcule o SHA-256 do arquivo no PowerShell:

```powershell
Get-FileHash .\NEXAR_Hub_Optimizer_v2.2_STABLE_Setup_x64.exe -Algorithm SHA256
```

Compare o resultado com o arquivo `SHA256SUMS.txt` anexado à Release v2.2.0.

A versão Stable ainda não possui certificado comercial de assinatura digital, portanto o Microsoft Defender SmartScreen pode exibir um aviso. Não prossiga se o arquivo tiver vindo de outro endereço ou se o hash não corresponder.

## NEXAR Sentinel Core

O Sentinel é uma camada complementar em modo de usuário:

- usa SHA-256 local, Authenticode, AMSI e heurísticas transparentes;
- monitora pastas de risco sem enviar arquivos para a nuvem;
- mantém quarentena reversível;
- não exclui automaticamente com base apenas em heurística;
- não instala driver de kernel e não substitui uma solução antivírus independente.

A capacidade de detecção AMSI depende do provedor antimalware instalado no Windows.

O aplicativo não desativa o Microsoft Defender, Windows Update, serviços críticos ou mitigações de segurança do Windows.
