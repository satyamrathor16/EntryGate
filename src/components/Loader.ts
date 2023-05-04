var loaderRef = ''

const setLoaderRef = (ref) => {
    loaderRef = ref
}

const showLoader = (show) => {
    loaderRef.showLoader(show);
}

export default {
    setLoaderRef,
    showLoader,
}