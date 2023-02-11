export const tsSnippet = {
  "Import Module": {
    prefix: "imp",
    body: "import ${0:moduleName} from '${1:module}';",
    description: "import module",
  },

  "Import Destructured Module": {
    prefix: "imd",
    body: "import {${0:destructuredModule}} from '${1:module}';",
    description: "import module",
  },

  "Destructure Object": {
    prefix: "dob",
    body: "const { ${2:prop} } = ${1:object};",
    description: "Destructure Object",
  },

  "Define Arrow function": {
    prefix: "nfn",
    body: ["const ${1:onClick} = () => {", "  $0", "};"],
    description: "Destructure Object",
  },

  "Console Log": {
    prefix: "clg",
    body: "console.log($1);",
    description: "",
  },

  "Console Log Object": {
    prefix: "clo",
    body: "console.log('${1:object}:', $1);",
    description: "",
  },

  "Console Info": {
    prefix: "cli",
    body: "console.info($1);",
    description: "",
  },

  "Console Warn": {
    prefix: "clw",
    body: "console.warn($1);",
    description: "",
  },
  "Console Error": {
    prefix: "cle",
    body: "console.error($1);",
    description: "",
  },
};
