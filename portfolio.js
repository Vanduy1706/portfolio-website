let header = document.querySelector(".header")
let introductionBigTitle = document.querySelector(".introduction__title_big_font")
let introductionSmallTitle = document.querySelector(".introduction__title_small_font")

let about = document.querySelector(".nav__item_about a")
let skill = document.querySelector(".nav__item_skill a")
let project = document.querySelector(".nav__item_project a")
let contact = document.querySelector(".nav__item_contact a")

let infoContainerSpan = document.querySelector(".info__container span")
let infoImage = document.querySelector(".info__image")
let infoContainerPara = document.querySelector(".info__container p")
let skillInfo = document.querySelector(".skill__info")
let educationInfo = document.querySelector(".education__info")
let projectContainer = document.querySelector(".project__container")

let form = document.querySelector(".space")
let closeForm = document.querySelector(".form__close")
let formDrop = document.querySelector(".form")
let bodyScroll = document.querySelector("body")

let formTitle = document.querySelector(".form__title")
let formType = document.querySelector(".form__type")
let formImage = document.querySelector(".form__image")
let formContent = document.querySelector(".form__content")
let formButtonSite = document.querySelector(".form__button_site")
let formButtonSource = document.querySelector(".form__button_source")

let scrollToTheTop = document.querySelector(".scroll-top");
let menu = document.querySelector(".menu")
let navDrop = document.querySelector(".nav")

window.addEventListener("load", (event) => {
    introductionBigTitle.classList.add("introduction__toggle")
    introductionSmallTitle.classList.add("introduction__toggle")
})

window.addEventListener("scroll", (event) => {
    const scrollPosition = window.scrollY;
    
    if(scrollPosition >= 100) {
        header.classList.add("scroll");
    }

    if(scrollPosition < 100) {
        header.classList.remove("scroll")
    }

    if(scrollPosition >= 400) {
        infoContainerSpan.classList.add("visible")
        infoImage.classList.add("visible")
        infoContainerPara.classList.add("visible")
    }

    if(scrollPosition >= 1200) {
        skillInfo.classList.add("visible")
        setTimeout(() => {
            educationInfo.classList.add("visible")
        }, 300)
    }

    if(scrollPosition >= 2100) {
        projectContainer.classList.add("visible")
    }

    if(scrollPosition >= 460) {
        scrollToTheTop.classList.add("scroll-top__visible")
    } else {
        scrollToTheTop.classList.remove("scroll-top__visible")
    }
    
    if(scrollPosition >= 760 && scrollPosition < 1500) {
        about.classList.add("active")
    } else {
        about.classList.remove("active")
    }

    if(scrollPosition >= 1500 && scrollPosition < 2500) {
        skill.classList.add("active")
    } else {
        skill.classList.remove("active")
    }

    if(scrollPosition >= 2500 && scrollPosition < 3000) {
        project.classList.add("active")
    } else {
        project.classList.remove("active")
    }

    if(scrollPosition >= 3000) {
        contact.classList.add("active")
    } else {
        contact.classList.remove("active")
    }
})

closeForm.addEventListener("click", (event) => {
    setTimeout(() => {
        bodyScroll.classList.remove("no-scroll")
        form.classList.remove("form__visible")
    }, 500)
    formDrop.classList.remove("form__transform")
})

fetch('/project.json')
    .then(res => res.json())
    .then(data => {
        const projectList = document.querySelector(".project__list")

        data.forEach((pj, index) => {
            const card = document.createElement("div")
            card.className = 'project__link'
            card.innerHTML = `
                <div class="project__content">
                    <span class="project__title">${pj.nameProject}</span>
                    <svg class="project__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 0 64z"/>
                    </svg>
                </div>
                <div class="project__v1" style="background-image: url('${pj.imageUrl}')"></div>`;

            card.addEventListener('click', () => {
                formTitle.textContent = pj.nameProject
                formType.textContent = pj.typeProject
                formImage.src = pj.imageUrl
                formContent.textContent = pj.content
                formButtonSite.href = pj.site
                formButtonSource.href = pj.source

                bodyScroll.classList.add("no-scroll")
                form.classList.add("form__visible")
                setTimeout(() => {
                    formDrop.classList.add("form__transform")
                }, 300)

            })

            projectList.appendChild(card)
        })
    })

scrollToTheTop.addEventListener("click", (event) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
})

let isDropped = false

menu.addEventListener("click", (event) => {
    if(!isDropped) {
        navDrop.classList.add("nav__appear")
        
        isDropped = true
    } else {
        navDrop.classList.remove("nav__appear")
        
        isDropped = false
    }
})