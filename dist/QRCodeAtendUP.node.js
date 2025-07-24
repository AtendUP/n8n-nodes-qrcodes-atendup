const QRCode = require("qrcode");
const { QrCodePix } = require("qrcode-pix");
const Jimp = require("jimp");

class QRCodeAtendUP {
  constructor() {
    this.description = {
      displayName: "QR Code AtendUP",
      name: "qrCodeAtendUP",
      icon: "file:qrcodeAtendUP.svg",
      group: ["transform"],
      version: 1,
      description: "Generate customizable QR Codes with AtendUP branding.",
      defaults: {
        name: "QR Code AtendUP",
      },
      inputs: ["main"],
      outputs: ["main"],
      properties: [
        // Propriedades para tipo de QR Code
        {
          displayName: "Tipo de QR Code",
          name: "qrCodeType",
          type: "options",
          options: [
            { name: "Texto/URL", value: "textUrl" },
            { name: "PIX", value: "pix" },
            { name: "WiFi", value: "wifi" },
            { name: "Contato/vCard", value: "vcard" },
            { name: "Email", value: "email" },
            { name: "Telefone/SMS", value: "phoneSms" },
            { name: "WhatsApp", value: "whatsapp" },
          ],
          default: "textUrl",
          description: "Selecione o tipo de QR Code a ser gerado.",
        },

        // Propriedades para Texto/URL
        {
          displayName: "Conteúdo",
          name: "content",
          type: "string",
          default: "",
          displayOptions: {
            show: {
              qrCodeType: ["textUrl"],
            },
          },
          description: "O texto ou URL para o QR Code.",
        },

        // Propriedades para PIX
        {
          displayName: "Chave PIX",
          name: "pixKey",
          type: "string",
          default: "",
          displayOptions: {
            show: {
              qrCodeType: ["pix"],
            },
          },
          description: "A chave PIX (CPF, CNPJ, email, telefone, chave aleatória).",
        },
        {
          displayName: "Nome do Beneficiário",
          name: "pixName",
          type: "string",
          default: "",
          displayOptions: {
            show: {
              qrCodeType: ["pix"],
            },
          },
          description: "Nome do beneficiário do PIX.",
        },
        {
          displayName: "Cidade",
          name: "pixCity",
          type: "string",
          default: "",
          displayOptions: {
            show: {
              qrCodeType: ["pix"],
            },
          },
          description: "Cidade do beneficiário do PIX.",
        },
        {
          displayName: "Valor (opcional)",
          name: "pixValue",
          type: "number",
          default: 0,
          displayOptions: {
            show: {
              qrCodeType: ["pix"],
            },
          },
          description: "O valor do pagamento PIX.",
        },
        {
          displayName: "Descrição (opcional)",
          name: "pixDescription",
          type: "string",
          default: "",
          displayOptions: {
            show: {
              qrCodeType: ["pix"],
            },
          },
          description: "Uma descrição para o pagamento PIX.",
        },

        // Propriedades para WiFi
        {
          displayName: "SSID (Nome da Rede)",
          name: "wifiSSID",
          type: "string",
          default: "",
          displayOptions: {
            show: {
              qrCodeType: ["wifi"],
            },
          },
          description: "Nome da rede WiFi.",
        },
        {
          displayName: "Senha",
          name: "wifiPassword",
          type: "string",
          default: "",
          displayOptions: {
            show: {
              qrCodeType: ["wifi"],
            },
          },
          description: "Senha da rede WiFi.",
        },
        {
          displayName: "Tipo de Segurança",
          name: "wifiSecurity",
          type: "options",
          options: [
            { name: "WPA/WPA2", value: "WPA" },
            { name: "WEP", value: "WEP" },
            { name: "Sem Segurança", value: "nopass" },
          ],
          default: "WPA",
          displayOptions: {
            show: {
              qrCodeType: ["wifi"],
            },
          },
          description: "Tipo de segurança da rede WiFi.",
        },

        // Propriedades para vCard
        {
          displayName: "Nome",
          name: "vcardName",
          type: "string",
          default: "",
          displayOptions: {
            show: {
              qrCodeType: ["vcard"],
            },
          },
          description: "Nome completo para o vCard.",
        },
        {
          displayName: "Telefone",
          name: "vcardPhone",
          type: "string",
          default: "",
          displayOptions: {
            show: {
              qrCodeType: ["vcard"],
            },
          },
          description: "Número de telefone para o vCard.",
        },
        {
          displayName: "Email",
          name: "vcardEmail",
          type: "string",
          default: "",
          displayOptions: {
            show: {
              qrCodeType: ["vcard"],
            },
          },
          description: "Endereço de email para o vCard.",
        },
        {
          displayName: "Empresa",
          name: "vcardCompany",
          type: "string",
          default: "",
          displayOptions: {
            show: {
              qrCodeType: ["vcard"],
            },
          },
          description: "Nome da empresa para o vCard.",
        },

        // Propriedades para Email
        {
          displayName: "Destinatário",
          name: "emailTo",
          type: "string",
          default: "",
          displayOptions: {
            show: {
              qrCodeType: ["email"],
            },
          },
          description: "Endereço de email do destinatário.",
        },
        {
          displayName: "Assunto",
          name: "emailSubject",
          type: "string",
          default: "",
          displayOptions: {
            show: {
              qrCodeType: ["email"],
            },
          },
          description: "Assunto do email.",
        },
        {
          displayName: "Corpo da Mensagem",
          name: "emailBody",
          type: "string",
          default: "",
          displayOptions: {
            show: {
              qrCodeType: ["email"],
            },
          },
          description: "Corpo da mensagem do email.",
        },

        // Propriedades para Telefone/SMS
        {
          displayName: "Número de Telefone",
          name: "phoneNumber",
          type: "string",
          default: "",
          displayOptions: {
            show: {
              qrCodeType: ["phoneSms"],
            },
          },
          description: "Número de telefone.",
        },
        {
          displayName: "Texto SMS (opcional)",
          name: "smsText",
          type: "string",
          default: "",
          displayOptions: {
            show: {
              qrCodeType: ["phoneSms"],
            },
          },
          description: "Texto pré-definido para SMS.",
        },

        // Propriedades para WhatsApp
        {
          displayName: "Número WhatsApp",
          name: "whatsappNumber",
          type: "string",
          default: "",
          displayOptions: {
            show: {
              qrCodeType: ["whatsapp"],
            },
          },
          description: "Número do WhatsApp (com código do país).",
        },
        {
          displayName: "Mensagem Pré-definida",
          name: "whatsappMessage",
          type: "string",
          default: "",
          displayOptions: {
            show: {
              qrCodeType: ["whatsapp"],
            },
          },
          description: "Mensagem pré-definida para WhatsApp.",
        },

        // Propriedades de personalização
        {
          displayName: "Cor do Fundo",
          name: "backgroundColor",
          type: "color",
          default: "#FFFFFF",
          description: "Cor de fundo do QR Code.",
        },
        {
          displayName: "Cor do Primeiro Plano",
          name: "foregroundColor",
          type: "color",
          default: "#000000",
          description: "Cor do primeiro plano (pontos) do QR Code.",
        },
        {
          displayName: "Tamanho (px)",
          name: "size",
          type: "number",
          default: 200,
          typeOptions: {
            minValue: 200,
            maxValue: 1000,
          },
          description: "Tamanho do QR Code em pixels (200x200 a 1000x1000).",
        },
        {
          displayName: "Formato de Saída",
          name: "outputFormat",
          type: "options",
          options: [
            { name: "PNG", value: "png" },
            { name: "JPG", value: "jpg" },
            { name: "SVG", value: "svg" },
          ],
          default: "png",
          description: "Formato do arquivo de saída do QR Code.",
        },
        {
          displayName: "Nível de Correção de Erro",
          name: "errorCorrectionLevel",
          type: "options",
          options: [
            { name: "Baixo (L)", value: "L" },
            { name: "Médio (M)", value: "M" },
            { name: "Quartil (Q)", value: "Q" },
            { name: "Alto (H)", value: "H" },
          ],
          default: "M",
          description: "Nível de correção de erro do QR Code.",
        },
        {
          displayName: "Margem",
          name: "margin",
          type: "number",
          default: 4,
          typeOptions: {
            minValue: 0,
          },
          description: "Margem ao redor do QR Code.",
        },
        {
          displayName: "Upload de Logo Personalizado",
          name: "customLogo",
          type: "string",
          default: "",
          typeOptions: {
            fileUpload: true,
          },
          description: "URL ou base64 do logo para centralizar no QR Code.",
        },

        // Funcionalidades Extras
        {
          displayName: "Batch Generation",
          name: "batchGeneration",
          type: "boolean",
          default: false,
          description: "Gerar múltiplos QR Codes de uma vez.",
        },
        {
          displayName: "Templates Prontos",
          name: "templates",
          type: "options",
          options: [
            { name: "Nenhum", value: "none" },
            { name: "Corporativo", value: "corporate" },
            { name: "Casual", value: "casual" },
            { name: "E-commerce", value: "ecommerce" },
          ],
          default: "none",
          description: "Aplicar um template de estilo pré-definido.",
        },

        // Branding
        {
          displayName: "Mensagem Promocional AtendUP",
          name: "atendupPromotion",
          type: "notice",
          default: "",
          description: "Desenvolvido por AtendUP - atendup.com - Tel: (45) 99969-1163",
        },
      ],
    };
  }

  async execute() {
    const items = this.getInputData();
    const returnData = [];

    for (let i = 0; i < items.length; i++) {
      try {
        const qrCodeType = this.getNodeParameter("qrCodeType", i);
        let backgroundColor = this.getNodeParameter("backgroundColor", i);
        let foregroundColor = this.getNodeParameter("foregroundColor", i);
        const size = this.getNodeParameter("size", i);
        const outputFormat = this.getNodeParameter("outputFormat", i);
        const errorCorrectionLevel = this.getNodeParameter("errorCorrectionLevel", i);
        const margin = this.getNodeParameter("margin", i);
        const customLogo = this.getNodeParameter("customLogo", i);
        const templates = this.getNodeParameter("templates", i);

        // Aplicar templates
        if (templates === "corporate") {
          backgroundColor = "#F0F0F0";
          foregroundColor = "#1A2B4C";
        } else if (templates === "casual") {
          backgroundColor = "#FFFBE6";
          foregroundColor = "#FF6B6B";
        } else if (templates === "ecommerce") {
          backgroundColor = "#E6F7FF";
          foregroundColor = "#0056B3";
        }

        let qrData = "";

        // Gerar dados do QR Code baseado no tipo
        switch (qrCodeType) {
          case "textUrl":
            qrData = this.getNodeParameter("content", i);
            break;

          case "pix":
            const pixKey = this.getNodeParameter("pixKey", i);
            const pixName = this.getNodeParameter("pixName", i);
            const pixCity = this.getNodeParameter("pixCity", i);
            const pixValue = this.getNodeParameter("pixValue", i);
            const pixDescription = this.getNodeParameter("pixDescription", i);

            const qrCodePix = QrCodePix({
              version: "01",
              key: pixKey,
              name: pixName,
              city: pixCity,
              transactionId: "AtendUP" + Date.now(),
              message: pixDescription || "Pagamento via AtendUP",
              cep: "85000000",
              value: pixValue > 0 ? pixValue : undefined,
            });

            qrData = qrCodePix.payload();
            break;

          case "wifi":
            const wifiSSID = this.getNodeParameter("wifiSSID", i);
            const wifiPassword = this.getNodeParameter("wifiPassword", i);
            const wifiSecurity = this.getNodeParameter("wifiSecurity", i);
            
            qrData = `WIFI:T:${wifiSecurity};S:${wifiSSID};P:${wifiPassword};H:false;;`;
            break;

          case "vcard":
            const vcardName = this.getNodeParameter("vcardName", i);
            const vcardPhone = this.getNodeParameter("vcardPhone", i);
            const vcardEmail = this.getNodeParameter("vcardEmail", i);
            const vcardCompany = this.getNodeParameter("vcardCompany", i);

            qrData = `BEGIN:VCARD\nVERSION:3.0\nFN:${vcardName}\nORG:${vcardCompany}\nTEL:${vcardPhone}\nEMAIL:${vcardEmail}\nEND:VCARD`;
            break;

          case "email":
            const emailTo = this.getNodeParameter("emailTo", i);
            const emailSubject = this.getNodeParameter("emailSubject", i);
            const emailBody = this.getNodeParameter("emailBody", i);

            qrData = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
            break;

          case "phoneSms":
            const phoneNumber = this.getNodeParameter("phoneNumber", i);
            const smsText = this.getNodeParameter("smsText", i);

            if (smsText) {
              qrData = `sms:${phoneNumber}?body=${encodeURIComponent(smsText)}`;
            } else {
              qrData = `tel:${phoneNumber}`;
            }
            break;

          case "whatsapp":
            const whatsappNumber = this.getNodeParameter("whatsappNumber", i);
            const whatsappMessage = this.getNodeParameter("whatsappMessage", i);

            qrData = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            break;

          default:
            throw new Error(`Tipo de QR Code não suportado: ${qrCodeType}`);
        }

        // Opções para geração do QR Code
        const qrOptions = {
          errorCorrectionLevel: errorCorrectionLevel,
          type: outputFormat === "svg" ? "svg" : "png",
          quality: 0.92,
          margin: margin,
          color: {
            dark: foregroundColor,
            light: backgroundColor,
          },
          width: size,
        };

        let qrCodeData;

        if (outputFormat === "svg") {
          qrCodeData = await QRCode.toString(qrData, { ...qrOptions, type: "svg" });
        } else {
          qrCodeData = await QRCode.toDataURL(qrData, qrOptions);
        }

        // Adicionar logo personalizado
        if (customLogo && outputFormat !== "svg") {
          const qrImage = await Jimp.read(Buffer.from(qrCodeData.split(",")[1], "base64"));
          const logoImage = await Jimp.read(customLogo);

          const logoSize = size * 0.2; // 20% do tamanho do QR Code
          logoImage.resize(logoSize, logoSize);

          const x = (qrImage.bitmap.width - logoImage.bitmap.width) / 2;
          const y = (qrImage.bitmap.height - logoImage.bitmap.height) / 2;

          qrImage.composite(logoImage, x, y);

          qrCodeData = await qrImage.getBase64Async(Jimp.MIME_PNG);
        }

        // Adicionar branding AtendUP nos metadados
        const result = {
          json: {
            qrCodeType,
            qrData,
            qrCodeImage: qrCodeData,
            format: outputFormat,
            size,
            generatedBy: "AtendUP - atendup.com - Tel: (45) 99969-1163",
            timestamp: new Date().toISOString(),
          },
        };

        returnData.push(result);

      } catch (error) {
        throw new Error(`Erro ao gerar QR Code: ${error.message}`);
      }
    }

    return [returnData];
  }
}

module.exports = { QRCodeAtendUP };

