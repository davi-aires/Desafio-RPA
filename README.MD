# Desafio Loterias Caixa

## Descrição do Projeto:
  Desafio realizado conforme pedido para o concurso (Mega-Sena)
  O Robô irá pegar as informações do arquivo config.xlsx e irá executar de acordo com os concursos específicos pedidos (2220, 2110, 2188) e também
  de acordo com o número de resultados a partir do último que for solicitado (Por padrão 5), o robô irá descever cada passo no arquivo log que se encontrará na pasta Temp durante o processamento.
  Após extrair a informação sobre algum determinado concurso o robô irá preencher a aba de acordo com sua FASE na planilha que estará localizada na pasta Temp
  Após finalizar todas as execuções o robô irá criar uma pasta para armazenar o resultado do processamento ( Log e Planilha preenchidas) no formato processamento_dd_MM_yyyy_HH-mm_ss,
  (dia_mes_ano_hora_minuto_segundo). Já foi deixado um processamento com seu resultado para exemplo!

## Localização dos PATH's:
  Projeto : Desafio\Desafio Loterias Caixa\
  Resultados : Desafio\Resultados\
  Temp : Desafio\Temp\
  Config : Desafio\config.xlsx
  Template : Desafio\TEMPLATE.xlsx
  Scripts e funcionalidades estarão divididas dentro da própria pasta do projeto em outras pastas, neste caso:
  Desafio\Desafio Loterias Caixa\scripts\extraiNumeros.js
  Desafio\Desafio Loterias Caixa\functions\extração_mega_sena.xaml

## Funcionalidades:
  Extração de uma quantidade específica de resultados: Acessa o site loterias caixa e retorna o resultado dos últimos X concursos
  Extração de resultados específicos: Retorna o resultado de concursos específicos, especificados na planilha CONFIG

## Tecnologias Utilizadas:
  Linguagem de Programação: UiPath(Ferramenta), VB(Linguagem), JavaScript(Linguagem)
  Armazenamento: O Robô finaiza o processamento e move os arquivos da pasta Temp para a pasta Resultados, criando uma pasta resultado no formato dito acimaa

## Requisitos de Ambiente para a execução:
  Google Chrome instalado
  Extensão do UiPath para Google Chrome instalada
 
 
