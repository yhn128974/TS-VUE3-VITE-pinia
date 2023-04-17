import { App } from "vue";

import "../element-variables.scss";
import { ElButton, ElForm, ElFormItem, ElInput, ElRadio, ElTabPane, ElTabs } from "element-plus";
const components = [ElButton, ElForm, ElFormItem, ElInput, ElRadio,ElTabs,ElTabPane];

export default (app: App<Element>) => {
  for (const component of components) {
    app.component(component.name, component);
  }
};
