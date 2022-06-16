<template>
  <div id="home">
    <div class="container">
      <div class="page-banner home-banner">
        <div class="row align-items-center flex-wrap-reverse h-100">
          <div class="col-md-6 py-5 wow fadeInLeft">
            <h1 class="mb-4">Psicóloga, Psicanalista e Especialista em Saúde Mental</h1>
            <p class="text-lg text-grey mb-5">Atendimento psicológico em Belo Horizonte, e online, para qualquer localidade.</p>
            <!-- <a href="#" class="btn btn-primary btn-split">Watch Video <div class="fab"><span class="mai-play"></span></div></a> -->
          </div>
          <div class="col-md-6 py-5 wow zoomIn">
            <div class="img-fluid text-center">
              <img src="../assets/img/banner.png" alt="">
            </div>
          </div>
        </div>
        <a href="#about" class="btn-scroll" data-role="smoothscroll"><span class="mai-arrow-down"></span></a>
      </div>
    </div>
  </div>

  <div class="page-section" id="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 py-3 wow fadeInUp text-justify">
          <h2 class="title-section">Sobre mim</h2>
          <div class="divider"></div>
          <p>Olá!</p>
          <p>Meu nome é Thais Aparecida Resende, sou Psicóloga, Psicanalista e Especialista em Saúde Mental.</p>
          <p>Me apaixonei pela Psicanálise a partir da experiência e dos efeitos que eu senti na minha própria vida. A partir do momento em que encontrei um espaço para que eu pudesse falar e entender as minhas responsabilidades em minhas próprias queixas, pude me movimentar, entender melhor o que se passava comigo e ressignificar vários pontos da minha própria vida.</p>
          <p>Esse encontro se deu durante a faculdade de Psicologia, e durante a graduação, já comecei a sustentar meu tripé de formação - análise pessoal, estudo da teoria e supervisão dos casos. </p>
          <p>Ainda, durante a graduação, tive experiência de atuar na clínica escola da PUC Minas, em empresas e hospitais. A temática do meu trabalho de conclusão de curso foi a possibilidade de trabalho da Psicanálise com idosos, tamanho o afeto que eu tenho por sujeitos nessa faixa etária. </p>
          <p>Assim que finalizei a graduação, ingressei na residência integrada de Saúde Mental, do Hospital Municipal Odilon Behrens, onde tive experiência de trabalhar e cuidar de pessoas em intenso sofrimento e crise na saúde mental, e em uso intenso de álcool e outras drogas.</p>
          <p>Hoje, atuo como Psicóloga Clínica em Consultório Particular situado em Belo Horizonte, com atendimentos presenciais e online.</p>
        </div>
        <div class="col-lg-6 py-3 wow fadeInRight">
          <div class="img-fluid py-3 text-center">
            <img src="../assets/img/banner.png" alt="">
          </div>
        </div>
      </div>
    </div> <!-- .container -->
  </div> <!-- .page-section -->

  <div class="page-section bg-light" id="how-can-i-help">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-6 py-3">
            <div class="img-fluid py-3 text-center">
            <img src="../assets/img/banner.png" alt="">
          </div>
        </div>
        <div class="col-lg-6 py-3 content-text">
          <h2 class="title-section">Como posso ajudar?</h2>
          <div class="divider"></div>
            <p>
              Durante minha trajetória profissional, tive vivências na clínica com adultos e idosos, em hospitais, 
              empresas e em instituições de saúde mental. Tudo isso somou-se ao meu desejo de escutar as pessoas, sobre 
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
        <div class="col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Illness" width="68" height="68"/>
            </div>
            <h5>Adoecimento</h5>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Anguish" width="68" height="68"/>
            </div>
            <h5>Angústia</h5>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Anxiety" width="68" height="68"/>
            </div>
            <h5>Ansiedade</h5>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="LowSelfSteem" width="68" height="68"/>
            </div>
            <h5>Baixa autoestima</h5>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Burnout" width="68" height="68"/>
            </div>
            <h5>Burnout</h5>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Depression" width="68" height="68"/>
            </div>
            <h5>Depressão</h5>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Relationship" width="68" height="68"/>
            </div>
            <h5>Dificuldades nos relacionamentos</h5>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Aging" width="68" height="68"/>
            </div>
            <h5>Envelhecimento</h5>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="TraumaticEvents" width="68" height="68"/>
            </div>
            <h5>Eventos traumáticos</h5>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Phobias" width="68" height="68"/>
            </div>
            <h5>Fobias</h5>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Grief" width="68" height="68"/>
            </div>
            <h5>Luto</h5>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Obsession" width="68" height="68"/>
            </div>
            <h5>Obsessão e compulsão</h5>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Suffering" width="68" height="68"/>
            </div>
            <h5>Sofrimento mental</h5>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Somatization" width="68" height="68"/>
            </div>
            <h5>Somatizações</h5>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="EatingDisorders" width="68" height="68"/>
            </div>
            <h5>Transtornos alimentares</h5>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 col-xl-2 py-3 wow zoomIn">
          <div class="features">
            <div class="header mb-3">
              <inline-svg class="theme-icon" :src="Addictions" width="68" height="68"/>
            </div>
            <h5>Uso intenso de alcool e drogas</h5>
          </div>
        </div>
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
            <img src="../assets/img/banner.png" alt="">
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-6 py-3 wow fadeInUp">
          <div class="img-fluid py-3 text-center">
            <img src="../assets/img/banner.png" alt="">
          </div>
        </div>
        <div class="col-lg-6 py-3 content-text wow fadeInUp">
          <h2 class="title-section">Atendimento Online</h2>
          <div class="divider"></div>
          <p>
            Escolha um ambiente em que você tenha privacidade e liberdade de falar livremente, sobre qualquer coisa.
          </p>
          <p>
            Para uma melhor imersão e entendimento, é importante o uso de fones de ouvido e uma conexão estável com a internet.
          </p>
          <a class="btn btn-primary" target="_blank" href="https://api.whatsapp.com/send?phone=5531995169604"><span class="mai-logo-whatsapp"></span> (31) 9 9516 9604</a>
        </div>
      </div>

        
    </div> <!-- .container -->
  </div> <!-- .page-section -->

  <!-- Blog -->
  <!-- <div class="page-section">
    <div class="container">
      <div class="text-center wow fadeInUp">
        <div class="subhead">Our Blog</div>
        <h2 class="title-section">Read Latest News</h2>
        <div class="divider mx-auto"></div>
      </div>

      <div class="row mt-5">
        <div class="col-lg-4 py-3 wow fadeInUp">
          <div class="card-blog">
            <div class="header">
              <div class="post-thumb">
                <img src="../assets/img/blog/blog-1.jpg" alt="">
              </div>
            </div>
            <div class="body">
              <h5 class="post-title"><a href="#">Source of Content Inspiration</a></h5>
              <div class="post-date">Posted on <a href="#">27 Jan 2020</a></div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4 py-3 wow fadeInUp">
          <div class="card-blog">
            <div class="header">
              <div class="post-thumb">
                <img src="../assets/img/blog/blog-2.jpg" alt="">
              </div>
            </div>
            <div class="body">
              <h5 class="post-title"><a href="#">Source of Content Inspiration</a></h5>
              <div class="post-date">Posted on <a href="#">27 Jan 2020</a></div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 py-3 wow fadeInUp">
          <div class="card-blog">
            <div class="header">
              <div class="post-thumb">
                <img src="../assets/img/blog/blog-3.jpg" alt="">
              </div>
            </div>
            <div class="body">
              <h5 class="post-title"><a href="#">Source of Content Inspiration</a></h5>
              <div class="post-date">Posted on <a href="#">27 Jan 2020</a></div>
            </div>
          </div>
        </div>

        <div class="col-12 mt-4 text-center wow fadeInUp">
          <a href="blog.html" class="btn btn-primary">View More</a>
        </div>
      </div>
    </div>
  </div> -->
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
  import Addictions from '../assets/icons/Addictions.svg'

</script>