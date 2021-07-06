'use strict'

const category_win = document.querySelector('.nav_wrapp');
		category_win.addEventListener('mouseover', () => {
			document.querySelector('.nav_categorys').classList.add('visable');
			// document.querySelector('.nav_categorys').classList.remove('hidden');
		})
		document.querySelector('.nav_categorys').addEventListener('mouseout', (event) => {
			if(!event.target.classList.contains('nav_wrapp') ||
				!event.target.classList.contains('nav_categorys')||
				!event.target.classList.contains('subject')){

				document.querySelector('.nav_categorys').classList.remove('visable');
				// setTimeout(()=> document.querySelector('.nav_categorys').classList.add('visable'),300)
				}
		})