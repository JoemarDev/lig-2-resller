

const WebHelper = {
    NumberOnly(e) {
        if (isNaN(e.target.value)) {
            e.preventDefault();
        }
    },
    FormatDate(d) {
        let date = new Date(d);
        let options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZone: "Asia/Seoul"
        };
        let KoreaFormat = date.toLocaleString("ko-KR", options);

        return KoreaFormat.replace(',', '');

        // let date = new Date(d);
        // return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
    },
    FormatSingleDate(d) {
        let date = new Date(d);
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
    },
    RecordDateParser(string) {
        const PS = string.split('-');
        var StringDate = Date.parse(`${PS[2]}-${PS[1]}-${PS[0]}`, "yyyy-MM-dd");
        let date = new Date(StringDate);
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
    },
    FormatBankNumber(num) {
        let data = num.toString();
        let formatted = '';

        for (let i = 0; i < data.length; i++) {
            formatted += data[i];
            if (i == 3 || i == 7) {
                formatted += '-';
            }
        }

        return formatted;
    },
    FormatPhoneNumber(num) {
        let data = num.toString();
        let formatted = '';

        for (let i = 0; i < data.length; i++) {
            formatted += data[i];
            if (i == 2 || i == 6) {
                formatted += '-';
            }
        }

        return formatted;
    },
    FormatMoney(num) {

        Number.prototype.format = function (n, x) {
            var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
            return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
        };

        return parseInt(num).format();

    },
    FormatInteger(num) {

        return new Intl.NumberFormat().format(Math.round(num));

    },

}

export default WebHelper;