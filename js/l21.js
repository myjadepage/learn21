//dropdown menu
const getEventTarget = e => {
    e = e || window.event;
    return e.target || e.srcElement;
};
const navBar = document.querySelector('.side-navbar');
const dropDown = document.querySelectorAll('.dropdown');
const dropBtn = document.querySelectorAll('.drop-btn');
const dropMenu = document.querySelectorAll('.dropdown-content');
const noState = () => {
    dropMenu.forEach(el => {
        el.setAttribute('data-state', 'closed');
        el.style.display = "none";
    });
    dropBtn.forEach(el => {
        el.classList.remove('expanded');
    });

}
const dropDownMenu = (e) => {
    e.stopPropagation();
    let $this = getEventTarget(e);
    if ($this.className === 'drop-btn') {
        $this.classList.add('expanded');
        let $that = $this.nextElementSibling;
        $that.setAttribute('data-state', $that.getAttribute('data-state') === 'open' ?
            'closed' : 'open'
        );
        $that.style.display = {
            'open': 'block',
            'closed': 'none'
        }[$that.getAttribute('data-state')];
    }
}
navBar.addEventListener('click', dropDownMenu);
dropDown.forEach(el => { el.addEventListener('click', noState); });
dropMenu.forEach(el => { el.addEventListener('click', noState); });
noState();


// sidebar hide show
const contentInner = document.querySelector('.content-inner')
document.querySelector('.menu-btn').addEventListener('click', function(e) {
    if (navBar.className == 'side-navbar shrinked') {
        navBar.classList.remove('shrinked');
        contentInner.classList.remove('active');
    } else {
        navBar.classList.add('shrinked');
        contentInner.classList.add('active');
    }
})