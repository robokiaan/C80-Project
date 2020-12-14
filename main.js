function get_para_one() {
    var inputs = []
    for (var i = 0; i < 7; i++) {
        inputs.push(jQuery(`#input-box-${i + 1}-para-1`).val())
    }
    var paragraph = inputs.join('.') + '<br><br>'
    jQuery('#paragraph').html(paragraph)
}

function get_para_two() {
    var inputs = []
    for (var i = 0; i < 7; i++) {
        inputs.push(jQuery(`#input-box-${i + 1}-para-2`).val())
    }
    console.log(inputs)
    var paragraph = inputs.join('.')
    jQuery('#paragraph').html(`${jQuery('#paragraph').text()}<br><br>${paragraph}`)
}