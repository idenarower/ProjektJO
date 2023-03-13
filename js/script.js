const nav = document.querySelector('.header__container__burgeritems')
const navBtn = document.querySelector('.header__container__burgericon')
const allNavItems = document.querySelectorAll('.header__container__burgeritems__item')

const handleNav = () => {
	nav.classList.toggle('header__container__burgeritems--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('header__container__burgeritems--active')
		})
	})
}

navBtn.addEventListener('click', handleNav)
