// let background = document.getElementById('start')

let skillmap = document.getElementById('skillmap');
let icons = skillmap.querySelectorAll('.icon');

icons.forEach(icon => {
    icon.addEventListener('mouseenter', highlightIcon);
    icon.addEventListener('mouseleave', dehighlightIcon);

})

function highlightIcon() {
    this.classList.add('selected');
    let selectedIcon = this.id;
    let connectedLines = skillmap.querySelectorAll('.' + selectedIcon);
    connectedLines.forEach(line => line.classList.add('selected'));
}

function dehighlightIcon() {
    this.classList.remove('selected');
    let deselectedIcon = this.id;
    let connectedLines = skillmap.querySelectorAll('.' + deselectedIcon);
    connectedLines.forEach(line => line.classList.remove('selected'));}