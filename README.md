# doll-helper README

This is a plugin that can reduce time of writing repeating template code. Just like snippets, but it can also detect the dependency if vue or react exist it will provide deferent snippets.

## Features

### snippets

It provide snippets based on the project you open.

#### ts js

| trigger | content                                                |
| ------- | ------------------------------------------------------ |
| imp     | `import ${0:moduleName} from '${1:module}';`           |
| imd     | `import {${0:destructuredModule}} from '${1:module}';` |
| dob     | `const { ${2:prop} } = ${1:object};`                   |
| nfn     | `const ${1:onClick} = () => { $0 };`                   |
| clg     | `console.log($1);`                                     |
| clo     | `console.log('${1:object}:', $1);`                     |
| cli     | `console.info($1);`                                    |
| clw     | `console.warn($1);`                                    |
| cle     | `console.error($1);`                                   |

#### vue

| trigger     | content                                            |
| ----------- | -------------------------------------------------- |
| ref         | `const ${1:var} = ref($2);`                        |
| defineProps | `const props = defineProps<${1:{}}>();$0`          |
| defineEmits | `const emit = defineEmits<${1:{}}>();$0`           |
| computed    | `const ${1:computedRef} = computed(() => { $0 });` |

#### react

| trigger | content                                                              |
| ------- | -------------------------------------------------------------------- |
| uss     | `const [${1:state}, set${1/(.*)/${1:/capitalize}/}] = useState($3);` |

##### template

`rfc`: 
```tsx
import React from 'react'

function $1() {
  $0
  return <>$2</>;
}

export default $1
```

### completion provide

It provide completions based on the project you open.

#### ts js

| trigger        | content                          |
| -------------- | -------------------------------- |
| ${value}.const | `const ${1:constant} = ${value}` |
| ${value}.let   | `let ${1:variable} = ${value}`   |

#### vue

| trigger      | content                               |
| ------------ | ------------------------------------- |
| ${value}.ref | `const ${1:constant} = ref(${value})` |
