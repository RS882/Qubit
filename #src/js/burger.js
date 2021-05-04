
//Menu

toggleClassActive(".icon-menu", ".menu-header, .header__active", "_active");
toggleClassActive(".icon-menu", "body", "__lock");

removeClassActive(".menu-header__link, .active-header__link", ".menu-header", "_active");
removeClassActive(".menu-header__link, .active-header__link", ".header__active", "_active"); 
removeClassActive(".menu-header__link, .active-header__link", ".icon-menu", "_active"); 
removeClassActive(".menu-header__link, .active-header__link", "body", "__lock"); 

removeClassWidthScreen(991.98, ".menu-header", "_active");
removeClassWidthScreen(991.98, ".header__active", "_active");
removeClassWidthScreen(991.98, ".icon-menu", "_active");
removeClassWidthScreen(991.98, "body", "__lock");


 // добавляет/удаляет  класс addClass к селекторам addClassSelectors при нажатии на сlickSelector
 function toggleClassActive(clickSelector, addClassSelectors, addClass) {
 	const iconMenu = document.querySelector(clickSelector);

 	if (iconMenu != null) {
 		const menuBody = document.querySelectorAll(addClassSelectors);

 		iconMenu.addEventListener("click", function (e) {
 			//body_lock(delay);
 			iconMenu.classList.toggle(addClass);
 			menuBody.forEach((elem) => {
 				elem.classList.toggle(addClass)
 			});
 		});
 	};
 };


//  проверяет наличие класс removeClass  у селектора  removeClassSelectoк при клике на селекторі lickSelectors
function removeClassActive(clickSelectors , removeClassSelector, removeClass) {
const clickElem = document.querySelectorAll(clickSelectors);
	clickElem.forEach(elem => {
		elem.addEventListener("click", function (params) {
			removeClassIfNull(removeClassSelector, removeClass);
		}
		);
	});
	
}

// проверяет наличие и удалает класс removeClass  у селектора  removeClassSelectoк при ширине экрана болmit или равной maxWidth
function removeClassWidthScreen( maxWidth, removeClassSelector, removeClass) {

// Условие для viewport шириной не более  maxWidth пикселей
const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`)

mediaQuery.addEventListener('change', function(mm) {

	removeClassIfNull(removeClassSelector, removeClass)

})
	
};

 function removeClassIfNull(elem, removeClass) { // проверят и если есть удалает класс removeClass
		if (document.querySelector(elem).classList.contains(removeClass)) {
			document.querySelector(elem).classList.remove(removeClass);
		}
	};

