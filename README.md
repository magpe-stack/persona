# Persona
O **Persona** é um aplicativo para ajudar escritores a criar personagens mais completos, interessantes e humanos.

Ele funciona como um caderno de criação. Em vez de deixar o autor olhando para uma página em branco, o aplicativo apresenta perguntas importantes sobre cada personagem.

Você pode usar o Persona para criar personagens principais, vilões, coadjuvantes, narradores, figuras históricas, personagens de romances, contos, peças, roteiros e histórias em quadrinhos.

---

## O que é um PWA?

PWA significa **Progressive Web App**, ou **Aplicativo Web Progressivo**.

Em palavras simples, um PWA é um site que pode se comportar quase como um aplicativo instalado no celular ou no computador.

Com o Persona, isso significa que você pode:

- Abrir o aplicativo pelo navegador.

- Adicionar o Persona à tela inicial do celular.

- Usar o aplicativo em uma janela própria, sem a aparência comum do navegador.

- Continuar trabalhando mesmo quando estiver sem internet, depois que o aplicativo já tiver sido aberto e carregado.

- Salvar as fichas no próprio dispositivo.

O Persona não precisa de uma conta, senha ou servidor para funcionar. Isso também significa que os personagens ficam salvos no navegador e no dispositivo em que foram criados.

> **Atenção:** como os dados ficam salvos localmente, limpe o armazenamento do navegador somente se tiver certeza de que não precisa mais das fichas. Também é importante exportar cópias dos personagens para guardar ou transferir para outro dispositivo.

---

## O que vem no projeto?

O projeto possui três arquivos principais:

| Arquivo | Para que serve |
| --- | --- |
| `index.html` | Contém a tela, os campos, os estilos e o funcionamento do aplicativo. |
| `manifest.json` | Informa ao celular e ao navegador que o site pode ser instalado como aplicativo. |
| `sw.js` | É o service worker. Ele ajuda o aplicativo a funcionar offline e guarda os arquivos principais em cache. |

Também existe o arquivo `manus-routes.json`, usado pelo ambiente Web Dev da Manus. Ele não é necessário para o funcionamento básico no GitHub Pages, mas pode ser mantido no repositório.

---

## Como o escritor instala e usa o Persona

O Persona já estará pronto quando o escritor receber o link. Para começar, ele só precisa abrir o endereço enviado por você em um navegador compatível.

O escritor não precisa:

- Ter uma conta no GitHub.

- Entrar no GitHub.

- Saber programar.

- Baixar `index.html`, `manifest.json` ou `sw.js`.

- Fazer qualquer configuração técnica.

Ele pode usar o Persona diretamente no navegador. Se quiser, também pode adicioná-lo à tela inicial e abrir como um aplicativo.

### Android

### Android

1. Abra o endereço do Persona no Chrome.

1. Espere a página carregar completamente.

1. Toque nos três pontinhos do navegador.

1. Escolha **Adicionar à tela inicial** ou **Instalar aplicativo**.

1. Confirme.

O ícone do Persona aparecerá na tela inicial do celular.

### iPhone ou iPad

1. Abra o endereço do Persona no Safari.

1. Toque no botão de compartilhar.

1. Escolha **Adicionar à Tela de Início**.

1. Confirme o nome Persona.

1. Toque em **Adicionar**.

No iPhone, a instalação precisa ser feita pelo Safari.

### Computador

Em navegadores compatíveis, como Chrome ou Edge:

1. Abra o endereço do Persona.

1. Procure o ícone de instalação na barra de endereço.

1. Clique em **Instalar Persona**.

1. Confirme.

O aplicativo poderá abrir em uma janela própria.

---

## Como usar o Persona

### 1. Comece com uma ficha nova

Ao abrir o Persona, você verá uma ficha de personagem.

Comece pelo nome. Se ainda não souber o nome definitivo, escreva um nome provisório. O importante é começar.

O aplicativo apresenta oito etapas:

1. **Identidade e papel narrativo**

1. **Aparência e presença**

1. **Passado e feridas**

1. **Desejo, necessidade e medo**

1. **Valores, contradições e voz**

1. **Conflitos e relações**

1. **Arco de transformação**

1. **Cenas, hábitos e detalhes memoráveis**

### 2. Leia o bloco de teoria

Cada campo possui uma área chamada **Por que isso importa**.

Clique nessa área para ler uma explicação sobre o campo.

A explicação mostra:

- O que você deve observar.

- Que tipo de resposta pode escrever.

- Como aquela informação ajuda a personagem.

- Como transformar uma ideia vaga em algo concreto.

Você não precisa preencher tudo de uma vez. Pode escrever uma primeira versão e voltar depois para melhorar.

### 3. Escreva respostas concretas

Evite responder somente com palavras soltas, como:

```
Triste.
Inteligente.
Corajosa.
```

Tente mostrar essas características por meio de situações:

```
Ela é inteligente, mas usa o conhecimento para evitar conversas sobre seus sentimentos.
```

Uma resposta concreta ajuda você a imaginar a personagem em uma cena.

### 4. Passe para a próxima etapa

Use o botão **Próxima etapa** para avançar.

Você também pode clicar diretamente nas etapas que aparecem acima da ficha.

O indicador de progresso mostra quantos campos já foram preenchidos.

### 5. Salve a ficha

O Persona salva as respostas automaticamente no navegador.

Você também pode clicar no botão **Salvar ficha** para salvar de forma explícita.

A mensagem de salvamento mostra quando a ficha foi guardada.

---

## Como criar vários personagens

Na área **Minha biblioteca**, você verá os personagens criados.

### Criar um personagem

Clique no botão `+` ao lado de **Personagens**.

Uma nova ficha será aberta.

### Trocar de personagem

Clique no nome de qualquer personagem na biblioteca.

A ficha correspondente será aberta.

### Procurar um personagem

Use o campo **Buscar personagem** para localizar uma ficha pelo nome.

### Duplicar um personagem

Clique em **Duplicar** quando quiser criar uma nova ficha aproveitando ideias de outra.

Isso é útil para:

- Criar versões alternativas da mesma personagem.

- Testar uma mudança no passado.

- Criar um irmão ou irmã com características parecidas.

- Comparar dois caminhos possíveis para o arco narrativo.

A cópia recebe o nome com a indicação `— cópia`. Você pode alterar o nome depois.

### Excluir um personagem

Clique em **Excluir** para remover a ficha atual.

Antes de apagar um personagem importante, exporte uma cópia em `.doc`.

---

## Como exportar um personagem

1. Abra a ficha do personagem desejado.

1. Clique em **Exportar .doc**.

1. O navegador fará o download do arquivo.

1. Abra o arquivo no Microsoft Word, LibreOffice Writer, Google Docs ou outro editor compatível.

O documento exportado inclui:

- Nome do personagem.

- Projeto literário.

- Nome do autor ou autora.

- Data da última atualização.

- Todas as etapas da ficha.

- Todas as respostas escritas.

- A teoria de cada campo.

O formato `.doc` é usado para facilitar a abertura em programas de texto. Dependendo do editor utilizado, talvez seja possível salvar o documento novamente como `.docx`.

> **Importante:** o Persona exporta um arquivo `.doc` compatível. Ele não gera diretamente um arquivo nativo `.docx` dentro do navegador.

---

## Como proteger seu trabalho

O Persona foi criado para salvar os dados no navegador. Por isso, siga estas recomendações:

- Exporte personagens importantes regularmente.

- Guarde os arquivos `.doc` em uma pasta segura.

- Faça cópias em um pendrive, serviço de nuvem ou disco externo.

- Evite usar o modo anônimo ou privado do navegador para escrever.

- Não apague os dados do site sem fazer uma cópia antes.

- Se trocar de celular ou computador, leve os arquivos exportados.

O Persona não sincroniza automaticamente os personagens entre aparelhos.

---

## Como criar uma personagem de qualidade

Uma personagem forte não precisa ser perfeita. Ela precisa parecer capaz de escolher, errar, esconder coisas, desejar algo e mudar — ou se recusar a mudar.

Ao responder os campos, tente construir uma cadeia de causa e efeito:

```
O que aconteceu com ela?
↓
O que ela passou a acreditar?
↓
O que ela deseja agora?
↓
O que ela teme perder?
↓
Que escolhas esse medo provoca?
↓
O que ela terá de aprender ou enfrentar?
```

### O método Snowflake

O Persona usa ideias do **método Snowflake**, criado pelo escritor Randy Ingermanson.

A ideia é começar com uma informação pequena e ir aumentando o nível de detalhe pouco a pouco, como um floco de neve que começa com uma forma simples e ganha novas ramificações.

No aplicativo, você começa pelo núcleo da personagem e depois amplia:

- Nome e papel.

- Aparência e presença.

- Passado.

- Desejos e medos.

- Voz e contradições.

- Relações.

- Transformação.

- Hábitos e cenas.

Você não precisa saber tudo no primeiro dia. Uma boa ficha pode crescer junto com a história.

### Desejo e necessidade

O **desejo** é aquilo que a personagem quer alcançar de forma consciente.

A **necessidade** é aquilo que ela precisa compreender ou mudar para se tornar uma pessoa mais inteira — ou para revelar sua queda.

Por exemplo:

- Desejo: recuperar o cargo perdido.

- Necessidade: reconhecer que seu orgulho destruiu os relacionamentos.

O conflito aparece quando conseguir o desejo exige enfrentar a necessidade.

### Medo e conflito

O medo mostra o que a personagem tenta evitar.

O conflito coloca esse medo diante dela.

Uma personagem que teme ser abandonada pode evitar relacionamentos. Mas a história pode colocá-la em uma situação em que precisa confiar em alguém para alcançar seu objetivo.

É nesse momento que a personalidade aparece por meio de escolhas.

---

## Dicas de escrita para aproveitar melhor o aplicativo

### Não tente ser perfeito na primeira resposta

Escreva uma resposta provisória. Depois, volte e melhore.

Às vezes, você descobre quem é a personagem somente depois de colocá-la em uma cena.

### Procure contradições

Uma personagem pode ser corajosa no trabalho e covarde no amor. Pode defender a honestidade e esconder um segredo. Pode querer liberdade e sentir medo de ficar sozinha.

As contradições criam profundidade.

### Prefira detalhes observáveis

Em vez de escrever “ele é nervoso”, escreva:

```
Ele alinha os objetos da mesa sempre que alguém faz uma pergunta difícil.
```

O leitor entende o sentimento por meio da ação.

### Dê um desejo específico

“Quer ser feliz” é amplo demais para orientar uma história.

“Quer recuperar a carta que pode destruir sua família antes que ela seja publicada” é um desejo mais específico e dramático.

### Não confunda sofrimento com profundidade

Uma personagem não precisa ter todos os traumas possíveis. Ela precisa ter experiências que influenciem suas escolhas.

Também dê a ela humor, prazer, curiosidade, talento, amizade e momentos de descanso.

### Teste a personagem em uma cena

Se você não souber se a ficha está funcionando, escreva uma cena curta:

- Coloque a personagem em uma sala.

- Dê a ela um objetivo.

- Coloque um obstáculo.

- Faça outra pessoa pressioná-la.

- Observe o que ela faz quando não pode simplesmente explicar seus sentimentos.

---

## O aplicativo funciona sem internet?

Sim, depois que o aplicativo for carregado e o service worker tiver sido instalado.

O arquivo `sw.js` guarda os arquivos principais do Persona no cache do navegador. Assim, o aplicativo pode continuar abrindo mesmo quando a conexão cair.

O salvamento das fichas também é local e não depende da internet.

Se você publicar uma atualização no GitHub, talvez o navegador precise ser fechado e aberto novamente para buscar a nova versão.

---

## O Persona envia meus personagens para algum lugar?

Não.

Nesta versão, o Persona não possui servidor nem banco de dados. As fichas são guardadas no armazenamento local do navegador.

Isso dá mais privacidade, mas também cria uma responsabilidade: faça cópias exportadas dos seus trabalhos.

---

## Solução de problemas

### O botão de instalação não aparece

Nem todo navegador mostra o botão de instalação imediatamente.

Verifique se:

- O site está sendo acessado por HTTPS.

- Os arquivos `manifest.json` e `sw.js` estão na mesma pasta do `index.html`.

- O navegador é compatível com PWAs.

- Você já abriu o site pelo menos uma vez.

No GitHub Pages, o endereço normalmente começa com `https://`, o que atende a uma das exigências do PWA.

### O aplicativo não funciona offline

Abra o Persona com internet, aguarde a página carregar e atualize uma vez. Depois, tente abrir novamente sem conexão.

Também confirme se o arquivo se chama exatamente:

```
sw.js
```

### As fichas desapareceram

Isso pode acontecer se os dados do site forem apagados, se o navegador for reinstalado ou se você estiver usando outro dispositivo.

Por isso, mantenha as exportações `.doc` como cópias de segurança.

### O arquivo exportado não abre

Tente abrir o arquivo com:

- Microsoft Word.

- LibreOffice Writer.

- Google Docs, fazendo upload do arquivo.

- Outro editor que aceite documentos HTML ou `.doc`.

Se necessário, abra o documento e salve uma nova cópia como `.docx`.

---

## Licença e personalização

Você pode adaptar o Persona para o seu projeto, sua oficina de escrita ou sua comunidade de autores.

Também pode:

- Alterar as perguntas.

- Criar novas etapas.

- Mudar as cores.

- Trocar o nome do aplicativo.

- Adicionar novos formatos de exportação.

- Criar versões específicas para roteiros, jogos ou histórias infantis.

Antes de modificar os arquivos, faça uma cópia de segurança da versão que está funcionando.

---

## Uma mensagem para quem escreve

Uma personagem não nasce pronta.

Ela começa como uma pergunta, uma imagem, uma voz, uma lembrança ou uma contradição. Depois, ganha desejos, medos, relações e escolhas.

Não use o Persona para aprisionar sua personagem em uma ficha. Use-o para descobrir o que ainda não foi dito.

A ficha é um mapa. A história continua sendo uma viagem.

---

## Referências dos métodos usados

O Persona foi orientado por ideias do **Snowflake Method**, de Randy Ingermanson, que propõe começar com um núcleo simples e expandir a história em camadas, e por princípios de desenvolvimento de arco de personagem baseados em desejo, necessidade, medo, ferida, falsa crença, conflito e transformação.

Esses métodos são ferramentas, não regras. Cada escritor pode adaptar o processo ao próprio estilo.
