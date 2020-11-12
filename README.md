# ₿ cryptogame-frontend

_Cryptocurrency, Vue.js, JavaScript, Frontend_

## 📔 Description

In this project, we developed a game app based in cryptocurrencies with Vue.js (frontend) which requires data to an API developed with node.js (backend).

## 📷 Screenshots

![img](https://live.staticflickr.com/65535/50546755182_92a7d0eb91_o.jpg)

### 📂 Content

This repository contains only the frontend section, being the backend section stored separately in an independent repo ([here](https://github.com/GuilhermeCarra/cryptogame-server)).

It contains the files and folders detailed below:

- **_project_documentation_**: a folder with all the required documentation in the project in PDF format, plus a _**Postman**_ collection with all the API calls to the backend service.

- **_src_**: it is the root folder of the project, divided into sub-folders which are structured in: **_assets_**, **_components_** and **_config_**. Additionally, in here it is the main entry point to the project (**_main.js_**), which contains all the routes used and the route protection middleware, and **_App.vue_** with the backbone of the SPA design.

- **_.babelrc_**: Babel configuration file with all the presets and plugins to be used when processing the project files.

- **_.editorconfig_**: EditorConfig configuration file, with all the custom styles and formatting presets to be used in the project.

- **_.gitignore_**: used to indicate the files and folders to be ignored by the version control system _Git_.

- **_index.html_**: HTML file in which to render the project. It should contain only the basic meta tags in the head and a div element inside the body where the Vue application will be built. Also a javaScript tag with the bundle of all the code used in the project is included.

- **_package-lock.json_**: automatically generated file used for any operations where the package manager _npm_ modifies either the _node_modules_ tree (not included in this repository) or the file _package.json_.

- **_package.json_**: contains information about the project (name, version, etc.) including the packages installed as dependencies.

- **_README.md_**: this file.

- **_webpack.config.js_**: a configuration file used by _webpack_ where all the project settings, _loaders_, _plugins_, and other specific information related to the build is put.

---

## ✒️ Authors

- Frontend by:

  - **Guilherme Carra** &#8594; [guilherme-carra](https://code.assemblerschool.com/guilherme-carra/)

  - **Jorge García Torralba** &#8594; [jorge-garcia](https://code.assemblerschool.com/jorge-garcia/)

- Backend by:

  - **Yulia Belyakova** &#8594; [yulia-belyakova](https://code.assemblerschool.com/yulia-belyakova/)

  - **Christian Callau** &#8594; [christian-callau](https://code.assemblerschool.com/christian-callau/)
