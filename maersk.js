(function () {
    const merge = (left, right) => {
        const result = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                result.push(left.shift())
            } else {
                result.push(right.shift())
            }
        }

        return [...result, ...left, ...right];
    }

    const mergeSort = (array = []) => {
        if (array.length < 2) {
            return array
        }
        const mid = (array.length / 2);
        const left = array.slice(0, mid);
        const right = array.slice(mid);
        return merge(mergeSort(left), mergeSort(right));
    }

    const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));

    const suffle = function () {
        for (let i = this.length - 1; i > 0; i--) {
            const j = getRandomNumber(i);
            [this[i], this[j]] = [this[j], this[i]]
        }
    }
    Array.prototype.suffle = suffle;

    const arrayObj = Array.from({ length: 9 }, (v, i) => i + 1);

    const render = () => {
        const boxContainer = document.getElementById("grid");
        boxContainer.innerHTML = arrayObj.map(value => `<div class="col-4 box box-${value}"><span>${value}</span></div>`).join(' ');
    }
    render();

    const suffleButton = document.getElementById('suffle');
    const sortButton = document.getElementById('sort');

    suffleButton.addEventListener('click', (e) => {
        arrayObj.suffle();
        render();
    });
    sortButton.addEventListener('click', (e) => {
        arrayObj.splice(0, arrayObj.length, ...mergeSort(arrayObj));
        render();
    });
})()
