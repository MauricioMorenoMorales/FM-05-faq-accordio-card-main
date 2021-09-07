const $items = document.querySelectorAll('.faq__item');
const $box = document.querySelector('.header__box-illustration');

document.addEventListener('mousemove', event => {
	console.log(event.offsetX);
	$box.style.left = -103 + event.offsetX / 300 + 'px';
});

document.addEventListener('click', event => {
	if (
		event.target.matches('.faq__item') ||
		event.target.matches('.faq__item *')
	) {
		const eventItemNumber = event.target
			.closest('.faq__item')
			.getAttribute('data-number');
		for (const item of $items) {
			if (eventItemNumber === item.getAttribute('data-number')) {
				if (
					item.querySelector('.faq__item__header').classList.contains('active')
				) {
					item.querySelector('.faq__item__header').classList.remove('active');
					item
						.querySelector('.faq__item__header__arrow')
						.classList.remove('active');
					item.querySelector('.faq__item__content').classList.remove('active');
				} else {
					item.querySelector('.faq__item__header').classList.add('active');
					item
						.querySelector('.faq__item__header__arrow')
						.classList.add('active');
					item.querySelector('.faq__item__content').classList.add('active');
				}
			} else {
				item.querySelector('.faq__item__header').classList.remove('active');
				item
					.querySelector('.faq__item__header__arrow')
					.classList.remove('active');
				item.querySelector('.faq__item__content').classList.remove('active');
			}
		}
	}
});
