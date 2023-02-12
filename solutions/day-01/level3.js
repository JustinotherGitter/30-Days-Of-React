// https://www.calculatorsoup.com/calculators/statistics/descriptivestatistics.php

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];


class Statistics {
    constructor(data = []) {
        this.data = data.sort();
        this.modeStruct = {}
    }

    count() {
        return this.data.length
    }

    sum() {
        return this.data.reduce((acc, cur) => acc + cur)
    }

    min() {
        return Math.min(...this.data)
    }

    max() {
        return Math.max(...this.data)
    }

    range() {
        return this.max() - this.min()
    }

    mean() {
        return this.sum() / this.count()
    }

    median() {
        return (this.count() % 2 !== 0)
            ? this.data[Math.floor((this.count() - 1) / 2)]
            : (this.data[(this.count() / 2) - 1] + this.data[this.count() / 2]) / 2
    }

    mode() {
        this.data.forEach((val) => this.modeStruct[val] = (this.modeStruct[val]+1) || 1);

        let mode = Object.keys(this.modeStruct).reduce((acc, cur) => this.modeStruct[acc] > this.modeStruct[cur] ? acc : cur);

        return { mode: mode, count: this.modeStruct[mode] };
    }

    var() {
        let sum = 0;
        this.data.forEach((val) => sum += (val - this.mean()) ** 2 );
        return sum / this.count()
    }

    std() {
        return this.var() ** 0.5
    }

    freqDist() {
        // let sortable = [];
        // for (var vehicle in maxSpeed) {
        //     sortable.push([vehicle, maxSpeed[vehicle]]);
        // }
        
        // sortable.sort(function(a, b) {
        //     return a[1] - b[1];
        // });
        let freqDist = [];
        for ( let val in this.modeStruct ) {
            freqDist.push([this.modeStruct[val] / this.count() * 100, val])
        }

        return freqDist.sort((a, b) => a[0] - b[0]).reverse()
    }
};


let statistics = new Statistics(ages);


console.log('Count:', statistics.count()); // 25
console.log('Sum: ', statistics.sum()); // 744
console.log('Min: ', statistics.min()); // 24
console.log('Max: ', statistics.max()); // 38
console.log('Range: ', statistics.range()); // 14
console.log('Mean: ', statistics.mean()); // 30
console.log('Median: ', statistics.median()); // 29
console.log('Mode: ', statistics.mode()); // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.var()); // 17.5
console.log('Standard Deviation: ', statistics.std()); // 4.2
console.log('Frequency Distribution: ', statistics.freqDist()); // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]