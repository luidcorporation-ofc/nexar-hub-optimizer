# Segurança

Baixe o NEXAR HUB OPTIMIZER somente pela página oficial de Releases deste repositório.

Antes de executar, calcule o SHA-256 do arquivo no PowerShell:

```powershell
Get-FileHash .\NEXAR_Hub_Optimizer_v1.0_Beta_Setup.exe -Algorithm SHA256
```

Compare o resultado com `CHECKSUMS_SHA256.txt`.

Esta versão beta não possui certificado comercial de assinatura digital, portanto o Microsoft Defender SmartScreen pode exibir um aviso. Não prossiga se o arquivo tiver vindo de outro endereço ou se o hash não corresponder.

O aplicativo não desativa o Microsoft Defender, Windows Update, serviços críticos ou mitigações de segurança do Windows.
