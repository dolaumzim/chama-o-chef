# Chama o Chef - Amigos da Cecília

O presente projeto consiste no desenvolvimento de uma aplicação de delivery de comida. O objetivo é desenvolver toda a parte do FrontEnd da aplicação, incluindo design, funcionalidades e funcionamento geral da aplicação.

Todo o processo foi desenvolvido utilizando *ReactJS*. Algumas bibliotecas foram utilizadas durante o desenvolvimento e serão expostas ao longo da documentação.



## Começando

Para rodar o projeto é necessario clonar o repositório para seu computador e fazer as instalações mencionadas a seguir para rodá-lo em browser. Todos os browser são suportados, porém é possível que ocorram leves diferenças de visualização dependendo do software e da versão do software utilizados.


### Instalação

Inicie clonando o repositório para sua máquina, utilize o método de clone que preferir:

    https://git.raroacademy.com.br/armando.assini/projeto-final-grupo-6
    
Em seguida abra o repositório e utilize o seguinte comando para instalar as dependências do projeto:

    npm install

Como mencionado anteriormente, foram utilizadas algumas bibliotecas neste projeto, portanto pode ser que a instalação demore alguns minutos.

A partir destas instalações o projeto já estará funcional. Rodando o comando seguinte, um servidor irá abrir onde a aplicação estará rodando:

    npm run dev

No terminal será mostrado um link de onde pode ser visualizada a aplicação:

![http://localhost:5173](assets/LinkLocal.png)

Finalmente, é necessário que o usuário copie o arquivo *.env.example* para um arquivo *.env* e realize as seguintes alterações:

- Para o *"VITE_KEY_API_MAP"* é necessário que o usuário acrescente sua própria chave da Api do google maps, como essa é uma chave única e individual, a chave utilizada para o desenvolvimento da aplicação não será enviada;
- Para o *"VITE_SECURE_LOCAL_STORAGE_HASH_KEY"* e *"VITE_SECURE_LOCAL_STORAGE_PREFIX"* são utilizadas chaves de criptografia para utilização de dados sensíveis no localStorage. Neste caso qualquer chave pode ser utilizada, e quando mais complexa a chave, maior a segurança do sistema.

    .env.example => .env( inserir chaves )

## Visão Geral do Projeto

Iniciamos o projeto decidindo sobre a identidade da aplicação, decidimos primeiro pelo nome:

#### *Chama o Chef*

Escolhemos um nome para ficar gravado na memória dos clientes, com uma aliteração, que julgamos divertido e ainda assim, passe a ideia principal da aplicação: um delivery de comidas.

<div style="display:flex; justify-content:center; padding:20px"> <img style="width:200px" src="assets/LogoBranca.svg"/> </div>

Após decidirmos o nome desenvolvemos uma logomarca, visando os mesmo objetivos, principalmente fixar no cliente a ideia de um aplicativo de chefs, com comidas especiais.

Finalmente passamos as cores utilizadas. A cor principal é o *Laranja*, que na teoria das cores é dada como cor que instiga a fome. Junto a ela foi utilizada uma régua de cores mais neutras, visando um ar simples e com foco nos pratos dos chefs.

Com a identidade criada foi iniciado o design das telas utilizando o *Figma*, que pode ser acessado através do link a seguir:

- [Figma Chama o Chef](https://www.figma.com/file/2ZjeJMllnfV2AHfj09pU1x/Chama-o-Chef-Web-Kit?node-id=84%3A96&mode=dev)

Após decidir sobre a identidade da aplicação foi dado início a etapa da codificação, para tal, nos foi fornecida uma API onde estão guardadas as informações dos Chefs, e de onde foram feitas todas as requisições necessárias durante o desenvolvimento. 

### Telas desenvolvidas

Como resultados do projeto temos:

![Home](assets/home.png)
<div style="display:flex; justify-content:center; margin-bottom:20px"><em>Página Home</em></div>

![DishDetails](assets/dishDetails.png)
<div style="display:flex; justify-content:center; margin-bottom:20px"><em>Página de Detalhes do Produto </em></div>

![Cart](assets/cart.png)
<div style="display:flex; justify-content:center; margin-bottom:20px"><em>Página de Produtos com carrinho </em></div>

Estas e outras telas podem ser acessadas dentro da aplicação.

## Construção do Projeto

### Objetivo

O objetivo do trabalho é utilizar todos os conhecimentos desenvolvidos durante o curso para criar uma aplicação, totalmente funcional, de delivery de comidas.

### Desenvolvimento

Como mencionado anteriormente, após decidir pela identidade visual do projeto, foi iniciada a codificação, e para tal tarefas foram distribuídas entre os membros da equipe. A seguir será feita uma breve descrição do desenvolvimento das etapas.

Antes de detalhar o desenvolvimento dos códigos é importante denotar que toda a estilização foi realizada com *Styled Components* portanto no código existem vários componentes criados e nomeados de acordo com sua utilização. Infelizmente não foi possível utilizar de métodos como padronização de variáveis de no *Styled Components* pois se trata-se de um método que não tínhamos conhecimento, e devido ao tempo reduzido para se completar o projeto, desenvolvemos todos os estilos com métodos mais comuns.

#### Áreas Públicas

Foram desenvolvidas telas de acesso comum ao usuário que não possui cadastro, são elas:

- Login;
- Cadastro;
- Esqueci a senha;
- Recuperação de senha.

Utilizando as bibliotecas *Formik* e *yup* foram feitos formulários para cada uma destas páginas, cada um realizando as requisições necessárias e redirecionando o usuário para o passo seguinte.

#### Roteamento

Antes de adentrar nas áreas privadas, é importante abordar o roteamento utilizado.

Utilizamos o *react-router-dom* para tratar as rotas na aplicação, separando as áreas públicas das privadas utilizando o token de acesso que é fornecido mediante login. Esse token é armazenado em localstorage e possui tempo de expiração de 60 minutos.

Foi desenvolvida uma lógica que impede o acesso do usuário deslogado às áreas privadas, e também uma lógica que renova o token de acesso do usuário se o mesmo ainda está ativo nos 5 minutos anteriores ao vencimento do token.

Além disso também existe o redirecionamento do usuário para a página de *Login* em caso de expiração de acesso, e redirecionamento para a *Home* em caso de login realizado com sucesso.

### Áreas Privadas

As páginas privadas são:

- Home, a página inicial;
- Detalhe de pratos;
- Todos os pratos;
- Edição do usuário;

Detalharemos cada uma delas:

#### Home

Na página inicial são apresentadas algumas opções ao usuário:

- Pratos próximos ao usuário;
- Sugestões de alguns pratos;
- Pratos favoritos do usuário;
- Mapa com a localização dos Chefs próximos ao usuário.

Os pratos próximos e os favoritos são apresentados em formato de carrossel, e foram desenvolvidos utilizando a biblitoteca *slick*, é possível navegar entre as opções oferecidas.

Já para as sugestões de pratos foi desenvolvido um rolamento infinito utilizando um botão de 'Ver mais', que pode ser utilizado até que não hajam mais produtos disponíveis. É possível também utilizar a barra de pesquisa para procurar um produto específico. Decidimos pelo scroll com o botão devido ao nosso design que necessita que o usuário chegue no final da página.

O mapa mostra o usuário como ponto verde e mostra os Chefs como logotipos *Chama o Chef*, foi desenvolvido utilizando a API do Google Maps.

<div style="color:red; text-align:center; margin-bottom:15px"> "Para que a api funcione corretamente é necessário inserir a chave de acesso única do usuário, portanto antes de utilizar, é importante configurar o arquivo .env como mencionado!" </div>

Finalmente, todos os produtos estão dispostos em formato de cartão, com informações sobre nome, nome do chef, preço, notas de avaliações do usuário, favoritado e claro, foto do produto. Os cartões são clicáveis e direcionam o usuário para a tela de detalhes do produto.

<div style="display:flex; justify-content:center; margin-bottom:20px; border-radius:5px"><img style="border-radius:5px" src="assets/RickChick.png">
</div>
<div style="display:flex; justify-content:center; margin-bottom:20px">
<em>Cartão de Prato</em></div>

#### Detalhes do produto

Nesta tela é possível visualizar:

- Foto ampliada do prato,;
- Descrição do prato;
- Média das notas dadas pelos usuários;
- É possível curtir ou odiar o produto;
- Preço do prato;
- É possível adicioná-lo ao carrinho, na quantidade desejada;
- Mapa com a rota entre o usuário e o chef que cozinha o produto;
- Carrossel com todos os produtos deste Chef;
- Comentários de usuários que já compraram este prato.

Nesta página começa a interação do usuário com o carrinho, os produtos são enviados na quantidade desejada.

É possível também curtir ou descurtir os comentários dos usuários sobre o prato.

#### Todos os Pratos

Esta página é semelhante à sessão de sugestão de pratos na página inicial, porém aqui foi implantado um scroll infinito utilizando a proximidade do usuário ao fim da página. Toda vez que o usuário chega ao fim da página é realizada uma requisição para novos produtos, e esse processo pode ser repetido até que não hajam mais produtos a serem mostrados.

#### Edição do Usuário

Nesta página o usuário pode realizar alterações no cadastro realizado, além de adicionar novos telefones e endereços.

Nome e email são editados simultâneamente, e se um valor vazio for repassado, a edição é cancelada, caso queira alterar apenas um dos campos é necessário repetir o campo que deseja manter.

Para telefones e endereços foram desenvolvidos botões de adicionar e deletar, para que o usuário possa livremente escolher os dados que quer manter na aplicação.

#### Header

O header aparece páginas privadas e dá acesso ao submenu de Logout e Edição de Perfil, além do carrinho, que abre como um modal na lateral. O carrinho também pode ser acessado de qualquer uma das páginas privadas.

#### Carrinho

Para o desenvolvimento do carrinho foi utilizado um contexto englobando as páginas privadas, dessa forma toda a informação pode ser acessada através das páginas e o usuário consegue navegar entre os produtos para escolher o que mais lhe chamar a atenção.

Após enviar os produtos para o carrinho é possível visualizar o total do pedido, além de alterar as quantidades desejadas e ainda retirar um produto do carrinho.

Finalmente antes de finalizar o pedido é preciso escolher um endereço de entrega. Caso até esse momento o usuário ainda não possua endereço, o mesmo pode se direcionar à pagina de edição para adicionar um novo. Se o usuário não escolher nenhum endereço, o primeiro endereço cadastrado será utilizado para a entrega.

Até este ponto todo o processo pode ser realizado através de todas as páginas privadas, visto que as informações se encontram no contexto criado e ainda estão criptografadas no *localStorage*. Logo o carrinho está disponível ao usuário durante toda a utilização da aplicação.

Finalizada a compra o usuário receberá um QR code em tela que pode ser escaneado para 'realizar o pagamento', após o pagamento o usuário é redirecionado para uma tela onde poderá avaliar cada um dos pratos selecionados.


### Fluxo de Arquivos

Durante todo o projeto foi utilizado o GitLab da turma para documentar e realizar o fluxo dos arquivos.

A página do repositório dá acesso também a informações como MRs, PRs e commits realizados ao longo do projeto, além da issues utilizadas para organização das tarefas através das issues e do issue board.

### Testes

Foram realizados alguns testes ponta a ponta utilizando *Cypress*.

<div style="color:red; text-align:center; margin-bottom:15px"> Para visualizar os testes primeiro é preciso ter a aplicação rodando, portanto certifique-se que a aplicação está online antes de prosseguir com os testes.</div>


Os testes também estão no repositório e podem ser verificados utilizando o seguinte comando no terminal: 

    npm run cypress:open

A partir do comando uma nova janela se abrirá, onde o usuário deve selecionar a opção E2E, e em seguida o navegador de preferência. Em seguida selecione o teste que deseja visualizar e aguarde o resultado.

Descrevendo brevemente cada um dos testes:

Login:
- Teste de login com sucesso, inicia na página de login e aplica credenciais cadastradas esperando receber a página home.
- Teste de login sem sucesso, inicia na página de login e aplica credenciais erradas esperando receber uma mensagem de erro na tela.

Signup: 
- Teste de Cadastro sem endereço, inicia na página de cadastro e aplica informações apenas na primeira página do cadastro, sem informar endereço, espera ser redirecionado para login (comportamento que acontece apenas com cadastro com sucesso.)
- Teste de Cadastro com endereço, inicia na página de cadastro e aplica todas as informações de cadastro, espera ser redirecionado para login(comportamento que acontece apenas com cadastro com sucesso.)

Navegação:
- Teste que inicia com Login, passa pela página inicial, acessa a barra de pesquisa, busca por um produto específico e clica no botão de like, espera uma resposta 204 da requisição.

## Conclusão

Ao final do desenvolvimento temos um projeto funcional, cumprindo a proposta inicial e contendo todos os pontos exigidos.

Foi possível utilizar muito do conhecimento adquirido ao longo do curso e desenvolver por completo um projeto de FrontEnd.

## Pontos de Melhoria

Alguns pontos podem ser melhorados em futuras versões da aplicação, a seguir denotamos alguns:

- Adição de página de categorias de produtos;
- Adição de página de histórico de pagamentos;
- Adição de página de histórico de produtos;
- Adição de função para buscar localização do usuário através do browser;

## Dificuldades Encontradas

Primeiramente é muito importante denotar as dificuldades de se trabalhar em equipe utilizando git. A maior parte do grupo não tinha experiência com gitflow em equipe, então tivemos algumas dificuldades iniciais para compreender o fluxo, para trabalhar com as incompatibilidades dos merges, mesclar as atividades de cada um da maneira correta, repassar as necessidades de cada função e a tipagem das respostas, entre outros.

Também é importante mencionar a divisão das tarefas. Não foi simples conseguir definir as tarefas de cada um do grupo, considerando o conhecimento de cada um e o tempo disponível para a realização.

A API utilizada para o mapa também foi ponto de dificuldade, apesar de existir um passo a passo de utilização, não foi simples fazer com que funcionasse em nossa aplicação. Foi um dos pontos que demandou maior tempo de desenvolvimento.

Finalmente, mencionamos também as tipagens em geral. Por se tratar de um projeto muito grande, envolvendo vários objetos diferentes vindo de requisições de API e transitando entre as páginas da aplicação, as tipagens foram objeto de muita atenção e dificuldade durante todo o trabalho. 

## Autores

  - **Armando Assini** - *arm.assini@gmail.com*
  - **Rafael Souza** - *rafael.anderson42@gmail.com*
  - **Vinícius Beritica** - *vinicius.beritica@gmail.com*
  - **Vitória Almeida** - *vitorialmdd@gmail.com*

**Contribuições** - Professores, Monitores e Colegas de classe Turma React2 - Raro Academy.
