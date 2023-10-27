# Atividade 01 - Sistemas Distribuídos
Repositório referente a atividade 01 da disciplina Sistemas Distribuídos, que visa a criação de um chat de mensagens que execute no terminal. Para a resolução da atividade foi usado o socket.io e socket.io-client, ambos disponíveis no npm.

## Como executar
Para executar a aplicação siga as instruções abaixo.

Passo 01. Instale as depêndencias necessárias.
```
npm i
```
Passo 02. Execute o servidor(sub.js) em uma janela de terminal.
```
node sub.js
```
Passo 03. Execute o cliente(pub.js) em uma janela de terminal diferente do servidor.
```
node pub.js
```

Em seguida é só digitar a mensagem que quiser na janela do cliente que a mensagem será exibida no servidor. Caso execute outro cliente em outra janela de terminal é possível ver que o cliente tanto envia quanto recebe mensagens.
