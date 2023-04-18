import { App } from "vue";
import "../element-variables.scss";
import { User, Iphone } from "@element-plus/icons-vue";
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabPane,
  ElTabs,
} from "element-plus";

const ElementPlusIconsVue = [User, Iphone];
const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
];
export default (app: App<Element>) => {
  // 注册ui组件
  for (const component of components) {
    app.component(component.name, component);
  }
  // 注册ICON组件
  for (const component of ElementPlusIconsVue) {
    app.component(component.name, component);
  }
};
