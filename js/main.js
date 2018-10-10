
function getRates(currency_from, currency_to, amount_from ) {
    $.ajax({
        url: "https://api.exchangeratesapi.io/latest?base=" + currency_from,
        success: function (result) {
            $('#amount_to').val((result.rates[currency_to] * amount_from).toFixed(3));
        },
    });
}