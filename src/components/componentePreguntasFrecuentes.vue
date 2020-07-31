<template>
  <div>
    <section class="pb-4">
      <div role="tablist">
        <b-container class="pb-4">
          <b-row class="pt-4 d-flex justify-content-center .col-md-12">
            <b-col cols="4" class="divmenu ocultar-div">
              <div class="contenido">
                <ul
                  v-for="(categoriaCont,key) in  Object.keys(preguntasFrecuentes)"
                  v-bind:key="key"
                >
                  <li class="estilolink">
                    <a
                      :class="{ 'liactive': categoriaCont === (categoria) }"
                      @click="getContenido($event)"
                      href="javascript:void()"
                      v-bind:id="'' + categoriaCont"
                      variant="info"
                    >{{categoriaCont}}</a>
                  </li>
                </ul>
              </div>
            </b-col>
            <b-col cols="12" lg="8" md="12" sm="12" class="pl-0 pr-0">
              <div id="section_breadcrumb">
                <div class="d-flex align-items-center">
                  <b-breadcrumb-item style="display:inline-block;" :to="rutaPrincipal">
                    <img src="@/static/media/icons/PathCopy3.png" style="width:8px; " />
                  </b-breadcrumb-item>
                  <router-link :to="rutaPrincipal">
                    <span class="linkprincipal">Principal</span>
                  </router-link>
                  <span style="padding-right:6px;">›</span>
                  <span style="color: #0754C4; font-size: 13px;">{{categoria}}</span>
                </div>
              </div>
              <div>
                <h5 class="titulopf ocultar-div">{{categoria}}</h5>
                <div class="dropwdown centrar d-flex justify-content-center">
                  <div class="rectangulo ocultar" style="margin-bottom:20px; margin-top:10px">
                    <b-dropdown
                      class="m-2"
                      menu-class="w-100"
                      style="width:100%;"
                      variant="white"
                      toggle-class="text-decoration-none"
                      no-caret
                    >
                      <template v-slot:button-content>
                        <div
                          class="d-flex align-items-center justify-content-between align-content-center"
                        >
                          <span class="d-flex align-items-center justify-content-start">
                            <img
                              src="@/static/media/icons/Group2Copy.svg"
                              width="28px"
                              class="mr-3"
                            />
                            <span class="titulodropdown">{{categoria}}</span>
                          </span>
                          <span>
                            <img src="@/static/media/icons/arrow_down.png" class="mr-3" />
                          </span>
                        </div>
                      </template>
                      <b-dropdown-item
                        v-for="(categoriaCont,key) in  Object.keys(preguntasFrecuentes)"
                        v-bind:key="key"
                        @click="getContenido($event)"
                        href="javascript:void()"
                        v-bind:id="'' + categoriaCont"
                        class="opcionesdropdown"
                      >{{categoriaCont}}</b-dropdown-item>
                    </b-dropdown>
                  </div>
                </div>
              </div>
              <div
                v-if="categoriaCont === categoria"
                v-for="(categoriaCont,key) in  Object.keys(preguntasFrecuentes)"
                v-bind:key="key"
              >
                <div class="linea"></div>
                <div
                  id="section_preguntas"
                  v-for="(data, key) in preguntasFrecuentes[categoriaCont]"
                  v-bind:key="key"
                  style="width:100%;"
                >
                  <div
                    v-b-toggle="data.id"
                    style="height:64px;outline: none;"
                    class="d-flex align-items-center justify-content-between"
                  >
                    <div class="when-opened lista2pf">{{data.preg}}</div>
                    <div class="when-closed listapf">{{data.preg}}</div>
                    <img class="when-opened" src="@/static/media/icons/arrow_up.png" />
                    <img class="when-closed" src="@/static/media/icons/arrow_down.png" />
                  </div>
                  <b-collapse :id="data.id" accordion="accordion" class="respuesta">
                    <span v-for="(item, index) in data.resp" :key="index">
                      <span class="pt-4 answer" v-html="item"></span>
                    </span>
                  </b-collapse>
                  <div class="linea"></div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'componentePreguntasFrecuentes',
  props: {
    preguntasFrecuentes: {
      type: Object
    },
    rutaPrincipal: {
      type: String
    }
  },
  data() {
    return {
      contenido: null,
      categoria: "Planes de Viaje Seguro",
      
    };
  },
  mounted() {
    // if (document.location.hostname == "www.interseguro.pe"){
    //   fbq('track', 'ViewContent', {
    //     ViewContentpreguntasfrecuentes: 'ViewContentpreguntasfrecuentes'
    //   })
    // }else{
    // }

    //this.urlpdf = require("../../static/media/documentos/carta_anulacion.docx")
    this.PaginaVista();
  },
  methods: {
    getContenido(event) {
      this.categoria = event.target.id;
    },
    PaginaVista() {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "pagina_vista",
        "page-url": "/vehicular/preguntas-frecuentes",
        "page-title": "Preguntas frecuentes",
      });
    },
  },
  created() {
    this.contenido = this.preguntasFrecuentes["Planes de Viaje Seguro"];
  },
};
</script>
<style scoped lang="scss" scope>

#section_breadcrumb {
  font-family: "Omnes Semibold";
}

.respuesta {
  width: 90%;
  color: #6f6f6f;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  text-align: left;
  padding-top: 0;
  font-family: "Omnes Medium";
}

#section_preguntas {
  img {
    position: relative;
    right: 15px;
  }
}

.opcionesdropdown {
  color: #0754c4 !important;
  font-size: 18px;
  font-weight: 400;
  line-height: 14px;
  text-align: center;
  padding: 9px;
  margin-left: 0px;
}

.titulodropdown {
  color: #0754c4;
  font-size: 25px;
  font-weight: 600;
  line-height: 18px;
  text-align: left;
}

.rectangulo {
  background-color: #ffffff;
  border-radius: 4.2px;
  box-shadow: 0 2px 6px 0 rgba(14, 90, 151, 0.5);
  width: 94%;
}

.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}

.listapf {
  color: #6f6f6f;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 24px;
  width: 550px;
  text-align: left;
  font-family: "Omnes Medium";
}

.lista2pf {
  color: #0754c4;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 24px;
  width: 550px;
  text-align: left;
  font-family: "Omnes Semibold";
}

.linea {
  background-color: #d8d8d8;
  width: 100%;
  height: 2px;
}

.titulopf {
  color: #0754c4;
  font-size: 30px;
  font-weight: 600;
  line-height: 16px;
  width: 521px;
  text-align: left;
  padding-top: 25px;
  padding-bottom: 20px;
  font-family: "Omnes Semibold"
}

.linkprincipal {
  padding-left: 7px;
  padding-right: 6px;
  padding-bottom: 7px;
  padding-top: 7px;
  font-size: 14px;
  color: #9a9aa3;
}

.estilolink {
  padding-bottom: 20px;
  font-size: 18px;
  font-family: "Omnes Medium";
}

.text-comoMeCambio {
  position: relative;
  top: 18vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
  font-family: "omnessemibold";
  h1 {
    color: #002e75;
    font-size: 20px;
    text-align: center;
    font-weight: 700;
  }
  p {
    font-size: 14px;
    text-align: center;
  }
}
.step01 {
  .img-step1 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img {
      width: 50px;
      height: 50px;
    }
  }
  h2 {
    width: 85%;
    margin: auto;
    line-height: 1;
  }
  .descripcion {
    width: 85%;
    margin: auto;
  }
  ul,
  menu,
  dir {
    padding-inline-start: 0px;
  }
}
.step02 {
  .img-step2 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img {
      width: 50px;
      height: 50px;
    }
  }
  h2 {
    width: 85%;
    margin: auto;
    line-height: 1;
  }
  .descripcion {
    width: 85%;
    margin: auto;
  }
}
.subtitle {
  color: #5e5e5e;
}
.box-respuestas {
  padding: 20px;
}
img.icon-cont {
  width: 50px;
  position: absolute;
  left: -40px;
  top: -59px;
}
.title_pr {
  padding-bottom: 0px;
  padding-top: 15px;
  text-align: center;
  font-size: 42px;
  line-height: 20px;
  color: #3256c0;
}
.sectTitle {
  background-color: #e7eef9;
  margin-top: 60px;
}
.spContenido {
  bottom: 0;
  font-size: 25px;
  font-weight: 600;
  color: #5e5e5e;
  left: 0;
  padding-bottom: 8px;
}

.question a {
  font-family: "Omnes Medium";
  color: #6f6f6f !important;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
}
.iconquestion {
  color: #00d256;
  font-weight: 600;
  font-size: 28px;
}
.iconquestion::before {
  content: "-";
}
.collapsed .iconquestion::before {
  content: "+" !important;
}

.contenido ul {
  list-style: none;
  padding-left: 0px;
  font-family: "" omnessemibold "";
}
.contenido ul a {
  color: #5e5e5e;
}
.question.collapsed hr {
  margin: 0px 10px;
  border-bottom: 1px solid #3256c0;
  opacity: 0.2;
}
.card-answer.collapse.show hr {
  margin: 0px 10px;
  border-bottom: 1px solid #3256c0;
  opacity: 0.2;
}
.question hr {
  margin: 0px 10px;
  border-top: none;
}

.btnCategoria {
  padding: 15px;
  background-color: #e7eef9;
  color: #0055c8;
  text-align: left;
  font-family: "omnessemibold";
  font-size: 17px;
  border-bottom: 1px solid rgb(148, 167, 219);
}

.btnCategoria:hover {
  background-color: #e7eef9;
}
.card-header {
  border-bottom: none;
  background-color: white;
}
.card-body {
  padding-top: 0px !important;
}

@media screen and (min-width: 1200px) {
  .ocultar {
    display: none;
  }
}

@media screen and (max-width: 1200px) {
  .ocultar-div {
    display: none;
  }
}

@media (min-width: 768px) {
  .title_pr {
    padding-bottom: 4px;
  }
  .card-answer {
    font-family: omnes;
    color: #5e5e5e;
  }
  .question.collapsed {
    border-bottom: 1px solid #e7eef9;
    cursor: pointer;
  }
  .title_pr {
    line-height: 37px;
    margin-bottom: 12px;
  }
  li .liactive {
    color: #0754c4 !important;
    font-family: "Omnes Semibold";
    font-weight: bold;
  }
}
@media (max-width: 768px) {
  .question a {
    font-size: 13px;
  }
  .iconquestion {
    padding-left: 12px;
  }
  .title_pr {
    line-height: 32px;
    font-size: 32px;
  }
  .parrafo, .estiloparrafo {
    font-size: 13px;
  }
  .iconMenumobile {
    position: absolute;
    top: 12px;
    right: 25px;
    font-size: 23px;
    color: #0055c8;
  }
  .subtitle {
    font-size: 13px;
  }
}

@media screen and (max-width: 600px) {
  .listapf {
    color: #6f6f6f;
    font-size: 1rem;
    font-weight: 500;
    line-height: 20px;
    padding-left: 20px;
    width: 90%;
    font-family: "Omnes Medium";
  }

  .lista2pf {
    color: #0754c4;
    font-size: 1rem;
    font-weight: 500;
    line-height: 20px;
    padding-left: 20px;
    width: 90%;
    font-family: "Omnes Semibold";
  }

  #section_preguntas {
    img {
      width: 13px;
      position: relative;
      right: 15px;
    }
  }

  .titulodropdown {
    color: #0754c4;
    font-size: 20px;
    font-weight: 600;
    line-height: 16px;
  }

  #section_breadcrumb {
    margin-left: 15px;
  }

  .respuesta {
    width: 90%;
    color: #6f6f6f;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    padding-top: 0;
    padding-left: 20px;
    font-family: "Omnes Medium";

  }
}

@media screen and (max-width: 480px) {
  .listapf {
    color: #6f6f6f;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    padding-left: 20px;
    width: 90%;
    font-family: "Omnes Medium";
  }

  .lista2pf {
    color: #0754c4;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    padding-left: 20px;
    width: 90%;
    font-family: "Omnes Semibold";
  }

  #section_preguntas {
    img {
      width: 13px;
      position: relative;
      right: 15px;
    }
  }

  .titulodropdown {
    color: #0754c4;
    font-size: 20px;
    font-weight: 600;
    line-height: 18px;
  }
}

@media screen and (max-width: 380px) {
  .titulodropdown {
    color: #0754c4;
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
  }
}
</style>