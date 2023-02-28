'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">portafilio documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-0d651e1d6a97b161a9a8490acd417083c50b16c28dd7274d4f8806e6294ad7c933ab1d89afe1425c86babaa468084f8d3f8ee650e10b7a9197c0ce537871cddb"' : 'data-target="#xs-components-links-module-AppModule-0d651e1d6a97b161a9a8490acd417083c50b16c28dd7274d4f8806e6294ad7c933ab1d89afe1425c86babaa468084f8d3f8ee650e10b7a9197c0ce537871cddb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0d651e1d6a97b161a9a8490acd417083c50b16c28dd7274d4f8806e6294ad7c933ab1d89afe1425c86babaa468084f8d3f8ee650e10b7a9197c0ce537871cddb"' :
                                            'id="xs-components-links-module-AppModule-0d651e1d6a97b161a9a8490acd417083c50b16c28dd7274d4f8806e6294ad7c933ab1d89afe1425c86babaa468084f8d3f8ee650e10b7a9197c0ce537871cddb"' }>
                                            <li class="link">
                                                <a href="components/AgregarConocimientoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AgregarConocimientoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AgregarEducacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AgregarEducacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AgregarExperienciaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AgregarExperienciaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AgregarHabilidadBlandaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AgregarHabilidadBlandaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AgregarProyectoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AgregarProyectoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConocimientoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConocimientoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditInicioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditInicioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EducacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EducacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExperienciaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExperienciaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HabilidadesBlandasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HabilidadesBlandasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InicioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InicioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProyectoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProyectoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConocimientoService.html" data-type="entity-link" >ConocimientoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EducacionService.html" data-type="entity-link" >EducacionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExperienciaService.html" data-type="entity-link" >ExperienciaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HabilidadBlandaService.html" data-type="entity-link" >HabilidadBlandaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProyectoService.html" data-type="entity-link" >ProyectoService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/InterceptorService.html" data-type="entity-link" >InterceptorService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Conocimiento.html" data-type="entity-link" >Conocimiento</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/credenciales.html" data-type="entity-link" >credenciales</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Educacion.html" data-type="entity-link" >Educacion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Experiencia.html" data-type="entity-link" >Experiencia</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/habilidadBlanda.html" data-type="entity-link" >habilidadBlanda</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Persona.html" data-type="entity-link" >Persona</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Proyecto.html" data-type="entity-link" >Proyecto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});