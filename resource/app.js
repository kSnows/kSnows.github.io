// let background = document.getElementById('start')

let skillmap = document.getElementById('skillmap');
let icons = skillmap.querySelectorAll('.icon');

icons.forEach(icon => {
    icon.addEventListener('mouseenter', highlightIconAndDisplayTooltip);
    icon.addEventListener('mouseleave', dehighlightIcon);
})

function highlightIconAndDisplayTooltip() {
    this.classList.add('selected');
    let selectedIcon = this.id;
    let connectedLines = skillmap.querySelectorAll('.' + selectedIcon);
    connectedLines.forEach(line => line.classList.add('selected'));

    let selectedIconPositionX = this.getBoundingClientRect().left + this.getBoundingClientRect().width / 2;
    let selectedIconPositionY = this.getBoundingClientRect().top + this.getBoundingClientRect().height / 2;
    let selectedTooltip = skillmap.querySelector('.tooltip.' + selectedIcon);
    selectedTooltip.style.top = selectedIconPositionY;
    selectedTooltip.style.left = selectedIconPositionX;
}

function dehighlightIcon() {
    this.classList.remove('selected');
    let deselectedIcon = this.id;
    let connectedLines = skillmap.querySelectorAll('.' + deselectedIcon);
    connectedLines.forEach(line => line.classList.remove('selected'));
}