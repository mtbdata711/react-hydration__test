import { hydrateRoot } from 'react-dom/client';
import { Component } from './Component.compiled';

/**
 * Function to hydrate a component on the client
 * @param {{ Component: (any) => JSX.Element, componentName: string }} param0 - The component to hydrate and the name of the component
 */
import { jsx as _jsx } from "react/jsx-runtime";

class ReactComponent extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.hydrate();
    }

    hydrate(){
      const props = JSON.parse(this.getAttribute("hydration-props"));
    
      hydrateRoot(this, /*#__PURE__*/_jsx(Component, {
        ...props
      }));
    }
}

export function registerComponent(){
  if(!customElements.get('react-component')){
    customElements.define('react-component', ReactComponent);
  }
}



