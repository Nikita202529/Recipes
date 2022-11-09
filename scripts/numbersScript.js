const divNumbers = document.querySelector('.numbers');

const divNumbersOut = (divNumbers) => {

    for (let key in numbersObj) {
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');

        div.classList.add('number_description');

        for (let keyItem in numbersObj[key]) {
            if (typeof 1 === typeof numbersObj[key][keyItem]) {

                let max = numbersObj[key][keyItem];
                const time = 300;
                const step = Math.round(max / time);
                let start = 0;


                let timer = setInterval(() => {
                    start += step;
                    if (start >= max) {
                        clearInterval(timer);
                        start = max + ''
                        if (start.length > 3) {
                            start = start.slice(0, length - 3) + ',' + start.slice(length - 3);
                        }
                    }

                    h2.innerText = start;
                    div.append(h2);

                }, 1)

            } else {
                p.innerText = numbersObj[key][keyItem];
                div.append(p);
            }

            divNumbers.append(div);
        }
    }
}

// For start animation
const numbersSection = document.getElementsByClassName('numbersSection');

window.addEventListener('scroll', () => {
    let sourceBottom = window.pageYOffset - numbersSection[0].getBoundingClientRect().top + 850;
    let numberDescription = document.querySelector('.number_description');
    if (window.pageYOffset <= sourceBottom && !numberDescription) {
        divNumbersOut(divNumbers);
        window.removeEventListener('scroll', divNumbersOut);
    }
});

