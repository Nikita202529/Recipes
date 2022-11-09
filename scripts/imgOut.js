const createSection = (imageOut) => {
    for (let key in images) {
        // let img = document.createElement('img');
        let div = document.createElement('div');
        let p = document.createElement('p');
        let h2 = document.createElement('h2');
    
        div.setAttribute('data-key', key);
        div.style.backgroundImage = `url('./img/desctop/Body/recipes/${key}.png')`;
        div.style.maxWidth = '320px';
        div.style.maxHeight = '225px';
        div.style.width = '320px';
        div.style.height = '225px';
        div.classList.add('image_description');
    
        for (let keyItem in images[key]) {
            if (typeof 1 === typeof images[key][keyItem]) {
                p.innerText = images[key][keyItem] + ' Recipes';
                div.append(p);
            } else {
                h2.innerText = images[key][keyItem].toUpperCase();
                div.append(h2);
            }
    
            imageOut.append(div);
        }
        
    }
}

const imageOut = document.querySelector('.image_out');

createSection(imageOut, images);