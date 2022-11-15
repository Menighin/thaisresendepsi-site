<template>
  <div id="home">
    <div class="container">
      <div class="page-banner home-banner">
        <div class="row align-items-center flex-wrap-reverse h-100">
          <div class="col-md-6 py-5 wow fadeInLeft">
            <h1 class="mb-4">Psicóloga, Psicanalista e Especialista em Saúde Mental</h1>
            <p class="text-lg mb-2">Atendimento psicológico em Belo Horizonte e, online, para qualquer localidade.</p>
            <p class="text-lg mb-5">CRP 04/56951</p>
          </div>
          <div class="col-md-6 wow slideInRight banner-image-container banner-large">
            <img src="../assets/img/banner-large.jpg" alt="">
          </div>
          <div class="col-md-6 wow slideInDown banner-image-container-small banner-small">
            <img src="../assets/img/banner-small.jpg" alt="">
          </div>
        </div>
      </div>
      <a href="#about" class="btn-scroll" data-role="smoothscroll"><span class="mai-arrow-down"></span></a>
    </div>
  </div>

  <div class="container">
    <div class="row align-items-center quote">
      <h5>"Até você se tornar consciente, o inconsciente vai dirigir sua vida e você irá chamá-lo de destino" (JUNG)</h5>
    </div>
  </div>

  <div class="page-section" id="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 py-3 wow fadeInUp text-justify">
          <h2 class="title-section">Sobre mim</h2>
          <div class="divider"></div>
          <p>Olá!</p>
          <p>Meu nome é Thais Aparecida Resende, sou Psicóloga (CRP-04/56951), Psicanalista em constante formação e Especialista em Saúde Mental.</p>
          <p>Me apaixonei pela Psicanálise a partir da experiência e dos efeitos que eu senti na minha própria vida. A partir do momento em que encontrei um espaço para que eu pudesse falar e entender as minhas responsabilidades em minhas próprias queixas, pude me movimentar, entender melhor o que se passava comigo e ressignificar vários pontos da minha própria vida.</p>
          <p>Esse encontro se deu durante a faculdade de Psicologia, e durante a graduação, já comecei a sustentar meu tripé de formação - análise pessoal, estudo da teoria e supervisão dos casos. </p>
          <p>Ainda, durante a graduação, tive experiência de atuar na clínica escola da PUC Minas, em empresas e hospitais. A temática do meu trabalho de conclusão de curso foi voltado para o trabalho da Psicanálise com idosos e em processos de luto.</p>
          <p>Assim que finalizei a graduação, ingressei na Residência Integrada de Saúde Mental, do Hospital Municipal Odilon Behrens, onde tive experiência de trabalhar e cuidar de pessoas em intenso sofrimento e crise na saúde mental, e em uso intenso de álcool e outras substâncias psicoativas.</p>
          <p>Hoje, atuo como Psicóloga Clínica em Consultório Particular situado em Belo Horizonte, com atendimentos presenciais e online.</p>
        </div>
        <div class="col-lg-6 py-3 wow fadeInRight">
          <div class="img-fluid py-3 text-center">
            <img src="../assets/img/about_me.jpg" alt="Thais sorrindo sentada em seu consultório" class="thais-pic">
          </div>
        </div>
      </div>
    </div> <!-- .container -->
  </div> <!-- .page-section -->

  <div class="page-section bg-accent" id="how-can-i-help">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-6 py-3 wow fadeInLeft">
            <div class="img-fluid py-3 text-center">
            <img src="../assets/img/how_can_i_help.jpg" alt="Foto de Thais sentada em seu consultório" width="500" class="thais-pic">
          </div>
        </div>
        <div class="col-lg-6 py-3 content-text wow fadeInRight">
          <h2 class="title-section">Como posso ajudar?</h2>
          <div class="divider"></div>
            <p>
              Durante minha trajetória profissional, tive vivências na clínica com adolescentes, adultos e idosos, em hospitais, 
              empresas e em instituições de cuidado em saúde mental. Tudo isso somou-se ao meu desejo de escutar as pessoas, sobre 
              seus sofrimentos, modos de relacionar com elas mesmas e com o mundo, e acolhê-las e auxiliá-las a passar 
              por esses momentos difíceis, e, a partir disso, construir novas possibilidades e formas de ser no mundo.
            </p>
            <p>
              Entendo que não somos senhores em nossas próprias casas, e muitos dos sofrimentos atuais perpassam por 
              questões inconscientes - muitas vezes as pessoas não conseguem perceber o motivo de tanta angústia e tanto 
              adoecimento.
            </p>
            <p>
              Para isso, trabalho respeitando os preceitos do Código de Ética do Psicólogo, criando um ambiente acolhedor, 
              livre de julgamentos, com respeito e sigilo, e também, pautado na ética da Psicanálise, que entende que cada 
              pessoa e história é única, e a direção de cada tratamento respeita isso, sendo uma clínica do caso a caso.
            </p>
            <a href="https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf" target="_blank" class="">Acesse o código de ética do psicólogo</a>
        </div>
      </div>
      
      <div class="text-center wow fadeInUp" style="padding-top: 60px">
        <h4 class="title-section">Principais temáticas que atuo</h4>
        <div class="divider mx-auto"></div>
      </div>
      <div class="row justify-content-center">
        <div class="col-6 col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Illness" width="68" height="68"/>
            </div>
            <h5>Adoecimento</h5>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Anguish" width="68" height="68"/>
            </div>
            <h5>Angústia</h5>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Anxiety" width="68" height="68"/>
            </div>
            <h5>Ansiedade</h5>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="LowSelfSteem" width="68" height="68"/>
            </div>
            <h5>Baixa autoestima</h5>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Burnout" width="68" height="68"/>
            </div>
            <h5>Burnout</h5>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Depression" width="68" height="68"/>
            </div>
            <h5>Depressão</h5>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Relationship" width="68" height="68"/>
            </div>
            <h5>Dificuldades nos relacionamentos</h5>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Aging" width="68" height="68"/>
            </div>
            <h5>Envelhecimento</h5>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="TraumaticEvents" width="68" height="68"/>
            </div>
            <h5>Eventos traumáticos</h5>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Phobias" width="68" height="68"/>
            </div>
            <h5>Fobias</h5>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Grief" width="68" height="68"/>
            </div>
            <h5>Luto</h5>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Obsession" width="68" height="68"/>
            </div>
            <h5>Obsessão e compulsão</h5>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Suffering" width="68" height="68"/>
            </div>
            <h5>Sofrimento mental</h5>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Somatization" width="68" height="68"/>
            </div>
            <h5>Somatizações</h5>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="EatingDisorders" width="68" height="68"/>
            </div>
            <h5>Transtornos alimentares</h5>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Addictions" width="68" height="68"/>
            </div>
            <h5>Uso intenso de alcool e drogas</h5>
          </div>
        </div>
      </div>


      <div class="text-center wow fadeInUp" style="padding-top: 60px">
        <h4 class="title-section">Perguntas frequentes</h4>
        <div class="divider mx-auto"></div>
      </div>

      <div class="row justify-content-center">
        <collapsable-group class="col-12 col-sm-12 col-lg-6 col-xl-6 py-3 wow zoomIn" :messages="faq1" />
        <collapsable-group class="col-12 col-sm-12 col-lg-6 col-xl-6 py-3 wow zoomIn" :messages="faq2" />
      </div>

    </div> <!-- .container -->
  </div> <!-- .page-section -->

  <div class="page-section" id="services">
    <div class="container">
      <div class="text-center wow fadeInUp">
        <h2 class="title-section">Serviços</h2>
        <div class="divider mx-auto"></div>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-6 py-3 content-text wow fadeInUp">
          <h2 class="title-section">Atendimento Presencial</h2>
          <div class="divider"></div>
          <p>
            O atendimento presencial ocorre em um consultório na Avenida Álvares Cabral, no bairro Lourdes, 
            em Belo Horizonte. É um ambiente acolhedor, silencioso, que ocorre de forma individual e em horários 
            previamente agendados. 
          </p>
          <p>
            Caso tenha interesse em agendar uma sessão e ter acesso a maiores informações, entre em contato no Whatsapp abaixo.
          </p>
          <a class="btn btn-primary" target="_blank" href="https://api.whatsapp.com/send?phone=5531995169604"><span class="mai-logo-whatsapp"></span> (31) 9 9516 9604</a>
        </div>
        <div class="col-lg-6 py-3 wow fadeInUp">
          <div class="img-fluid py-3 text-center">
            <img src="../assets/img/map.jpg" alt="Mapa do Google Maps indicando onde fica o consultório" class="thais-pic">
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-6 py-3 wow fadeInUp">
          <div class="img-fluid py-3 text-center">
            <img src="../assets/img/online.jpg" alt="Thais atendendo online de sua mesa com o Notebook" class="thais-pic">
          </div>
        </div>
        <div class="col-lg-6 py-3 content-text wow fadeInUp">
          <h2 class="title-section">Atendimento Online</h2>
          <div class="divider"></div>
          <p>
            O atendimento online é autorizado pelo Conselho Federal de Psicologia desde a pandemia, e é reconhecido por ter a mesma 
            potência que um atendimento presencial, no consultório do profissional, mas claro, isso também é avaliado caso a caso. 
            Mas o atendimento online é uma boa alternativa para quem tem uma rotina apertada e não consegue se locomover a 
            tempo para o consultório, ou até mesmo se estiver em outra cidade/estado
          </p>
          <p>
            Para que o atendimento online tenha sucesso, é preciso que você esteja em um ambiente sozinho, com privacidade e 
            liberdade de falar livremente, sobre qualquer coisa, sem a preocupação de que outra pessoa, além do profissional que 
            esteja te atendendo, ouça. Então pode ser importante criar algumas estratégias para o seu atendimento online acontecer:

            <ul>
              <li>estar só, em um ambiente privado;</li>
              <li>usar fones de ouvido;</li>
              <li>ter uma conexão estável com a internet para evitar interrupções;</li>
              <li>se não puder estar sozinho em casa, conversar com as pessoas que você reside que naquele momento em específico você estará em terapia, e construir com elas alternativas para que você faça o atendimento e tenha seu sigilo assegurado.</li>
            </ul>
          </p>
          <p>
            Para agendar uma sessão online, também faça contato no WhatsApp abaixo.
          </p>
          <a class="btn btn-primary" target="_blank" href="https://api.whatsapp.com/send?phone=5531995169604"><span class="mai-logo-whatsapp"></span> (31) 9 9516 9604</a>
        </div>
      </div>
      <br />
      <br />
      <span class="wow fadeInUp" style="display: block; text-align: center;">Não realizo atendimentos de urgência e emergência. Caso necessite, ligue para o CVV - 188 ou procure assistência médica</span>
    </div> <!-- .container -->
  </div> <!-- .page-section -->

</template>

<script setup>
  import InlineSvg from 'vue-inline-svg';
  import Illness from '../assets/icons/Illness.svg';
  import Anguish from '../assets/icons/Anguish.svg';
  import Anxiety from '../assets/icons/Anxiety.svg';
  import LowSelfSteem from '../assets/icons/LowSelfSteem.svg';
  import Burnout from '../assets/icons/Burnout.svg';
  import Depression from '../assets/icons/Depression.svg';
  import Relationship from '../assets/icons/Relationship.svg';
  import Aging from '../assets/icons/Aging.svg';
  import TraumaticEvents from '../assets/icons/TraumaticEvents.svg';
  import Phobias from '../assets/icons/Phobias.svg';
  import Grief from '../assets/icons/Grief.svg';
  import Obsession from '../assets/icons/Obsession.svg';
  import Suffering from '../assets/icons/Suffering.svg';
  import Somatization from '../assets/icons/Somatization.svg';
  import EatingDisorders from '../assets/icons/EatingDisorders.svg';
  import Addictions from '../assets/icons/Addictions.svg';
  import CollapsableGroup from '../components/CollapsableGroup.vue';
  import { ref } from 'vue';

const faq1 = ref([
  {
      title: 'Como saber se preciso de atendimento psicológico?',
      content: 'Caso você esteja enfrentando dificuldades no relacionamento com você mesmo, e com as pessoas ao seu redor, se a sua forma de funcionar na vida antes não tem funcionado mais agora, e tem trazido angústia. Se algo tem te incomodado, tem sido doloroso, enfim... Os motivos são muitos para se procurar por um processo terapêutico, e também muito individuais. Além do estalo de “preciso ajuda psicológica”, é importante que você deseje iniciar o processo, que deseje fazer esse investimento em você. '
  },
  {
      title: 'Aceita plano de saúde?',
      content: 'Não, apenas consultas particulares.'
  },
  {
      title: 'Qual o valor das sessões? ',
      content: 'O valor da sessão é informado no contato direto via WhatsApp, diretamente para a pessoa interessada em meu trabalho.'
  },
]);

const faq2 = ref([
  {
      title: 'Qual a frequência das sessões?',
      content: 'Na primeira sessão, além de ser o momento de nos conhecermos e eu entender como poderemos trabalhar, também iremos avaliar em conjunto, se trabalharemos com sessões semanais ou quinzenais. A frequência maior das sessões é de extrema importância para o andamento do processo terapêutico.'
  },
  {
      title: 'Quanto tempo ficarei fazendo terapia?',
      content: 'Enquanto houver desejo de estar ali. Não tem como fazer uma previsão de em quanto tempo você verá mudanças, pois cada caso é único. De qualquer forma, a terapia é um investimento que pode ser pensado em médio/longo prazo. Costumo dizer que X anos de vida (insira sua idade aqui rs) não se trabalham em poucas sessões de terapia. É preciso tempo, dedicação ao processo, trazer suas questões para que algo se movimente.'
  },
  {
      title: 'Há indicação de medicação, se necessário?',
      content: 'Psicólogo não prescreve medicação, pois não tem formação em Medicina. Mas caso se avalie a importância de iniciar uso de medicação, faço a indicação de algum Psiquiatra de minha confiança. Nesse caso, o tratamento se dará de forma multiprofissional, pois o uso de medicação não exclui a importância de se trabalhar as questões dentro do espaço da terapia/análise com um Psicólogo.'
  }
]);

</script>

<style scoped lang="scss">

.quote {
  display: block;
  text-align: center;
  font-style: italic;
  padding-top: 40px;
  margin-bottom: -50px;
}

</style>
