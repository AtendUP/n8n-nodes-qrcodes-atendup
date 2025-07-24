# Instalação do Node 'QR Code AtendUP' para N8N

Este documento descreve como instalar e configurar o node 'QR Code AtendUP' no seu ambiente N8N.

## Pré-requisitos

Certifique-se de que você tem o N8N instalado e funcionando. Este node foi desenvolvido e testado com as seguintes dependências:

- Node.js (versão 16 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Passos de Instalação

1.  **Navegue até o diretório de nodes customizados do N8N:**

    Normalmente, este diretório está localizado em `~/.n8n/nodes/` ou `C:\Users\<SeuUsuario>\.n8n\nodes\` no Windows. Se o diretório `nodes` não existir, você precisará criá-lo.

    ```bash
    cd ~/.n8n/nodes/
    # Ou no Windows:
    # cd %USERPROFILE%\.n8n\nodes\
    ```

2.  **Crie um novo diretório para o node 'QR Code AtendUP':**

    ```bash
    mkdir qr-code-atendup
    cd qr-code-atendup
    ```

3.  **Copie os arquivos do node:**

    Copie os seguintes arquivos para o diretório `qr-code-atendup` que você acabou de criar:

    -   `QR Code AtendUP.node.js` (o arquivo principal do node)
    -   `package.json` (o arquivo de configuração das dependências)
    -   `qrcodeAtendUP.png` (o ícone do node)

    Você pode usar o comando `cp` (Linux/macOS) ou `copy` (Windows) para isso.

    ```bash
    # Exemplo (ajuste os caminhos conforme necessário):
    cp /caminho/para/seus/arquivos/QR\ Code\ AtendUP.node.js .
    cp /caminho/para/seus/arquivos/package.json .
    cp /caminho/para/seus/arquivos/qrcodeAtendUP.png .
    ```

4.  **Instale as dependências do node:**

    Dentro do diretório `qr-code-atendup`, instale as dependências listadas no `package.json`.

    ```bash
    npm install
    ```

    Isso criará a pasta `node_modules` com todas as bibliotecas necessárias.

5.  **Reinicie o N8N:**

    Para que o N8N reconheça o novo node, você precisará reiniciá-lo. A forma de reiniciar depende de como você o instalou (Docker, npm, etc.).

    -   **Se você usa Docker:** Reinicie o contêiner do N8N.
    -   **Se você usa npm/global:** Pare o processo do N8N e inicie-o novamente.

## Verificação

Após o reinício, o node 'QR Code AtendUP' deve estar disponível na lista de nodes do seu ambiente N8N, na categoria 'Transform'. Procure por 'QR Code AtendUP' ao adicionar um novo node em seu workflow.

## Solução de Problemas

-   **Node não aparece:** Verifique se os arquivos foram copiados para o diretório correto e se o N8N foi reiniciado.
-   **Erros de dependência:** Certifique-se de que `npm install` foi executado com sucesso e que não há erros de permissão.
-   **Problemas de ícone:** Verifique se o arquivo `qrcodeAtendUP.png` está no mesmo diretório do arquivo `.node.js` e se o nome no `icon` da descrição do node está correto (`file:qrcodeAtendUP.svg` no `.node.js` deve ser `file:qrcodeAtendUP.png` se o arquivo for PNG).

---

**Desenvolvido por AtendUP - atendup.com - Tel: (45) 99969-1163**


