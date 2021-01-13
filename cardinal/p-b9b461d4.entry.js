import{r as e,c as t,h as i,g as s}from"./p-87f0c668.js";import"./p-8ff37cfd.js";import{E as n}from"./p-c06cc5e4.js";import"./p-5120ebde.js";import{B as o}from"./p-9b11de09.js";import{C as r}from"./p-cca2d074.js";import{T as a}from"./p-0fb49658.js";import{T as h}from"./p-454c45f1.js";const l=n.PSK_WIZARD_EVT;class c extends CustomEvent{constructor(e,t,i){super(e,i),this.getEventType=function(){return l},this.data=t}}var d=function(e,t,i,s){var n,o=arguments.length,r=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};const p=class{constructor(i){e(this,i),this.needWizardConfiguration=t(this,"needWizardConfiguration",7),this.changeStep=t(this,"changeStep",7),this.finishWizard=t(this,"finishWizard",7)}componentWillLoad(){this.needWizardConfiguration.emit(e=>{this.wizardSteps=e,this.activeStep=this.wizardSteps.length>0?this.wizardSteps[0]:null})}handleStepChange(e){let t=new c("changeStep",{stepIndexToDisplay:e,wizardSteps:this.wizardSteps,activeStep:this.activeStep,callback:(e,t)=>{e?console.error(e):(this.activeStep=t.activeStep,this.wizardSteps=t.wizardSteps)}},{bubbles:!0,composed:!0,cancelable:!0});this.host.dispatchEvent(t)}handleFinish(){this.finishWizard.emit({wizardSteps:this.wizardSteps,callback:(e,t)=>{e?console.error(e):console.log(t)}})}handleStepPropertiesChange(e){this.activeStep.stepProperties=e}computeStepDesign(e,t,i){let s="";return 0===e?s+="first ":e===i-1&&(s+="last "),e<t?s+="done":e===t&&(s+="current"),s}render(){const e=this.activeStep.stepComponent;return[i("div",{class:"page-content"},i("div",{class:"wizard-content"},i("div",{class:"wizard-form"},i("form",{class:"form-register",action:"#",method:"post",onSubmit:e=>{e.preventDefault(),e.stopImmediatePropagation()}},i("div",{id:"form-total",class:"wizard clearfix"},i("psk-stepper",{componentRender:this.componentRender,wizardSteps:this.wizardSteps,activeStep:this.activeStep,handleStepChange:this.handleStepChange.bind(this)}),i(e,Object.assign({},this.activeStep.stepProperties,{onPropertiesChange:this.handleStepPropertiesChange.bind(this),stepProperties:this.activeStep.stepProperties})),i("div",{class:"actions clearfix"},i("ul",{role:"menu","aria-label":"Pagination"},this.activeStep.stepIndex>0?i("li",null,i("button",{role:"menuitem",onClick:this.handleStepChange.bind(this,this.activeStep.stepIndex-1)},"Previous")):null,this.activeStep.stepIndex<this.wizardSteps.length-1?i("li",null,i("button",{role:"menuitem",onClick:this.handleStepChange.bind(this,this.activeStep.stepIndex+1)},"Next")):null,this.activeStep.stepIndex===this.wizardSteps.length-1?i("li",null,i("button",{role:"menuitem",onClick:this.handleFinish.bind(this)},"Finish")):null)))))))]}get host(){return s(this)}};d([o()],p.prototype,"modelHandler",void 0),d([r()],p.prototype,"host",void 0),d([h({description:"This property is the string that defines the psk-stepper render",isMandatory:!1,propertyType:"string"})],p.prototype,"componentRender",void 0),d([h({description:"This parameter holds the wizard configuration, the names of the steps, the components that will be displayed and if there is the case, other properties, like information for the steps.",isMandatory:!1,propertyType:"array of WizardStep types (WizardStep[])",specialNote:"These information are filled in and handled by the controller of the component, not by the component itself."})],p.prototype,"wizardSteps",void 0),d([a({eventName:"needWizardConfiguration",controllerInteraction:{required:!0},description:"This event is triggered when the component is loaded and if no configuration is given for the wizard.\n            In this case, the controller is responsible to send the configuration to the wizard.\n            This event comes with a single parameter, a callback function that sends the configuration to the component."})],p.prototype,"needWizardConfiguration",void 0),d([a({eventName:"changeStep",controllerInteraction:{required:!0},description:"This event is triggered when the buttons Next, Previous and the step names from the left side of the component are clicked.\n            This event comes with the following parameters:\n                stepIndexToDisplay - the number of the step to be displayed,\n                wizardSteps - the list of the steps from the wizard,\n                activeStep - the step that will be displayed,\n                callback - a callback function that is called from the controller when the validation is done."})],p.prototype,"changeStep",void 0),d([a({eventName:"finishWizard",description:"This event is triggered when the buttons Finish is clicked.\n            This event comes with the following parameters:\n                wizardSteps - the list of the steps from the wizard. Maybe the information inside the wizard will be stored somewhere,\n                callback - a callback function that is called from the controller when the validation is done."})],p.prototype,"finishWizard",void 0);export{p as psk_wizard}