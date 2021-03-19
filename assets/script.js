// Animation au scroll:
let observer = new IntersectionObserver(function (observable){
    observable.forEach(function (observable) {
        if (observable.intersectionRatio > 0.3){
            observable.target.classList.remove('not-visible')
            observer.unobserve(observable.target)
        }
    })
}, {
    threshold: [0.5]
})
let items = document.querySelectorAll('.intersection-observer');
items.forEach(function(item){
    observer.observe(item)
})