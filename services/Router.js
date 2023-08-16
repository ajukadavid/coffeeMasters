const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach(link => {
            link.addEventListener("click", e => {
                
            })
        })
    },
    go: (route, addToHistory=true) => {
        console.log(`Going to ${route}`)
    }
}

export default Router