    const hats = document.getElementById("hatscontainer");
    const tops = document.getElementById("topscontainer");
    const shoes = document.getElementById("shoescontainer");

    let itemsHats = [
        "./images/hat1.png",
        "./images/hat2.png",
        "./images/hat3.png",
        "./images/hat4.png",
        "./images/hat5.png",
        "./images/hat6.png",
        "./images/hat7.png",
        "./images/hat8.png",
        "./images/hat9.png",
        "./images/hat10.png"
    ]

    let itemsTops = [
        "./images/top1.png",
        "./images/top2.png",
        "./images/top3.png",
        "./images/top4.png",
        "./images/top5.png",
        "./images/top6.png",
        "./images/top7.png",
        "./images/top8.png",
        "./images/top9.png",
        "./images/top10.png"
    ]

    let itemsShoes = [
        "./images/shoes1.png",
        "./images/shoes2.png",
        "./images/shoes3.png",
        "./images/shoes4.png",
        "./images/shoes5.png",
        "./images/shoes6.png",
        "./images/shoes7.png",
        "./images/shoes8.png",
        "./images/shoes9.png",
        "./images/shoes10.png"
    ]

    let sayings = [
        "Good choice!",
        "I look great!",
        "Fabulous!",
        "Feelin' myself!",
        "Hot stuff!",
        "Niiiiice!",
        "Lookin' good!",
        "Nice one!",
        "Outfit on point!",
        "Yaaaass!",
        "Very cool!",
        "Awesome!",
        "Sassy!",
        "Nice outfit!",
        "Gorgeous!",
        "Very nice!",
        "Superb!",
        "Flawless!",
        "I look fantastic!",
        "Lookin' delicious!",
        "Perfect!",
        "Stylish!"
    ]

    let hatsIndex;
    let hatsTotal = itemsHats.length - 1;
    let topsIndex;
    let topsTotal = itemsTops.length - 1;
    let shoesIndex;
    let shoesTotal = itemsShoes.length - 1;
    let sentence;

    hatsright.addEventListener('click', hatsMoveRight);
    hatsleft.addEventListener('click', hatsMoveLeft);
    topsright.addEventListener('click', topsMoveRight);
    topsleft.addEventListener('click', topsMoveLeft);
    shoesright.addEventListener('click', shoesMoveRight);
    shoesleft.addEventListener('click', shoesMoveLeft);
    reset.addEventListener('click', resetClothes);
    randomize.addEventListener('click', randomizeClothes);
    opinion.addEventListener('click', penguinSays);


    function selectItem(item, arrayName, itemIndex) {
        item.setAttribute("src", arrayName[itemIndex]);
        document.getElementById("saying").innerHTML = " ";
    }

    function hatsMoveRight() {
        if (hatsIndex < hatsTotal) {
            hatsIndex++;
        } else {
            hatsIndex = 0;
        }
        selectItem(hats, itemsHats, hatsIndex);
    }

    function hatsMoveLeft() {
        if (hatsIndex <= hatsTotal) {
            hatsIndex--;
        }
        if (hatsIndex < 0) {
            hatsIndex = hatsTotal;
        }
        if (hatsIndex === undefined) {
            hatsIndex = hatsTotal;
        }
        selectItem(hats, itemsHats, hatsIndex);
    }

    function topsMoveRight() {
        if (topsIndex < topsTotal) {
            topsIndex++;
        } else {
            topsIndex = 0;
        }
        selectItem(tops, itemsTops, topsIndex);
    }

    function topsMoveLeft() {
        if (topsIndex <= topsTotal) {
            topsIndex--;
        }
        if (topsIndex < 0) {
            topsIndex = topsTotal;
        }
        if (topsIndex === undefined) {
            topsIndex = topsTotal;
        }
        selectItem(tops, itemsTops, topsIndex);
    }

    function shoesMoveRight() {
        if (shoesIndex < shoesTotal) {
            shoesIndex++;
        } else {
            shoesIndex = 0;
        }
        selectItem(shoes, itemsShoes, shoesIndex);
    }

    function shoesMoveLeft() {
        if (shoesIndex <= shoesTotal) {
            shoesIndex--;
        }
        if (shoesIndex < 0) {
            shoesIndex = shoesTotal;
        }
        if (shoesIndex === undefined) {
            shoesIndex = shoesTotal;
        }
        selectItem(shoes, itemsShoes, shoesIndex);
    }

    function resetClothes() {
        hats.setAttribute("src", "./images/penguinhead.png");
        tops.setAttribute("src", "./images/penguinbody.png");
        shoes.setAttribute("src", "./images/penguinfeet.png");
        hatsIndex = undefined;
        topsIndex = undefined;
        shoesIndex = undefined;
        document.getElementById("saying").innerHTML = " ";
        console.log(hatsIndex, topsIndex, shoesIndex);
    }

    function randomizeClothes() {
        hats.setAttribute("src", itemsHats[Math.floor(Math.random() * itemsHats.length)]);
        hatsIndex = 0;
        tops.setAttribute("src", itemsTops[Math.floor(Math.random() * itemsTops.length)]);
        topsIndex = 0;
        shoes.setAttribute("src", itemsShoes[Math.floor(Math.random() * itemsShoes.length)]);
        shoesIndex = 0;
        document.getElementById("saying").innerHTML = " ";
    }

    function penguinSays() {
        if (hatsIndex === undefined && topsIndex === undefined && shoesIndex === undefined) {
            sentence = "I'm naked!"
        } else if (hatsIndex === undefined) {
            sentence = "Put a hat on my noggin!"
        } else if (topsIndex === undefined) {
            sentence = "I'm still half naked.."
        } else if (shoesIndex === undefined) {
            sentence = "Shoes please!"
        } else if (hatsIndex != undefined && topsIndex != undefined && shoesIndex != undefined) {
            const randomSaying = Math.floor(Math.random() * sayings.length);
            sentence = sayings[randomSaying];
        }

        document.getElementById("saying").innerHTML = sentence;
    }