window.addEventListener('scroll', function () {
    var navbar = this.document.getElementById('navbar');
    if (this.window.scrollY > 50) {
        navbar.style.backgroundColor = 'blue';
    }
    else {
        navbar.style.backgroundColor = 'red';
    }


}
)