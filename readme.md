1)	Quais cenários de teste você especificaria para validar a funcionalidade do aplicativo bancário desenhado abaixo? Liste todas as premissas adotadas.

Funcionalidade: Transferência de valores entre correntistas
===================================================================================================
Eu como cliente correntista do banco xyz
Desejo preencher os dados necessários, a fim de realizar uma transferência para outro correntista.


Cenário 1:  Transferência com sucesso de um cliente cadastrado
Dado que eu seja um cliente correntista cadastrado no banco XYZ
e que eu esteja logado no app do banco XYZ
Quando eu buscar a funcionalidade de transferência
e
Preencher o campo cliente destino com o número de uma conta válida de um correntista 

e 
Preencher o campo valor com um valor menor ou igual a R$ 200,00 
e
Preencher o campo de data de efetivação 
e
Clicar em transferir
Então sistema retorna mensagem de transferência realizada com sucesso

Cenário 2:  Transferência de valor não autorizada
Dado que eu seja um cliente correntista cadastrado no banco XYZ
e que eu esteja logado no app do banco XYZ
Quando eu buscar a funcionalidade de transferência no meu app
e
Preencher o campo cliente destino com o número de uma conta válida de um correntista 

e 
Preencher o campo valor com um valor maior que R$ 200,00 
e
Preencher o campo de data de efetivação
e
Clicar em transferir
Então o sistema retorna mensagem de transferência NÃO autorizada, pois o valor ultrapassa o limite disponível em minha conta.

Cenário 3:  Transferência com falha  - Falta de preenchimento de campo obrigatório Valor 

Dado que eu seja um cliente correntista cadastrado no banco XYZ
e que eu esteja logado no app do banco XYZ
Quando eu buscar a funcionalidade de transferência
e
Preencher o campo cliente destino com o dado correto
e 
Preencher o campo de data de efetivação
e
Não preencher o campo valor
e
Clicar em transferir
Então o sistema retorna mensagem de falha informando que o valor de transferência não foi informado.


Cenário 4:  Transferência com falha-Falta de preenchimento de campo obrigatório Cliente destino 

Dado que eu seja um cliente correntista cadastrado no banco XYZ
e que eu esteja logado no app do banco XYZ
Quando eu buscar a funcionalidade de transferência
e
Preencher o campo valor corretamente
e 
Preencher o campo de data de efetivação
e
Não preencher o campo cliente destino
e
Clicar em transferir
Então o sistema retorna mensagem de falha informando que o campo do cliente destino, não foi informado. 

Cenário 5:  Transferência com falha-Falta de preenchimento de campo obrigatório Data da efetivação

Dado que eu seja um cliente correntista cadastrado no banco XYZ
e que eu esteja logado no app do banco XYZ
Quando eu buscar a funcionalidade de transferência
e
Preencher o campo valor corretamente
e 
Preencher o campo cliente destino corretamente
e
Não preencher o campo de data de efetivação
e
Clicar em transferir
Então o sistema retorna mensagem de falha informando que não é possível confirmar a transferência sem informar a data de efetivação da operação.

Cenário 6:  Transferência com falha- Cliente destino não é correntista

Dado que eu seja um cliente correntista cadastrado no banco XYZ
e que eu esteja logado no app do banco XYZ
Quando eu buscar a funcionalidade de transferência
e
Preencher o campo valor corretamente
e 
Preencher o campo cliente destino com dados de uma conta poupança
e
Preencher o campo de data de efetivação
e
Clicar em transferir
Então o sistema retorna mensagem de falha informando que não é possível prosseguir com a transferência pois o cliente destino não é correntista do banco XYZ.



Cenário 7:  Transferência com falha- Nenhum campo informado

Dado que eu seja um cliente correntista cadastrado no banco XYZ
e que eu esteja logado no app do banco XYZ
Quando eu buscar a funcionalidade de transferência
e
Não informar o campo valor corretamente
e 
Não preencher o campo cliente destino 
e
Não preencher o campo de data de efetivação
e
Clicar em transferir
Então o sistema retorna mensagem de falha informando que não é possível prosseguir com a transferência pois é necessário que todos os campos sejam informados.



Cenário 8: Cancelamento da operação de transferência

Dado que eu seja um cliente correntista cadastrado no banco XYZ
e que eu esteja logado no app do banco XYZ
Quando eu buscar a funcionalidade de transferência
e
Preencher o campo valor corretamente
e 
Preencher o campo cliente destino com o número da conta de um correntista
e
Preencher o campo de data de efetivação
e
Clicar em Cancelar
Então o sistema limpa todos os campos preenchidos e retorna a minha tela ao estado inicial.


=======================================================================


 
2)	Considere o esquema Entidade / Relacionamento abaixo:

•	Escreva a consulta SQL para listar o nome de todos os alunos matriculados na   disciplina de Cálculo do professor João.
select 
    a.nome 
from curso c
    inner join aluno a on a.coda = c.aluno
    inner join disciplina d on d.codd = c.disciplina
    inner join professor p on p.disciplina = d.codd
where d.nome like 'Cálculo' and p.nome like 'João'

•	Escreva a consulta SQL para exibir a quantidade de alunos por disciplinas.
select 
    d.nome,
    count(*) as qtdAlunos
from curso c
    inner join aluno a on a.coda = c.aluno
    inner join disciplina d on d.codd = c.disciplina
group by disciplina

•	Escreva a consulta SQL para listar as disciplinas que todos os professores lecionam.
select 
    p.nome as nomeProfessor, d.nome as nomeDisciplina
from professor p
    inner join disciplina d on d.codd = p.disciplina

•	Escreva a consulta SQL que exibe o total de professores.
select count(*) as totalDeProfessores
from professor p

•	Escreva a consulta SQL para listar todos os alunos que cursaram alguma disciplina do ano 2000 até 2020.
select distinct
    a.nome 
from curso c
    inner join aluno a on a.coda = c.aluno
    inner join disciplina d on d.codd = c.disciplina
    inner join professor p on p.disciplina = d.codd
where c.ano BETWEEN '2000-01-01' and '2020-12-31'


3-Testes disponíveis na pasta integration e mapa mental disponivel na pasta fixture.