export const vueSnippet = {
    // #region vue related
    "Define Ref": {
        prefix: "ref",
        body: ["const ${1:variable} = ref($2);", "$0"],
        description: "Define Ref"
    },
    "Define Props": {
        prefix: "defineProps",
        body: "const props = defineProps<${1:{}}>();$0",
        description: "Define Props"
    },
    "Define Emits": {
        prefix: "defineEmits",
        body: "const emit = defineEmits<${1:{}}>();$0",
        description: "Define Emits"
    },
    "Define Computed": {
        prefix: "computed",
        body: ["const ${1:computedRef} = computed(() => {", "$0", "});"],
        description: "Define Computed"
    }

    // #endregion
};
