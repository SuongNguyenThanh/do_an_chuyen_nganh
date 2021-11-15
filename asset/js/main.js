// sign in and sign up

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const forms = $$('.tab-content-form');

const tabActive = $('.tab-content-form.active');
const line = $('.tabs .line');

line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';


tabs.forEach((tab, index) => {

    const formAcc = forms[index];

    tab.onclick = function() {
        $('.tab-item.active').classList.remove('active');
        $('.tab-content-form.active').classList.remove('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';
        this.classList.add('active');
        formAcc.classList.add('active');
    }
});