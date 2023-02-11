export const reactSnippet = {
  // #region react related
  useState: {
    prefix: "uss",
    body: "const [${1:state}, set${1/(.*)/${1:/capitalize}/}] = useState($3);",
    description: "useState auto capitalize",
  },

  "React Functional Component Template": {
    prefix: "rfc",
    body: [
      "import React from 'react'",
      "",
      "function $1() {",
      "  $0",
      "  return <>$2</>;",
      "}",
      "",
      "export default $1",
    ],
    description: "",
  },
  // #endregion
};
