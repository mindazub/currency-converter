$("#amount_from").on('keyup', function () {
    convert();
});

$("#currency_from").on('change', function () {
    convert();
});

$("#currency_to").on('change', function () {
    convert();
});

$('#swap').on('click', function (e) {
    e.preventDefault();
    let currency_from = $('#currency_from').val();
    let currency_to = $('#currency_to').val();
    $('#currency_from').val(currency_to);
    $('#currency_to').val(currency_from);
    convert();
});

convert();

function convert() {
    var currency_from = $('#currency_from').val();
    var currency_to = $('#currency_to').val();
    var amount_from = $('#amount_from').val();
    if (currency_from === currency_to) {
        $('#amount_to').val(amount_from);
    } else {
        getRates(currency_from, currency_to, amount_from);
    }
}

function getRates(currency_from, currency_to, amount_from ) {
    $.ajax({
        url: "https://api.exchangeratesapi.io/latest?base=" + currency_from,
        success: function (result) {
            $('#amount_to').val((result.rates[currency_to] * amount_from).toFixed(3));
        },
    });
}