var lunar = {
    // 天干
    TianGan: ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'],

    // 地支
    DiZhi: ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'],

    /**
     * 获取干支年
     * @param {number} y 年份
     * @return {string}
     */
    getGzYear: function (y) {

        y = y - 3;

        var g = y % 10;
        var z = y % 12;

        if (g === 0) {

            g = 10;

        }

        if (z === 0) {

            z = 12;

        }

        return this.TianGan[g - 1] + this.DiZhi[z - 1];

    },

    /**
     * 获取干支日
     * @param {number} y 年
     * @param {number} m 月
     * @param {number} d 日
     * @return {string}
     */
    getGzDay: function (y, m, d) {

        var gz = 0; // 日干支基数

        var tail = parseInt(y.toString().substr(2, 2), 10); // 年份后两位尾数

        if ( y < 2000) {

            gz = (tail + 3) * 5 + 55 + Math.floor((tail - 1) / 4);

        } else {

            gz = (tail + 7) * 5 + 15 + Math.floor((tail + 19) / 4);

        }

        var start = new Date(y, 0, 1);

        var end = new Date(y, m - 1, d);

        var diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24); // 相差天数

        var offset  = (gz + diff + 1) % 60;

        return this.TianGan[offset % 10 - 1] + this.DiZhi[offset % 12 - 1];

    }

};