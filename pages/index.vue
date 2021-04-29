<template>
  <div class="profile-page">
    <section class="section-profile-cover bg-gradient-success my-0"></section>
    <section class="section section-skew bg-gradient-info">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img
                      v-lazy="'/profile-picture.png'"
                      class="rounded-circle"
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-4 order-lg-1">
                <div
                  class="card-profile-stats d-flex justify-content-center"
                ></div>
              </div>
            </div>
            <div class="text-center mt-5">
              <h2>
                Daniel Silva
                <span class="font-weight-light"></span>
              </h2>
            </div>
            <div class="mt-5 py-5 border-top text-center">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <p>Sou desenvolvedor e apaixonado pela área de dados</p>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
    <section class="section bg-gradient-info">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 pb-5">
            <h1 class="display-3  text-white">Experiência de trabalho</h1>
            <p class="lead  text-white">
              Eu tenho {{ yearsExperience }} anos de experiência em desenvolvimento.
            </p>
          </div>
        </div>
        <div class="row row-grid align-items-center">
          <div class="col-lg-12 order-lg-1">
            <div class="card shadow shadow-lg--hover">
              <div class="card-body">
                <div class="d-flex-3">
                  <div>
                    <div
                      classs="icon icon-shape bg-gradient-success rounded-circle text-white"
                    ></div>
                    <div class="pl-4">
                      <h5 class="title display-4 text-warning">Hotmart</h5>
                      <h4 class="title display-6 text-warning">
                        Software Data Engineer
                      </h4>
                      <ul>
                        <li>Atuando como desenvolvedor backend, ambiente AWS e trabalhando com Docker, Kubernetes e automação de CI e CD.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 order-lg-1">
            <div class="card shadow shadow-lg--hover mt-5">
              <div class="card-body">
                <div class="d-flex-3">
                  <div>
                    <div
                      classs="icon icon-shape bg-gradient-success rounded-circle text-white"
                    ></div>
                    <div class="pl-4">
                      <h5 class="title display-4 text-warning">Take Blip</h5>
                      <h4 class="title display-6 text-warning">
                        Full Stack Engineer
                      </h4>
                      <ul>
                        <li>
                          Full Stack na equipe de D&A, atuando na equipe de estratégia para propor novas soluções que impactem a 
                          organização. Trabalhando com Node, Vue, React e C#. Também trabalhando com Docker e K8S para provisionar 
                          o ambiente online no Azure.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 order-lg-1">
            <div class="card shadow shadow-lg--hover mt-5">
              <div class="card-body">
                <div class="d-flex-3">
                  <div>
                    <div
                      classs="icon icon-shape bg-gradient-success rounded-circle text-white"
                    ></div>
                    <div class="pl-4">
                      <h5 class="title display-4 text-warning">Take Blip</h5>
                      <h4 class="title display-5 text-warning">
                        Chatbot Developer
                      </h4>
                      <ul>
                        <li>Atuando no time de CS, desenvolvendo chatbots customizados dentro da plataforma BLiP. 
                          Desenvolvimento de API em C# e Node.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 order-lg-1">
            <div class="card shadow shadow-lg--hover mt-5">
              <div class="card-body">
                <div class="d-flex-3">
                  <div>
                    <div
                      classs="icon icon-shape bg-gradient-success rounded-circle text-white"
                    ></div>
                    <div class="pl-4">
                      <h5 class="title display-4 text-warning">
                        Verticis Web Studio
                      </h5>
                      <h4 class="title display-5 text-warning">
                        Head Of Product Development
                      </h4>
                      <ul>
                        <li>
                          Participar ativamente do setor de produtos da agência, tanto na parte de desenvolvimento quanto na parte 
                          de definição e priorização do backlog. Naquela época tive a oportunidade de trabalhar com Docker, criando 
                          pipelines em Bitbucket e provisionando um ambiente manual em AWS (ECR, EC2, S3, Route53) e provisionando 
                          via Terraform.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 order-lg-1">
            <div class="card shadow shadow-lg--hover mt-5">
              <div class="card-body">
                <div class="d-flex-3">
                  <div>
                    <div
                      classs="icon icon-shape bg-gradient-success rounded-circle text-white"
                    ></div>
                    <div class="pl-4">
                      <h5 class="title display-4 text-warning">
                        Verticis Web Studio
                      </h5>
                      <h4 class="title display-5 text-warning">
                        Web System Developer
                      </h4>
                      <ul>
                        <li>
                          Atuando no desenvolvimento web, utilizando PHP como linguagem principal e frameworks 
                          como Symfony e Laravel. Padronização de commits utilizados na agência pela equipe de 
                          desenvolvimento, desenvolvimento de sistema de metas internas.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

export default {
  layout: 'eusouodaniel',
  data() {
    return {
      yearsExperience: Math.abs(
        new Date('January 1 2017').getFullYear() - new Date().getFullYear()
      ),
    }
  },
}
</script>
<style>
img {
  max-width: 100%;
}

.publication-list {
  list-style-type: none;
}

.card-body {
  max-width: 100%;
}
.text-link {
  color: black;
  text-decoration: underline;
}
.text-link:hover {
  color: black;
}
.company-name {
  font-weight: 800;
}
.list-group-item {
  min-height: 82px;
  font-weight: 800;
}
.blog-warning {
  color: #fff;
  background-color: #ff5e3e;
}
.list-group-item-warning.list-group-item-action:hover {
  color: #fff;
  background-color: #fb6b40;
}
.blog-danger {
  color: #fff;
  background-color: #f5365c;
}
.list-group-item-danger.list-group-item-action:hover {
  color: #fff;
  background-color: #db4b66;
}
.blog-info {
  color: #fff;
  background-color: #11cdef;
}
.list-group-item-info.list-group-item-action:hover {
  color: #fff;
  background-color: #56cee3;
}
.blog-light {
  color: #fff;
  background-color: #8965e0;
}
.list-group-item-light.list-group-item-action:hover {
  color: #fff;
  background-color: #9577dd;
}
.blog-success {
  color: #fff;
  background-color: #2dce89;
}
.list-group-item-success.list-group-item-action:hover {
  color: #fff;
  background-color: #5cd09e;
}
</style>
