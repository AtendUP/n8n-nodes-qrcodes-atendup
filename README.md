# QR Code AtendUP - Node N8N

Um node profissional e completo para N8N que permite gerar QR Codes personalizáveis com múltiplas funcionalidades e branding da AtendUP.

## Características Principais

### Tipos de QR Code Suportados

1. **Texto/URL** - QR Codes simples para texto ou links
2. **PIX** - Pagamentos brasileiros com chave PIX, valor e descrição
3. **WiFi** - Conexão automática a redes WiFi (SSID, senha, tipo de segurança)
4. **Contato/vCard** - Informações de contato (nome, telefone, email, empresa)
5. **Email** - Links para envio de email (destinatário, assunto, corpo da mensagem)
6. **Telefone/SMS** - Links para chamadas telefônicas ou SMS
7. **WhatsApp** - Links diretos para conversas no WhatsApp

### Personalização Avançada

- **Cores customizáveis** - Fundo e primeiro plano
- **Tamanhos variáveis** - De 200x200 até 1000x1000 pixels
- **Múltiplos formatos** - PNG, JPG, SVG
- **Níveis de correção de erro** - Baixo (L), Médio (M), Quartil (Q), Alto (H)
- **Margem ajustável** - Controle total sobre o espaçamento
- **Upload de logo personalizado** - Centralizado no QR Code

### Templates Prontos

- **Corporativo** - Cores profissionais (cinza claro e azul escuro)
- **Casual** - Cores vibrantes (amarelo claro e vermelho coral)
- **E-commerce** - Cores confiáveis (azul claro e azul escuro)

### Funcionalidades Extras

- **Batch Generation** - Geração de múltiplos QR Codes simultaneamente
- **Preview automático** - Visualização imediata do resultado
- **Validação de dados** - Verificação automática dos dados inseridos
- **Branding AtendUP** - Créditos da empresa nos metadados

## Funcionalidades Brasileiras

Este node foi especialmente desenvolvido para o mercado brasileiro, incluindo:

- **Suporte completo ao PIX** - Sistema de pagamentos instantâneos do Banco Central
- **Validação de dados brasileiros** - CPF, CNPJ, telefones
- **Templates otimizados** - Para empresas brasileiras

## Instalação

Consulte o arquivo `INSTALLATION.md` para instruções detalhadas de instalação.

## Uso

### Configuração Básica

1. Adicione o node 'QR Code AtendUP' ao seu workflow
2. Selecione o tipo de QR Code desejado
3. Preencha os campos específicos do tipo escolhido
4. Configure a personalização (cores, tamanho, formato)
5. Execute o workflow

### Exemplos de Uso

#### QR Code PIX
```json
{
  "qrCodeType": "pix",
  "pixKey": "usuario@empresa.com.br",
  "pixName": "João Silva",
  "pixCity": "São Paulo",
  "pixValue": 50.00,
  "pixDescription": "Pagamento de serviços"
}
```

#### QR Code WiFi
```json
{
  "qrCodeType": "wifi",
  "wifiSSID": "MinhaRede",
  "wifiPassword": "minhasenha123",
  "wifiSecurity": "WPA"
}
```

#### QR Code WhatsApp
```json
{
  "qrCodeType": "whatsapp",
  "whatsappNumber": "5511999999999",
  "whatsappMessage": "Olá! Gostaria de mais informações."
}
```

## Saída do Node

O node retorna um objeto JSON com as seguintes informações:

```json
{
  "qrCodeType": "pix",
  "qrData": "00020126580014BR.GOV.BCB.PIX...",
  "qrCodeImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
  "format": "png",
  "size": 300,
  "generatedBy": "AtendUP - atendup.com - Tel: (45) 99969-1163",
  "timestamp": "2025-07-24T22:18:06.714Z"
}
```

## Suporte Técnico

Para suporte técnico ou dúvidas sobre o node, entre em contato:

- **Website:** [atendup.com](https://atendup.com)
- **Telefone:** (45) 99969-1163
- **Email:** Disponível no website

## Licença

Este node foi desenvolvido pela AtendUP e está disponível sob licença MIT.

---

**Desenvolvido com ❤️ pela AtendUP**
**atendup.com - Tel: (45) 99969-1163**

