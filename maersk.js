(function () {

    const quickSort = function (left = 0, right = this.length - 1) {
        if (right - left <= 0) {
            return;
        }
        const pivot = this[right];

        let i = left;
        let j = right - 1;

        while (true) {
            while (this[i] < pivot) { i++ }
            while (j > 0 && this[j] > pivot) { j--; }

            if (i >= j) { break };
            ([this[i], this[j]] = [this[j], this[i]])
        }

        [this[i], this[right]] = [this[right], this[i]];

        this.quickSort(left, i - 1);
        this.quickSort(i + 1, right);

        return this;
    }
    Array.prototype.quickSort = quickSort

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
        arrayObj.quickSort();
        render();
    });
})()
